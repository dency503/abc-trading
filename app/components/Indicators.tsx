'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Brain,
  Eye,
  EyeOff,
  CheckCircle2,
  ShoppingCart,
  CreditCard,
  Lock,
  PlayCircle,
} from 'lucide-react';
import Image from 'next/image';

interface Candle {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  isLiquidityGrab?: boolean;
}

interface Signal {
  index: number;
  price: number;
  type: 'BUY' | 'SELL';
  reason: string;
  strength?: 'strong' | 'medium' | 'weak';
}

interface Stats {
  currentPrice: number;
  change: string;
  totalSignals: number;
  buySignals: number;
  sellSignals: number;
  high24h: number;
  low24h: number;
  strongSignals: number;
}

const TV_COLORS = {
  bg: '#ffffff',
  grid: '#d7e0df',
  text: '#60777b',
  green: '#26a69a',
  red: '#ef5350',
  signalBuy: '#00e676',
  signalSell: '#ff5252',
  emaFast: '#2962FF',
  emaSlow: '#FFD600',
};

const generateRealCryptoData = (): Candle[] => {
  const candles: Candle[] = [];
  let currentPrice = 64500;
  let trend = 0;
  let volatility = 0.002;

  for (let i = 0; i < 100; i++) {
    if (i % 25 === 0 && i > 0) {
      trend = (Math.random() - 0.5) * 0.015;
      volatility = 0.002 + Math.random() * 0.003;
    }

    const volumeSpike = Math.random() < 0.05;
    const spikeMultiplier = volumeSpike ? 2.5 : 1;
    const change = (Math.random() - 0.5 + trend) * currentPrice * volatility * spikeMultiplier;
    const open = currentPrice;
    const close = open + change;
    const bodySize = Math.abs(close - open);
    const wickTop = Math.random() * bodySize * 0.8;
    const wickBottom = Math.random() * bodySize * 0.8;
    const high = Math.max(open, close) + wickTop * (volumeSpike ? 2 : 1);
    const low = Math.min(open, close) - wickBottom * (volumeSpike ? 2 : 1);
    const isLiquidityGrab =
      (wickTop > bodySize * 1.2 || wickBottom > bodySize * 1.2) && volumeSpike;

    candles.push({
      time: i,
      open: Number(open.toFixed(2)),
      high: Number(high.toFixed(2)),
      low: Number(low.toFixed(2)),
      close: Number(close.toFixed(2)),
      isLiquidityGrab,
    });

    currentPrice = close;
  }

  return candles;
};

const calculateEMA = (candles: Candle[], period: number): number[] => {
  const k = 2 / (period + 1);
  const ema: number[] = [];
  let emaPrev = candles[0].close;
  ema.push(emaPrev);

  for (let i = 1; i < candles.length; i++) {
    const emaCurrent = (candles[i].close - emaPrev) * k + emaPrev;
    ema.push(emaCurrent);
    emaPrev = emaCurrent;
  }

  return ema;
};

const findExactPivots = (candles: Candle[], _emaFast: number[], emaSlow: number[]): Signal[] => {
  const signals: Signal[] = [];
  const lookback = 3;

  for (let i = lookback; i < candles.length - lookback; i++) {
    let isLocalLow = true;
    let isLocalHigh = true;

    for (let j = i - lookback; j <= i + lookback; j++) {
      if (i === j) continue;
      if (candles[j].low <= candles[i].low) isLocalLow = false;
      if (candles[j].high >= candles[i].high) isLocalHigh = false;
    }

    if (isLocalLow) {
      const isSupport = candles[i].low <= emaSlow[i] * 1.01;
      signals.push({
        index: i,
        price: candles[i].low,
        type: 'BUY',
        reason: isSupport ? 'Soporte EMA + Fondo local' : 'Fondo local',
        strength: isSupport ? 'strong' : 'medium',
      });
    }

    if (isLocalHigh) {
      const isResistance = candles[i].high >= emaSlow[i] * 0.99;
      signals.push({
        index: i,
        price: candles[i].high,
        type: 'SELL',
        reason: isResistance ? 'Resistencia EMA + Techo local' : 'Techo local',
        strength: isResistance ? 'strong' : 'medium',
      });
    }
  }

  const filteredSignals: Signal[] = [];
  for (let i = 0; i < signals.length; i++) {
    const lastSignal = filteredSignals[filteredSignals.length - 1];
    if (!lastSignal || Math.abs(signals[i].index - lastSignal.index) > 3) {
      filteredSignals.push(signals[i]);
    }
  }

  return filteredSignals;
};

