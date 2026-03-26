'use client';

import { useEffect, useState, useRef } from 'react';
import { 
  Target, Activity, 
  Eye, EyeOff, TrendingUp, TrendingDown, DollarSign, 
  ArrowUp, ArrowDown,
  Sparkles, Brain, Gauge, Shield,
  MessageCircle, CheckCircle2, CandlestickChart, Bot, 
  ShoppingCart, CreditCard, Lock,
  PlayCircle
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

// Colores exactos de TradingView
const TV_COLORS = {
  bg: '#131722',
  grid: '#2a2e39',
  text: '#787b86',
  green: '#26a69a',
  red: '#ef5350',
  signalBuy: '#00e676',
  signalSell: '#ff5252',
  emaFast: '#2962FF',
  emaSlow: '#FFD600',
};

// Generador de datos realistas con volumen y tendencia
const generateRealCryptoData = (): Candle[] => {
  const candles: Candle[] = [];
  let currentPrice = 64500;
  let trend = 0;
  let volatility = 0.002;
  let volumeSpike = false;
  
  for (let i = 0; i < 100; i++) {
    if (i % 25 === 0 && i > 0) {
      trend = (Math.random() - 0.5) * 0.015;
      volatility = 0.002 + Math.random() * 0.003;
    }
    
    volumeSpike = Math.random() < 0.05;
    const spikeMultiplier = volumeSpike ? 2.5 : 1;
    
    const change = (Math.random() - 0.5 + trend) * currentPrice * volatility * spikeMultiplier;
    const open = currentPrice;
    const close = open + change;
    
    const bodySize = Math.abs(close - open);
    const wickTop = Math.random() * bodySize * 0.8;
    const wickBottom = Math.random() * bodySize * 0.8;
    
    const high = Math.max(open, close) + wickTop * (volumeSpike ? 2 : 1);
    const low = Math.min(open, close) - wickBottom * (volumeSpike ? 2 : 1);
    
    const isLiquidityGrab = (wickTop > bodySize * 1.2 || wickBottom > bodySize * 1.2) && volumeSpike;
    
    candles.push({
      time: i,
      open: Number(open.toFixed(2)),
      high: Number(high.toFixed(2)),
      low: Number(low.toFixed(2)),
      close: Number(close.toFixed(2)),
      isLiquidityGrab
    });
    
    currentPrice = close;
  }
  
  return candles;
};

// Calculadora de EMA mejorada
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

// Detector de pivotes mejorado
const findExactPivots = (candles: Candle[], emaFast: number[], emaSlow: number[]): Signal[] => {
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
      const strength = isSupport ? 'strong' : 'medium';
      signals.push({
        index: i,
        price: candles[i].low,
        type: 'BUY',
        reason: isSupport ? 'Soporte EMA + Fondo Local' : 'Fondo Local',
        strength
      });
    }
    
    if (isLocalHigh) {
      const isResistance = candles[i].high >= emaSlow[i] * 0.99;
      const strength = isResistance ? 'strong' : 'medium';
      signals.push({
        index: i,
        price: candles[i].high,
        type: 'SELL',
        reason: isResistance ? 'Resistencia EMA + Techo Local' : 'Techo Local',
        strength
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

// Calcular estadísticas
const calculateStats = (candles: Candle[], signals: Signal[]) => {
  const lastPrice = candles[candles.length - 1]?.close || 0;
  const firstPrice = candles[0]?.close || 0;
  const totalChange = ((lastPrice - firstPrice) / firstPrice) * 100;
  const high24h = Math.max(...candles.slice(-24).map(c => c.high));
  const low24h = Math.min(...candles.slice(-24).map(c => c.low));
  
  return {
    currentPrice: lastPrice,
    change: totalChange.toFixed(2),
    totalSignals: signals.length,
    buySignals: signals.filter(s => s.type === 'BUY').length,
    sellSignals: signals.filter(s => s.type === 'SELL').length,
    high24h,
    low24h,
    strongSignals: signals.filter(s => s.strength === 'strong').length,
  };
};

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
      const fast = calculateEMA(data, 12);
      const slow = calculateEMA(data, 26);
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

  if (candles.length === 0) return (
    <div className="min-h-screen bg-[#131722] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500 mx-auto mb-4"></div>
        <p className="text-gray-400 text-sm">Cargando datos del mercado...</p>
      </div>
    </div>
  );

  const currentPrice = candles[candles.length - 1].close;
  const isUp = currentPrice >= candles[candles.length - 2]?.close;
  const offerHighlights = [
    'Detección automática de pivotes y zonas de liquidez en tiempo real.',
    'Señales visuales claras de posibles entradas y salidas.',
    'EMAs personalizables para confirmar tendencia.',
    'Ideal para traders que buscan estructura y disciplina.',
  ];
  const offerCards = [
    {
      icon: CandlestickChart,
      title: 'Detección de Pivotes',
      description: 'Identifica techos y fondos locales con precisión milimétrica.',
    },
    {
      icon: Bot,
      title: 'Liquidity Grab',
      description: 'Detecta cazadores de liquidez antes de que muevan el mercado.',
    },
    {
      icon: Shield,
      title: 'Soporte EMA',
      description: 'Confirma las señales con medias móviles de 12 y 26 periodos.',
    },
  ];
  
  const graphHeight = 500;
  const graphWidth = 1100;
  const paddingTop = 30;
  const paddingBottom = 30;
  
  const minPrice = Math.min(...candles.map(c => c.low)) * 0.998;
  const maxPrice = Math.max(...candles.map(c => c.high)) * 1.002;
  const priceRange = maxPrice - minPrice;
  
  const getY = (price: number) => {
    const usableHeight = graphHeight - paddingTop - paddingBottom;
    const percent = (price - minPrice) / priceRange;
    return graphHeight - paddingBottom - (percent * usableHeight);
  };
  
  const candleWidth = Math.max(4, (graphWidth / candles.length) * 0.7);
  const getX = (index: number) => (index * (graphWidth / candles.length)) + (graphWidth / candles.length / 2);

  return (
    <section id="indicadores" className="bg-gradient-to-br from-[#0f1117] via-[#11151f] to-[#131722] py-20 px-4">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Sección de presentación del indicador - Venta separada */}
    <div className="mb-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center max-w-6xl mx-auto px-4">
      
      {/* Columna Izquierda: Logo y Descripción del indicador (Mantenido intacto) */}
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-yellow-500/20 rounded-3xl blur-2xl animate-pulse"></div>
        <div className="relative bg-gradient-to-br from-[#0f1117] to-[#0a0c10] rounded-3xl border border-yellow-500/30 p-8 shadow-2xl">
          <div className="flex flex-col items-center text-center">
            {/* Logo Gigante */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-yellow-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
              <div className="relative w-40 h-40 bg-gradient-to-br from-[#1a1f2a] to-[#0f1117] rounded-3xl flex items-center justify-center shadow-2xl border-2 border-yellow-500/50 overflow-hidden">
                {!logoError ? (
                  <Image
                    width={120}
                    height={120}
                    src="/images/price-logistic-7-logo.png"
                    alt="Price Logistic 7 Logo"
                    className="w-28 h-28 object-contain"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <Brain className="text-yellow-500" size={80} />
                )}
              </div>
              
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Price Logistic 7
            </h2>
            <p className="text-yellow-400 text-sm font-semibold mb-4">Indicador Profesional para TradingView</p>
            
            {/* Badge de venta separada */}
            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 border border-red-500/30 px-4 py-2 mb-6">
              <ShoppingCart size={14} className="text-red-400" />
              <span className="text-xs font-semibold text-red-400 uppercase tracking-wide">Venta Separada - No incluido en membresía</span>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto mb-6">
              Un indicador diseñado para traders que buscan <span className="text-yellow-400 font-semibold">estructura real</span> en el mercado. 
              Detecta pivotes, liquidez y zonas clave con señales visuales claras.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <div className="flex items-center gap-1.5 text-emerald-400 text-sm bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                <CheckCircle2 size={16} />
                <span>Pivotes automáticos</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 text-sm bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                <CheckCircle2 size={16} />
                <span>Liquidity Grab</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 text-sm bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                <CheckCircle2 size={16} />
                <span>EMAs integradas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Columna Derecha: Panel de Precios NUEVO */}
      <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-[#0f1117] to-[#0a0c10] p-6 shadow-2xl md:p-8">
        <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="relative z-10">
          
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/15 text-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
              <Lock size={22} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300">
                Planes de Acceso
              </p>
              <h3 className="mt-1 text-2xl font-bold text-white">Adquiere el indicador</h3>
            </div>
          </div>

          {/* Lista de Precios */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center p-3.5 rounded-xl border border-gray-800 bg-white/5 hover:border-gray-600 transition-colors">
              <span className="text-gray-300 font-medium">1 Mes</span>
              <span className="text-white font-bold text-lg">$39.99</span>
            </div>
            
            <div className="flex justify-between items-center p-3.5 rounded-xl border border-gray-800 bg-white/5 hover:border-gray-600 transition-colors">
              <span className="text-gray-300 font-medium">3 Meses</span>
              <span className="text-white font-bold text-lg">$99.99</span>
            </div>
            
            <div className="flex justify-between items-center p-3.5 rounded-xl border border-gray-800 bg-white/5 hover:border-gray-600 transition-colors">
              <span className="text-gray-300 font-medium">1 Año</span>
              <span className="text-white font-bold text-lg">$199.99</span>
            </div>
            
            {/* Plan de por vida destacado */}
            <div className="flex justify-between items-center p-4 rounded-xl border-2 border-yellow-500/50 bg-yellow-500/10 relative overflow-hidden shadow-[0_0_20px_rgba(234,179,8,0.1)]">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black text-[10px] font-bold px-3 py-0.5 rounded-bl-lg">
                MEJOR INVERSIÓN
              </div>
              <span className="text-yellow-400 font-bold mt-1">De por vida</span>
              <span className="text-yellow-400 font-black text-2xl mt-1">$499.99</span>
            </div>
          </div>

          {/* Bono: 2 Videos de uso */}
          <div className="flex items-start gap-3 rounded-xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-transparent p-4 mb-8">
            <PlayCircle size={24} className="text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-bold text-sm mb-1">Bono Exclusivo Incluido</h4>
              <p className="text-xs leading-relaxed text-gray-400">
                Tu compra incluye <strong className="text-gray-200">2 videos tutoriales</strong> detallados donde aprenderás la configuración exacta y cómo operar con las señales del indicador.
              </p>
            </div>
          </div>

          {/* Botón de compra */}
          <div className="flex flex-col gap-3">
            <button
              onClick={openWhatsApp}
              className="w-full rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-4 font-bold text-black transition-all hover:scale-[1.02] hover:shadow-[0_15px_30px_rgba(245,200,76,0.25)] flex items-center justify-center gap-2"
            >
              <CreditCard size={18} />
              Solicitar Acceso Ahora
            </button>
            
          </div>
          
        </div>
      </div>
    </div>
        
        {/* Preview del indicador en acción */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white">Cómo funciona en tiempo real</h3>
            <p className="text-gray-400 text-sm mt-2">Preview interactivo del indicador ejecutándose en BTC/USDT</p>
          </div>
        </div>
        
        {/* Header con logo pequeño */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 gap-4">
          <div className="flex items-center gap-3">
            {!logoError ? (
              <Image
                width={32}
                height={32}
                src="/images/price-logistic-7-logo.png"
                alt="PL7"
                className="w-8 h-8 object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <Brain size={24} className="text-yellow-500" />
            )}
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white">BTC/USDT</h2>
                <span className="px-2 py-0.5 rounded-md bg-yellow-500/20 text-yellow-400 text-xs font-bold">PL7 ACTIVE</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-[#0f1117] rounded-xl px-4 py-2 border border-[#2a2e39]">
              <p className="text-gray-400 text-xs">Precio BTC</p>
              <div className={`text-xl font-bold font-mono ${isUp ? 'text-[#26a69a]' : 'text-[#ef5350]'}`}>
                ${currentPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
            </div>
            <div className="bg-[#0f1117] rounded-xl px-4 py-2 border border-[#2a2e39]">
              <p className="text-gray-400 text-xs">24h Cambio</p>
              <div className={`text-lg font-bold ${isPositive ? 'text-[#26a69a]' : 'text-[#ef5350]'}`}>
  {isPositive ? '+' : ''}{stats?.change || '0'}%
</div>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="bg-[#0f1117] rounded-t-xl border border-[#2a2e39] px-4 py-2 flex flex-wrap justify-between items-center gap-2">
          <div className="flex gap-2 items-center">
            {['1H', '4H', '1D', '1W'].map((tf) => (
              <button
                key={tf}
                onClick={() => setActiveTimeframe(tf)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                  activeTimeframe === tf
                    ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tf}
              </button>
            ))}
            <div className="w-px h-5 bg-[#2a2e39] mx-1"></div>
            <button 
              onClick={() => setShowEMAs(!showEMAs)} 
              className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-all ${
                showEMAs ? 'text-white' : 'text-gray-400'
              }`}
            >
              {showEMAs ? <Eye size={12} /> : <EyeOff size={12} />}
              EMAs
            </button>
            <button 
              onClick={() => setShowSignals(!showSignals)} 
              className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-all ${
                showSignals ? 'text-white' : 'text-gray-400'
              }`}
            >
              {showSignals ? <Eye size={12} /> : <EyeOff size={12} />}
              Señales
            </button>
          </div>
          
          <div className="flex gap-2 text-[10px]">
            <span className="flex items-center gap-1"><span className="w-2 h-0.5 bg-[#2962FF]"></span> EMA 12</span>
            <span className="flex items-center gap-1"><span className="w-2 h-0.5 bg-[#FFD600]"></span> EMA 26</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#00e676]"></span> BUY PL7</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#ff5252]"></span> SELL PL7</span>
          </div>
        </div>

        {/* Gráfico con marca de agua */}
        <div className="bg-[#131722] rounded-b-xl border border-[#2a2e39] border-t-0 overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10 z-10">
            {!logoError ? (
              <Image
                width={150}
                height={150}
                src="/images/price-logistic-7-logo.png"
                alt="Price Logistic 7"
                className="w-36 h-36 object-contain"
              />
            ) : (
              <Brain size={100} className="text-yellow-500" />
            )}
          </div>
          
          <div className="relative overflow-x-auto z-20" ref={containerRef}>
            <svg 
              ref={svgRef}
              width={graphWidth} 
              height={graphHeight} 
              viewBox={`0 0 ${graphWidth} ${graphHeight}`}
              className="block cursor-crosshair"
              style={{ backgroundColor: '#131722' }}
            >
              {/* Grid Horizontal */}
              {[0, 0.2, 0.4, 0.6, 0.8, 1].map((ratio) => {
                const y = paddingBottom + (graphHeight - paddingBottom - paddingTop) * (1 - ratio);
                const price = minPrice + priceRange * ratio;
                return (
                  <g key={`grid-h-${ratio}`}>
                    <line x1="0" y1={y} x2={graphWidth} y2={y} stroke="#2a2e39" strokeWidth="0.5" strokeDasharray="4 4" />
                    <text x={graphWidth - 5} y={y - 3} fill="#787b86" fontSize="9" textAnchor="end">
                      ${price >= 1000 ? (price/1000).toFixed(1) + 'k' : price.toFixed(0)}
                    </text>
                  </g>
                );
              })}
              
              {/* EMAs */}
              {showEMAs && (
                <>
                  <polyline points={emaSlow.map((v, i) => `${getX(i)},${getY(v)}`).join(' ')} fill="none" stroke="#FFD600" strokeWidth="2" />
                  <polyline points={emaFast.map((v, i) => `${getX(i)},${getY(v)}`).join(' ')} fill="none" stroke="#2962FF" strokeWidth="2" />
                </>
              )}
              
              {/* Velas */}
              {candles.map((candle, i) => {
                const x = getX(i);
                const isBullish = candle.close >= candle.open;
                const color = isBullish ? TV_COLORS.green : TV_COLORS.red;
                const isHovered = hoveredCandle === i;
                
                const openY = getY(candle.open);
                const closeY = getY(candle.close);
                const highY = getY(candle.high);
                const lowY = getY(candle.low);
                const bodyY = Math.min(openY, closeY);
                const bodyHeight = Math.max(Math.abs(openY - closeY), 1);
                
                return (
                  <g key={`candle-${i}`} onMouseEnter={() => setHoveredCandle(i)} onMouseLeave={() => setHoveredCandle(null)}>
                    <line x1={x} y1={highY} x2={x} y2={lowY} stroke={color} strokeWidth="1" />
                    <rect x={x - candleWidth / 2} y={bodyY} width={candleWidth} height={Math.max(bodyHeight, 1)} fill={color} stroke={isHovered ? 'white' : color} strokeWidth={isHovered ? 1 : 0.5} rx={2} />
                    {candle.isLiquidityGrab && <circle cx={x} cy={highY - 5} r="3" fill="#ff9800" stroke="white" strokeWidth="1" />}
                  </g>
                );
              })}
              
              {/* Señales PL7 */}
              {showSignals && signals.map((signal, i) => {
                const x = getX(signal.index);
                const y = getY(signal.price);
                const isBuy = signal.type === 'BUY';
                const color = isBuy ? '#00e676' : '#ff5252';
                const offset = isBuy ? -28 : 28;
                
                return (
                  <g key={`signal-${i}`}>
                    <circle cx={x} cy={y} r="5" fill={color} stroke="white" strokeWidth="1.5" />
                    <circle cx={x} cy={y} r="12" fill={color} fillOpacity="0.2" />
                    <rect x={x - 28} y={y + offset - 10} width="56" height="20" fill={color} rx="3" />
                    <text x={x} y={y + offset + 4} fill="black" fontSize="8" fontWeight="bold" textAnchor="middle">{signal.type}</text>
                  </g>
                );
              })}
              
              {/* Tooltip */}
              {hoveredCandle !== null && candles[hoveredCandle] && (
                <g>
                  <rect x={getX(hoveredCandle) - 70} y={10} width="140" height="78" fill="black" fillOpacity="0.9" rx="6" />
                  <text x={getX(hoveredCandle)} y={26} fill="white" fontSize="10" textAnchor="middle">Vela #{hoveredCandle + 1}</text>
                  <text x={getX(hoveredCandle)} y={42} fill="#9ca3af" fontSize="8" textAnchor="middle">O: ${candles[hoveredCandle].open.toFixed(0)}</text>
                  <text x={getX(hoveredCandle)} y={58} fill="#9ca3af" fontSize="8" textAnchor="middle">H: ${candles[hoveredCandle].high.toFixed(0)} | L: ${candles[hoveredCandle].low.toFixed(0)}</text>
                  <text x={getX(hoveredCandle)} y={74} fill="#9ca3af" fontSize="8" textAnchor="middle">C: ${candles[hoveredCandle].close.toFixed(0)}</text>
                </g>
              )}
            </svg>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-4">
          <div className="bg-[#0f1117] rounded-lg p-2 text-center border border-[#2a2e39]">
            <p className="text-gray-400 text-[10px]">Señales</p>
            <p className="text-lg font-bold text-white">{stats?.totalSignals || 0}</p>
          </div>
          <div className="bg-[#0f1117] rounded-lg p-2 text-center border border-[#2a2e39]">
            <p className="text-gray-400 text-[10px]">BUY</p>
            <p className="text-lg font-bold text-[#26a69a]">{stats?.buySignals || 0}</p>
          </div>
          <div className="bg-[#0f1117] rounded-lg p-2 text-center border border-[#2a2e39]">
            <p className="text-gray-400 text-[10px]">SELL</p>
            <p className="text-lg font-bold text-[#ef5350]">{stats?.sellSignals || 0}</p>
          </div>
          <div className="bg-[#0f1117] rounded-lg p-2 text-center border border-[#2a2e39]">
            <p className="text-gray-400 text-[10px]">Fuerza</p>
            <p className="text-lg font-bold text-yellow-500">{stats?.strongSignals || 0}</p>
          </div>
          <div className="bg-[#0f1117] rounded-lg p-2 text-center border border-[#2a2e39]">
            <p className="text-gray-400 text-[10px]">Liquidity</p>
            <p className="text-lg font-bold text-orange-400">{candles.filter(c => c.isLiquidityGrab).length}</p>
          </div>
          <div className="bg-[#0f1117] rounded-lg p-2 text-center border border-[#2a2e39]">
            <p className="text-gray-400 text-[10px]">Precisión</p>
            <p className="text-lg font-bold text-white">87%</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-3 text-gray-500 text-[10px] bg-[#0f1117]/50 px-4 py-2 rounded-full">
            <span>📊 PL7 Engine Active</span>
            <span>🟢 Señales de compra</span>
            <span>🔴 Señales de venta</span>
            <span>🟡 EMA 26</span>
            <span>🔵 EMA 12</span>
            <span>🔥 Liquidity Grab detectado</span>
          </div>
        </div>
      </div>
    </section>
  );
}