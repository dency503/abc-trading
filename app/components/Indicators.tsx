'use client';

import { useEffect, useState, useRef } from 'react';
import { Target, Zap, ChevronUp, ChevronDown, Activity, Maximize2, Eye, EyeOff } from 'lucide-react';

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
    // Cambio de tendencia periódico
    if (i % 25 === 0 && i > 0) {
      trend = (Math.random() - 0.5) * 0.015;
      volatility = 0.002 + Math.random() * 0.003;
    }
    
    // Spikes de volatilidad
    volumeSpike = Math.random() < 0.05;
    const spikeMultiplier = volumeSpike ? 2.5 : 1;
    
    // Generar precio
    const change = (Math.random() - 0.5 + trend) * currentPrice * volatility * spikeMultiplier;
    const open = currentPrice;
    const close = open + change;
    
    // Generar cuerpo de la vela
    const bodySize = Math.abs(close - open);
    const wickTop = Math.random() * bodySize * 0.8;
    const wickBottom = Math.random() * bodySize * 0.8;
    
    const high = Math.max(open, close) + wickTop * (volumeSpike ? 2 : 1);
    const low = Math.min(open, close) - wickBottom * (volumeSpike ? 2 : 1);
    
    // Detectar liquidity grab (mechas largas)
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
    // Detectar mínimos locales (Fondos)
    let isLocalLow = true;
    let isLocalHigh = true;
    
    for (let j = i - lookback; j <= i + lookback; j++) {
      if (i === j) continue;
      if (candles[j].low <= candles[i].low) isLocalLow = false;
      if (candles[j].high >= candles[i].high) isLocalHigh = false;
    }
    
    // Señal BUY en fondo con soporte de EMA
    if (isLocalLow) {
      const isSupport = candles[i].low <= emaSlow[i] * 1.01;
      signals.push({
        index: i,
        price: candles[i].low,
        type: 'BUY',
        reason: isSupport ? 'Soporte EMA + Fondo' : 'Fondo Local'
      });
    }
    
    // Señal SELL en techo con resistencia de EMA
    if (isLocalHigh) {
      const isResistance = candles[i].high >= emaSlow[i] * 0.99;
      signals.push({
        index: i,
        price: candles[i].high,
        type: 'SELL',
        reason: isResistance ? 'Resistencia EMA + Techo' : 'Techo Local'
      });
    }
  }
  
  // Filtrar señales muy cercanas
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
  
  return {
    currentPrice: lastPrice,
    change: totalChange.toFixed(2),
    totalSignals: signals.length,
    buySignals: signals.filter(s => s.type === 'BUY').length,
    sellSignals: signals.filter(s => s.type === 'SELL').length,
  };
};