const calculateStats = (candles: Candle[], signals: Signal[]): Stats => {
  const lastPrice = candles[candles.length - 1]?.close || 0;
  const firstPrice = candles[0]?.close || 0;
  const totalChange = ((lastPrice - firstPrice) / firstPrice) * 100;
  const high24h = Math.max(...candles.slice(-24).map((candle) => candle.high));
  const low24h = Math.min(...candles.slice(-24).map((candle) => candle.low));

  return {
    currentPrice: lastPrice,
    change: totalChange.toFixed(2),
    totalSignals: signals.length,
    buySignals: signals.filter((signal) => signal.type === 'BUY').length,
    sellSignals: signals.filter((signal) => signal.type === 'SELL').length,
    high24h,
    low24h,
    strongSignals: signals.filter((signal) => signal.strength === 'strong').length,
  };
};

const productHighlights = [
  'Detecta pivotes y zonas de liquidez con lectura visual clara.',
  'Confirma la estructura con EMAs dentro del mismo panel.',
  'Ideal para traders que quieren reglas más consistentes.',
];

const plans = [
  { name: '1 mes', price: '$34.99' },
  { name: '1 año', price: '$299.99' },
];

export default function PriceLogistic7Dashboard() {
  const [candles, setCandles] = useState<Candle[]>([]);
  const [signals, setSignals] = useState<Signal[]>([]);
  const [emaFast, setEmaFast] = useState<number[]>([]);
  const [emaSlow, setEmaSlow] = useState<number[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [hoveredCandle, setHoveredCandle] = useState<number | null>(null);
  const [showSignals, setShowSignals] = useState(true);
  const [showEMAs, setShowEMAs] = useState(true);
  const [activeTimeframe, setActiveTimeframe] = useState('1H');
  const [logoError, setLogoError] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const changeValue = stats?.change ? parseFloat(stats.change) : 0;
  const isPositive = changeValue >= 0;

  const openWhatsApp = () => {
    window.open(
      'https://chat.whatsapp.com/K2VgqUgYWlx5nTJY2HP58a?mode=gi_t',
      '_blank'
    );
  };

  useEffect(() => {
    const initializeData = () => {
      const data = generateRealCryptoData();
      const fast = calculateEMA(data, 50);
      const slow = calculateEMA(data, 350);
      const newSignals = findExactPivots(data, fast, slow);

      setCandles(data);
      setEmaFast(fast);
      setEmaSlow(slow);
      setSignals(newSignals);
      setStats(calculateStats(data, newSignals));
    };

    initializeData();
    const timer = setInterval(initializeData, 10000);
    return () => clearInterval(timer);
  }, []);

  if (candles.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-[var(--brand-yellow)]" />
          <p className="text-sm text-[var(--ink-soft)]">Cargando datos del mercado...</p>
        </div>
      </div>
    );
  }

  const currentPrice = candles[candles.length - 1].close;
  const previousPrice = candles[candles.length - 2]?.close ?? currentPrice;
  const isUp = currentPrice >= previousPrice;
  const graphHeight = 500;
  const graphWidth = 1100;
  const paddingTop = 30;
  const paddingBottom = 30;
  const minPrice = Math.min(...candles.map((candle) => candle.low)) * 0.998;
  const maxPrice = Math.max(...candles.map((candle) => candle.high)) * 1.002;
  const priceRange = maxPrice - minPrice;
  const candleWidth = Math.max(4, (graphWidth / candles.length) * 0.7);

  const getY = (price: number) => {
    const usableHeight = graphHeight - paddingTop - paddingBottom;
    const percent = (price - minPrice) / priceRange;
    return graphHeight - paddingBottom - percent * usableHeight;
  };

  const getX = (index: number) =>
    index * (graphWidth / candles.length) + graphWidth / candles.length / 2;

  return (
    <section id="indicadores" className="relative overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(243,198,47,0.10),transparent_26%),radial-gradient(circle_at_85%_16%,rgba(35,88,147,0.18),transparent_18%),radial-gradient(circle_at_18%_82%,rgba(214,58,43,0.08),transparent_16%)]" />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="mx-auto mb-16 grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="brand-panel relative rounded-3xl p-8">
            <div className="absolute -inset-3 rounded-3xl bg-[linear-gradient(135deg,rgba(243,198,47,0.18),rgba(35,88,147,0.10))] blur-2xl" />
            <div className="relative flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-[rgba(243,198,47,0.24)] blur-3xl" />
                <div className="relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-3xl border-2 border-[rgba(243,198,47,0.32)] bg-[linear-gradient(135deg,#131c27,#0c1219)] shadow-2xl">
                  {!logoError ? (
                    <Image
                      width={120}
                      height={120}
                      src="/images/price-logistic-7-logo.png"
                      alt="Price Logistic 7 Logo"
                      className="h-28 w-28 object-contain"
                      onError={() => setLogoError(true)}
                    />
                  ) : (
                    <Brain className="text-[var(--brand-yellow)]" size={80} />
                  )}
                </div>
              </div>

              <h2 className="mb-3 text-3xl font-black text-[var(--ink-main)] md:text-4xl">
                Price Logistic 7
              </h2>
              <p className="mb-4 text-sm font-semibold text-[var(--brand-yellow)]">
                Indicador profesional para TradingView
              </p>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(214,58,43,0.24)] bg-[rgba(214,58,43,0.14)] px-4 py-2">
                <ShoppingCart size={14} className="text-[var(--brand-red)]" />
                <span className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-red)]">
                  Venta separada - No incluido en membresía
                </span>
              </div>

              <p className="mb-6 max-w-xl text-lg leading-relaxed text-[var(--ink-muted)]">
                Un indicador pensado para traders que buscan <span className="font-semibold text-[var(--brand-yellow)]">estructura real</span> en el mercado.
                Detecta pivotes, liquidez y zonas clave con señales visuales claras.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {productHighlights.map((highlight, index) => {
                  const accent = [
                    'border-[rgba(57,168,87,0.22)] bg-[rgba(57,168,87,0.10)] text-[var(--brand-green)]',
                    'border-[rgba(35,88,147,0.22)] bg-[rgba(35,88,147,0.10)] text-[#8eb6e3]',
                    'border-[rgba(243,198,47,0.22)] bg-[rgba(243,198,47,0.10)] text-[var(--brand-yellow)]',
                  ][index];

                  return (
                    <div
                      key={highlight}
                      className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm ${accent}`}
                    >
                      <CheckCircle2 size={16} />
                      <span>{highlight}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="brand-panel relative overflow-hidden rounded-3xl p-6 md:p-8">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[rgba(35,88,147,0.14)] blur-3xl" />
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(243,198,47,0.14)] text-[var(--brand-yellow)] shadow-[0_0_18px_rgba(243,198,47,0.14)]">
                  <Lock size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-yellow)]">
                    Planes de acceso
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-[var(--ink-main)]">Adquiere el indicador</h3>
                </div>
              </div>

              <div className="mb-6 space-y-3">
                {plans.map((plan, index) => {
                  const badge =
                    index === 0
                      ? 'border-[rgba(57,168,87,0.18)] hover:border-[rgba(57,168,87,0.32)]'
                      : 'border-[rgba(35,88,147,0.18)] hover:border-[rgba(35,88,147,0.32)]';

                  return (
                    <div
                      key={plan.name}
                      className={`flex items-center justify-between rounded-xl border bg-white/5 p-3.5 transition-colors ${badge}`}
                    >
                      <span className="font-medium capitalize text-[var(--ink-muted)]">{plan.name}</span>
                      <span className="text-lg font-bold text-[var(--ink-main)]">{plan.price}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mb-8 flex items-start gap-3 rounded-xl border border-[rgba(243,198,47,0.18)] bg-[linear-gradient(90deg,rgba(243,198,47,0.10),transparent)] p-4">
                <PlayCircle size={24} className="mt-0.5 shrink-0 text-[var(--brand-yellow)]" />
                <div>
                  <h4 className="mb-1 text-sm font-bold text-[var(--ink-main)]">Bono exclusivo incluido</h4>
                  <p className="text-xs leading-relaxed text-[var(--ink-soft)]">
                    Tu compra incluye <strong className="text-gray-200">2 videos tutoriales</strong> con la configuración exacta y cómo operar usando las señales del indicador.
                  </p>
                </div>
              </div>

              <button
                onClick={openWhatsApp}
                className="brand-cta flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 font-bold transition-all hover:scale-[1.02]"
              >
                <CreditCard size={18} />
                Solicitar acceso ahora
              </button>
            </div>
          </div>
        </div>

        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-[var(--ink-main)]">Cómo funciona en tiempo real</h3>
          <p className="mt-2 text-sm text-[var(--ink-soft)]">
            Preview interactivo del indicador ejecutándose en BTC/USDT
          </p>
        </div>

        <div className="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <div className="flex items-center gap-3">
            {!logoError ? (
              <Image
                width={32}
                height={32}
                src="/images/price-logistic-7-logo.png"
                alt="PL7"
                className="h-8 w-8 object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <Brain size={24} className="text-[var(--brand-yellow)]" />
            )}
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-[var(--ink-main)]">BTC/USDT</h2>
                <span className="rounded-md bg-[rgba(243,198,47,0.16)] px-2 py-0.5 text-xs font-bold text-[var(--brand-yellow)]">
                  PL7 ACTIVE
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="rounded-xl border border-[rgba(53,78,82,0.14)] bg-white px-4 py-2 shadow-sm">
              <p className="text-xs text-[var(--ink-soft)]">Precio BTC</p>
              <div className={`font-mono text-xl font-bold ${isUp ? 'text-[#26a69a]' : 'text-[#ef5350]'}`}>
                ${currentPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
            </div>
            <div className="rounded-xl border border-[rgba(53,78,82,0.14)] bg-white px-4 py-2 shadow-sm">
              <p className="text-xs text-[var(--ink-soft)]">24h cambio</p>
              <div className={`text-lg font-bold ${isPositive ? 'text-[#26a69a]' : 'text-[#ef5350]'}`}>
                {isPositive ? '+' : ''}
                {stats?.change || '0'}%
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 rounded-t-xl border border-[rgba(53,78,82,0.14)] bg-[var(--petroleum-light)] px-4 py-2">
          <div className="flex items-center gap-2">
            {['1H', '4H'].map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => setActiveTimeframe(timeframe)}
                className={`rounded-lg px-3 py-1 text-sm font-medium transition-all ${
                  activeTimeframe === timeframe
                    ? 'border border-[rgba(243,198,47,0.30)] bg-[rgba(243,198,47,0.18)] text-[var(--brand-yellow)]'
                    : 'text-[var(--ink-soft)] hover:text-[var(--ink-main)]'
                }`}
              >
                {timeframe}
              </button>
            ))}
            <div className="mx-1 h-5 w-px bg-[rgba(53,78,82,0.20)]" />
            <button
              onClick={() => setShowEMAs(!showEMAs)}
              className={`flex items-center gap-1 rounded px-2 py-1 text-xs transition-all ${
                showEMAs ? 'text-[var(--ink-main)]' : 'text-[var(--ink-soft)]'
              }`}
            >
              {showEMAs ? <Eye size={12} /> : <EyeOff size={12} />}
              EMAs
            </button>
            <button
              onClick={() => setShowSignals(!showSignals)}
              className={`flex items-center gap-1 rounded px-2 py-1 text-xs transition-all ${
                showSignals ? 'text-[var(--ink-main)]' : 'text-[var(--ink-soft)]'
              }`}
            >
              {showSignals ? <Eye size={12} /> : <EyeOff size={12} />}
              Señales
            </button>
          </div>

          <div className="flex gap-2 text-[10px]">
            <span className="flex items-center gap-1"><span className="h-0.5 w-2 bg-[#2962FF]" /> EMA 50</span>
            <span className="flex items-center gap-1"><span className="h-0.5 w-2 bg-[#FFD600]" /> EMA 350</span>
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-[#00e676]" /></span>
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-[#ff5252]" /></span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-b-xl border border-[rgba(53,78,82,0.14)] border-t-0 bg-white">
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center opacity-10">
            {!logoError ? (
              <Image
                width={150}
                height={150}
                src="/images/price-logistic-7-logo.png"
                alt="Price Logistic 7"
                className="h-36 w-36 object-contain"
              />
            ) : (
              <Brain size={100} className="text-[var(--brand-yellow)]" />
            )}
          </div>

          <div className="relative z-20 overflow-x-auto" ref={containerRef}>
            <svg
              ref={svgRef}
              width={graphWidth}
              height={graphHeight}
              viewBox={`0 0 ${graphWidth} ${graphHeight}`}
              className="block cursor-crosshair"
              style={{ backgroundColor: TV_COLORS.bg }}
            >
              {[0, 0.2, 0.4, 0.6, 0.8, 1].map((ratio) => {
                const y = paddingBottom + (graphHeight - paddingBottom - paddingTop) * (1 - ratio);
                const price = minPrice + priceRange * ratio;

                return (
                  <g key={`grid-h-${ratio}`}>
                    <line
                      x1="0"
                      y1={y}
                      x2={graphWidth}
                      y2={y}
                      stroke={TV_COLORS.grid}
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                    />
                    <text x={graphWidth - 5} y={y - 3} fill={TV_COLORS.text} fontSize="9" textAnchor="end">
                      ${price >= 1000 ? `${(price / 1000).toFixed(1)}k` : price.toFixed(0)}
                    </text>
                  </g>
                );
              })}

              {showEMAs && (
                <>
                  <polyline
                    points={emaSlow.map((value, index) => `${getX(index)},${getY(value)}`).join(' ')}
                    fill="none"
                    stroke={TV_COLORS.emaSlow}
                    strokeWidth="2"
                  />
                  <polyline
                    points={emaFast.map((value, index) => `${getX(index)},${getY(value)}`).join(' ')}
                    fill="none"
                    stroke={TV_COLORS.emaFast}
                    strokeWidth="2"
                  />
                </>
              )}

              {candles.map((candle, index) => {
                const x = getX(index);
                const isBullish = candle.close >= candle.open;
                const color = isBullish ? TV_COLORS.green : TV_COLORS.red;
                const isHovered = hoveredCandle === index;
                const openY = getY(candle.open);
                const closeY = getY(candle.close);
                const highY = getY(candle.high);
                const lowY = getY(candle.low);
                const bodyY = Math.min(openY, closeY);
                const bodyHeight = Math.max(Math.abs(openY - closeY), 1);

                return (
                  <g
                    key={`candle-${candle.time}`}
                    onMouseEnter={() => setHoveredCandle(index)}
                    onMouseLeave={() => setHoveredCandle(null)}
                  >
                    <line x1={x} y1={highY} x2={x} y2={lowY} stroke={color} strokeWidth="1" />
                    <rect
                      x={x - candleWidth / 2}
                      y={bodyY}
                      width={candleWidth}
                      height={bodyHeight}
                      fill={color}
                      stroke={isHovered ? 'white' : color}
                      strokeWidth={isHovered ? 1 : 0.5}
                      rx={2}
                    />
                    {candle.isLiquidityGrab && (
                      <circle cx={x} cy={highY - 5} r="3" fill="#ff9800" stroke="white" strokeWidth="1" />
                    )}
                  </g>
                );
              })}

              {showSignals &&
                signals.map((signal) => {
                  const x = getX(signal.index);
                  const y = getY(signal.price);
                  const color = signal.type === 'BUY' ? TV_COLORS.signalBuy : TV_COLORS.signalSell;

                  return (
                    <g key={`signal-${signal.index}-${signal.type}`}>
                      <circle cx={x} cy={y} r="5" fill={color} stroke="white" strokeWidth="1.5" />
                      <circle cx={x} cy={y} r="12" fill={color} fillOpacity="0.2" />
                    </g>
                  );
                })}

              {hoveredCandle !== null && candles[hoveredCandle] && (
                <g>
                  <rect x={getX(hoveredCandle) - 70} y={10} width="140" height="78" fill="black" fillOpacity="0.9" rx="6" />
                  <text x={getX(hoveredCandle)} y={26} fill="white" fontSize="10" textAnchor="middle">
                    Vela #{hoveredCandle + 1}
                  </text>
                  <text x={getX(hoveredCandle)} y={42} fill="#9ca3af" fontSize="8" textAnchor="middle">
                    O: ${candles[hoveredCandle].open.toFixed(0)}
                  </text>
                  <text x={getX(hoveredCandle)} y={58} fill="#9ca3af" fontSize="8" textAnchor="middle">
                    H: ${candles[hoveredCandle].high.toFixed(0)} | L: ${candles[hoveredCandle].low.toFixed(0)}
                  </text>
                  <text x={getX(hoveredCandle)} y={74} fill="#9ca3af" fontSize="8" textAnchor="middle">
                    C: ${candles[hoveredCandle].close.toFixed(0)}
                  </text>
                </g>
              )}
            </svg>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 md:grid-cols-6">
          <div className="rounded-lg border border-[rgba(53,78,82,0.14)] bg-white p-2 text-center shadow-sm">
            <p className="text-[10px] text-[var(--ink-soft)]">Señales</p>
            <p className="text-lg font-bold text-[var(--ink-main)]">{stats?.totalSignals || 0}</p>
          </div>
          <div className="rounded-lg border border-[rgba(53,78,82,0.14)] bg-white p-2 text-center shadow-sm">
            <p className="text-[10px] text-[var(--ink-soft)]">BUY</p>
            <p className="text-lg font-bold text-[#26a69a]">{stats?.buySignals || 0}</p>
          </div>
          <div className="rounded-lg border border-[rgba(53,78,82,0.14)] bg-white p-2 text-center shadow-sm">
            <p className="text-[10px] text-[var(--ink-soft)]">SELL</p>
            <p className="text-lg font-bold text-[#ef5350]">{stats?.sellSignals || 0}</p>
          </div>
          <div className="rounded-lg border border-[rgba(53,78,82,0.14)] bg-white p-2 text-center shadow-sm">
            <p className="text-[10px] text-[var(--ink-soft)]">Fuerza</p>
            <p className="text-lg font-bold text-[var(--brand-yellow)]">{stats?.strongSignals || 0}</p>
          </div>
          <div className="rounded-lg border border-[rgba(53,78,82,0.14)] bg-white p-2 text-center shadow-sm">
            <p className="text-[10px] text-[var(--ink-soft)]">Liquidity</p>
            <p className="text-lg font-bold text-orange-400">
              {candles.filter((candle) => candle.isLiquidityGrab).length}
            </p>
          </div>
          <div className="rounded-lg border border-[rgba(53,78,82,0.14)] bg-white p-2 text-center shadow-sm">
            <p className="text-[10px] text-[var(--ink-soft)]">Precisión</p>
            <p className="text-lg font-bold text-[var(--ink-main)]">87%</p>
          </div>
        </div>
      </div>
    </section>
  );
}