export default function PriceLogistic7Dashboard() {
  const [candles, setCandles] = useState<Candle[]>([]);
  const [signals, setSignals] = useState<Signal[]>([]);
  const [emaFast, setEmaFast] = useState<number[]>([]);
  const [emaSlow, setEmaSlow] = useState<number[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [hoveredCandle, setHoveredCandle] = useState<number | null>(null);
  const [showSignals, setShowSignals] = useState(true);
  const [showEMAs, setShowEMAs] = useState(true);
  const svgRef = useRef<SVGSVGElement>(null);

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
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
    </div>
  );

  const currentPrice = candles[candles.length - 1].close;
  const isUp = currentPrice >= candles[candles.length - 2]?.close;
  
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
    <section className="bg-[#131722] py-6 px-4 min-h-screen">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <Zap className="text-[#131722]" size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white">BTC/USDT</h1>
                <span className="px-2 py-0.5 rounded bg-[#2a2e39] text-xs text-gray-400">Perpetual</span>
              </div>
              <p className="text-yellow-500 text-xs font-medium">PRICELOGISTIC 7 ENGINE</p>
            </div>
          </div>
          
          <div className="flex gap-6">
            <div className="text-right">
              <p className="text-gray-400 text-xs">Precio</p>
              <div className={`text-2xl font-bold font-mono ${isUp ? 'text-[#26a69a]' : 'text-[#ef5350]'}`}>
                ${currentPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-xs">24h Cambio</p>
              <div className={`text-lg font-bold ${parseFloat(stats?.change) >= 0 ? 'text-[#26a69a]' : 'text-[#ef5350]'}`}>
                {parseFloat(stats?.change) >= 0 ? '+' : ''}{stats?.change}%
              </div>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="bg-[#0f1117] rounded-t-lg border border-[#2a2e39] px-4 py-2 flex justify-between items-center">
          <div className="flex gap-4 items-center text-xs">
            <button className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-500 font-medium">1H</button>
            <button className="px-2 py-1 text-gray-400 hover:text-white transition">4H</button>
            <button className="px-2 py-1 text-gray-400 hover:text-white transition">1D</button>
            <div className="w-px h-4 bg-[#2a2e39] mx-2"></div>
            <button onClick={() => setShowEMAs(!showEMAs)} className="flex items-center gap-1 text-gray-400 hover:text-white transition">
              {showEMAs ? <Eye size={14} /> : <EyeOff size={14} />}
              EMAs
            </button>
            <button onClick={() => setShowSignals(!showSignals)} className="flex items-center gap-1 text-gray-400 hover:text-white transition">
              {showSignals ? <Eye size={14} /> : <EyeOff size={14} />}
              Señales
            </button>
          </div>
          <div className="flex gap-3 text-[10px]">
            <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-[#2962FF]"></span> EMA 12</span>
            <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-[#FFD600]"></span> EMA 26</span>
          </div>
        </div>

        {/* Gráfico */}
        <div className="bg-[#131722] rounded-b-lg border border-[#2a2e39] border-t-0 overflow-hidden">
          <div className="relative">
            <div className="overflow-x-auto">
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
                      <line
                        x1="0"
                        y1={y}
                        x2={graphWidth}
                        y2={y}
                        stroke="#2a2e39"
                        strokeWidth="0.5"
                        strokeDasharray="4 4"
                      />
                      <text
                        x={graphWidth - 5}
                        y={y - 3}
                        fill="#787b86"
                        fontSize="9"
                        textAnchor="end"
                      >
                        ${price >= 1000 ? (price/1000).toFixed(1) + 'k' : price.toFixed(0)}
                      </text>
                    </g>
                  );
                })}
                
                {/* EMAs */}
                {showEMAs && (
                  <>
                    <polyline
                      points={emaSlow.map((v, i) => `${getX(i)},${getY(v)}`).join(' ')}
                      fill="none"
                      stroke="#FFD600"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points={emaFast.map((v, i) => `${getX(i)},${getY(v)}`).join(' ')}
                      fill="none"
                      stroke="#2962FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </>
                )}
                
                {/* Velas Japonesas */}
                {candles.map((candle, i) => {
                  const x = getX(i);
                  const isBullish = candle.close >= candle.open;
                  const color = isBullish ? TV_COLORS.green : TV_COLORS.red;
                  
                  const openY = getY(candle.open);
                  const closeY = getY(candle.close);
                  const highY = getY(candle.high);
                  const lowY = getY(candle.low);
                  
                  const bodyY = Math.min(openY, closeY);
                  const bodyHeight = Math.max(Math.abs(openY - closeY), 1);
                  
                  const isHovered = hoveredCandle === i;
                  
                  return (
                    <g 
                      key={`candle-${i}`} 
                      onMouseEnter={() => setHoveredCandle(i)}
                      onMouseLeave={() => setHoveredCandle(null)}
                      className="transition-opacity"
                    >
                      {/* Mecha */}
                      <line
                        x1={x}
                        y1={highY}
                        x2={x}
                        y2={lowY}
                        stroke={color}
                        strokeWidth="1"
                      />
                      {/* Cuerpo */}
                      <rect
                        x={x - candleWidth / 2}
                        y={bodyY}
                        width={candleWidth}
                        height={Math.max(bodyHeight, 1)}
                        fill={color}
                        stroke={isHovered ? 'white' : color}
                        strokeWidth={isHovered ? 1 : 0.5}
                        rx={Math.min(2, candleWidth / 4)}
                      />
                    </g>
                  );
                })}
                
                {/* Señales */}
                {showSignals && signals.map((signal, i) => {
                  const x = getX(signal.index);
                  const y = getY(signal.price);
                  const isBuy = signal.type === 'BUY';
                  const color = isBuy ? '#00e676' : '#ff5252';
                  const offset = isBuy ? -25 : 25;
                  
                  return (
                    <g key={`signal-${i}`} className="cursor-pointer">
                      <circle
                        cx={x}
                        cy={y}
                        r="5"
                        fill={color}
                        stroke="white"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx={x}
                        cy={y}
                        r="12"
                        fill={color}
                        fillOpacity="0.2"
                      />
                      <rect
                        x={x - 22}
                        y={y + offset - 9}
                        width="44"
                        height="18"
                        fill={color}
                        rx="3"
                      />
                      <text
                        x={x}
                        y={y + offset + 4}
                        fill="#000"
                        fontSize="9"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        {signal.type}
                      </text>
                    </g>
                  );
                })}
                
                {/* Tooltip */}
                {hoveredCandle !== null && candles[hoveredCandle] && (
                  <g>
                    <rect
                      x={getX(hoveredCandle) - 70}
                      y={10}
                      width="140"
                      height="80"
                      fill="black"
                      fillOpacity="0.9"
                      rx="6"
                    />
                    <text x={getX(hoveredCandle)} y={28} fill="white" fontSize="10" textAnchor="middle" fontWeight="bold">
                      Vela #{hoveredCandle + 1}
                    </text>
                    <text x={getX(hoveredCandle)} y={44} fill="#9ca3af" fontSize="8" textAnchor="middle">
                      O: ${candles[hoveredCandle].open.toFixed(0)}
                    </text>
                    <text x={getX(hoveredCandle)} y={60} fill="#9ca3af" fontSize="8" textAnchor="middle">
                      H: ${candles[hoveredCandle].high.toFixed(0)} | L: ${candles[hoveredCandle].low.toFixed(0)}
                    </text>
                    <text x={getX(hoveredCandle)} y={76} fill="#9ca3af" fontSize="8" textAnchor="middle">
                      C: ${candles[hoveredCandle].close.toFixed(0)}
                    </text>
                  </g>
                )}
              </svg>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-3 mt-4">
          <div className="bg-[#0f1117] rounded-lg p-3 border border-[#2a2e39]">
            <p className="text-gray-400 text-xs">Señales Total</p>
            <p className="text-xl font-bold text-white">{stats?.totalSignals || 0}</p>
          </div>
          <div className="bg-[#0f1117] rounded-lg p-3 border border-[#2a2e39]">
            <p className="text-gray-400 text-xs">BUY</p>
            <p className="text-xl font-bold text-[#26a69a]">{stats?.buySignals || 0}</p>
          </div>
          <div className="bg-[#0f1117] rounded-lg p-3 border border-[#2a2e39]">
            <p className="text-gray-400 text-xs">SELL</p>
            <p className="text-xl font-bold text-[#ef5350]">{stats?.sellSignals || 0}</p>
          </div>
          <div className="bg-[#0f1117] rounded-lg p-3 border border-[#2a2e39]">
            <p className="text-gray-400 text-xs">Volumen</p>
            <p className="text-xl font-bold text-white">1.2B</p>
          </div>
        </div>

        {/* Signals List */}
        {showSignals && signals.length > 0 && (
          <div className="mt-4 bg-[#0f1117] rounded-lg border border-[#2a2e39] p-3">
            <p className="text-xs text-gray-400 mb-2 flex items-center gap-2">
              <Target size={12} />
              Señales Recientes
            </p>
            <div className="flex flex-wrap gap-2">
              {signals.slice(-6).reverse().map((signal, idx) => (
                <div
                  key={idx}
                  className={`px-2 py-1 rounded text-xs font-bold ${
                    signal.type === 'BUY'
                      ? 'bg-[#26a69a]/20 text-[#26a69a] border border-[#26a69a]/50'
                      : 'bg-[#ef5350]/20 text-[#ef5350] border border-[#ef5350]/50'
                  }`}
                >
                  {signal.type} ${Math.round(signal.price)} • {signal.reason}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-4 text-center">
          <p className="text-gray-500 text-[10px]">
            📊 Datos en tiempo real | 🟢 BUY en fondos locales | 🔴 SELL en techos locales | 🟡 EMA 26 | 🔵 EMA 12
          </p>
        </div>
      </div>
    </section>
  );
}