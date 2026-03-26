'use client';

import { useEffect, useState, useRef } from 'react';
import { 
  Target, Zap, ChevronUp, ChevronDown, Activity, Maximize2, 
  Eye, EyeOff, TrendingUp, TrendingDown, DollarSign, 
  BarChart3, Settings, Info, X, ArrowUp, ArrowDown,
  Sparkles, Brain, Gauge, Shield, AlertCircle, Image as ImageIcon
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
  const [stats, setStats] = useState<any>(null);
  const [hoveredCandle, setHoveredCandle] = useState<number | null>(null);
  const [showSignals, setShowSignals] = useState(true);
  const [showEMAs, setShowEMAs] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTimeframe, setActiveTimeframe] = useState('1H');
  const [logoError, setLogoError] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
    <section id="indicadores" className="bg-gradient-to-br from-[#0f1117] to-[#131722] py-8 px-4 min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header mejorado con logo del indicador */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6">
          <div className="flex items-center gap-4">
            {/* Logo del indicador */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-[#1a1f2a] to-[#0f1117] rounded-2xl flex items-center justify-center shadow-2xl border border-yellow-500/30 overflow-hidden">
                {!logoError ? (
                  <Image
  width={60}
  height={60}
  src="/images/price-logistic-7-logo.png"
  alt="Price Logistic 7 Logo"
  className="w-12 h-12 object-contain bg-transparent"
  onError={() => setLogoError(true)}
/>
                ) : (
                  <div className="text-center">
                    <Brain className="text-yellow-500" size={32} />
                  </div>
                )}
              </div>
              {/* Badge de versión */}
              <div className="absolute -top-1 -right-1 bg-yellow-500 text-[10px] font-bold text-black px-1.5 py-0.5 rounded-full">
                v7
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  BTC/USDT
                  <span className="text-xs font-mono text-gray-400">• Perpetual</span>
                </h2>
                <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-500 text-sm font-bold flex items-center gap-2 border border-yellow-500/30">
                  <Sparkles size={14} />
                  PRICELOGISTIC 7 ENGINE
                </span>
              </div>
              <p className="text-gray-500 text-xs mt-1 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Sistema avanzado de detección de pivotes y liquidez en tiempo real
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-gradient-to-br from-[#0f1117] to-[#0b0d12] rounded-xl px-5 py-3 border border-[#2a2e39] hover:border-yellow-500/30 transition-all">
              <p className="text-gray-400 text-xs mb-1 flex items-center gap-1">
                <DollarSign size={12} />
                Precio BTC
              </p>
              <div className={`text-2xl font-bold font-mono tracking-tight ${isUp ? 'text-[#26a69a]' : 'text-[#ef5350]'}`}>
                ${currentPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
              <div className={`flex items-center gap-1 text-sm mt-1 ${parseFloat(stats?.change) >= 0 ? 'text-[#26a69a]' : 'text-[#ef5350]'}`}>
                {parseFloat(stats?.change) >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {parseFloat(stats?.change) >= 0 ? '+' : ''}{stats?.change}%
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0f1117] to-[#0b0d12] rounded-xl px-5 py-3 border border-[#2a2e39]">
              <p className="text-gray-400 text-xs mb-1">Rango 24h</p>
              <p className="text-white font-mono text-sm">${stats?.low24h?.toLocaleString()}</p>
              <p className="text-white font-mono text-xs">- ${stats?.high24h?.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Toolbar mejorado con info del indicador */}
        <div className="bg-gradient-to-r from-[#0f1117] to-[#0b0d12] rounded-t-xl border border-[#2a2e39] px-5 py-3 flex flex-wrap justify-between items-center gap-3">
          <div className="flex gap-2 items-center">
            {['1H', '4H', '1D', '1W'].map((tf) => (
              <button
                key={tf}
                onClick={() => setActiveTimeframe(tf)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeTimeframe === tf
                    ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tf}
              </button>
            ))}
            <div className="w-px h-6 bg-[#2a2e39] mx-2"></div>
            <button 
              onClick={() => setShowEMAs(!showEMAs)} 
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all ${
                showEMAs ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white'
              }`}
            >
              {showEMAs ? <Eye size={14} /> : <EyeOff size={14} />}
              EMAs
            </button>
            <button 
              onClick={() => setShowSignals(!showSignals)} 
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all ${
                showSignals ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white'
              }`}
            >
              {showSignals ? <Eye size={14} /> : <EyeOff size={14} />}
              Señales PL7
            </button>
          </div>
          
          {/* Logo pequeño en toolbar */}
          <div className="flex items-center gap-3">
            {!logoError ? (
              <img 
                src="/images/price-logistic-7-logo.png"
                alt="PL7"
                className="w-6 h-6 object-contain opacity-60"
                onError={() => setLogoError(true)}
              />
            ) : (
              <Brain size={16} className="text-yellow-500/60" />
            )}
            <div className="flex gap-3 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-[#2962FF] rounded"></div>
                <span className="text-gray-400">EMA 12</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-[#FFD600] rounded"></div>
                <span className="text-gray-400">EMA 26</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00e676]"></div>
                <span className="text-gray-400">BUY PL7</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ff5252]"></div>
                <span className="text-gray-400">SELL PL7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gráfico con marca de agua del logo */}
        <div className="bg-[#131722] rounded-b-xl border border-[#2a2e39] border-t-0 overflow-hidden relative">
          {/* Marca de agua del logo */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5 z-10">
            {!logoError ? (
              <img 
                src="/images/price-logistic-7-logo.png"
                alt="Price Logistic 7"
                className="w-48 h-48 object-contain"
              />
            ) : (
              <Brain size={120} className="text-yellow-500" />
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
              {/* Grid Horizontal mejorado */}
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
                      x={graphWidth - 8}
                      y={y - 4}
                      fill="#787b86"
                      fontSize="10"
                      textAnchor="end"
                      className="font-mono"
                    >
                      ${price >= 1000 ? (price/1000).toFixed(1) + 'k' : price.toFixed(0)}
                    </text>
                  </g>
                );
              })}
              
              {/* Grid Vertical */}
              {Array.from({ length: 10 }).map((_, idx) => {
                const x = (idx / 9) * graphWidth;
                return (
                  <line
                    key={`grid-v-${idx}`}
                    x1={x}
                    y1={0}
                    x2={x}
                    y2={graphHeight}
                    stroke="#2a2e39"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />
                );
              })}
              
              {/* EMAs con efecto de brillo */}
              {showEMAs && (
                <>
                  <polyline
                    points={emaSlow.map((v, i) => `${getX(i)},${getY(v)}`).join(' ')}
                    fill="none"
                    stroke="#FFD600"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points={emaFast.map((v, i) => `${getX(i)},${getY(v)}`).join(' ')}
                    fill="none"
                    stroke="#2962FF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </>
              )}
              
              {/* Velas Japonesas con efecto 3D */}
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
                      strokeWidth={isHovered ? "1.5" : "1"}
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
                    {/* Liquidity Grab indicator */}
                    {candle.isLiquidityGrab && (
                      <circle cx={x} cy={highY - 5} r="3" fill="#ff9800" stroke="white" strokeWidth="1" />
                    )}
                  </g>
                );
              })}
              
              {/* Señales con diseño PL7 */}
              {showSignals && signals.map((signal, i) => {
                const x = getX(signal.index);
                const y = getY(signal.price);
                const isBuy = signal.type === 'BUY';
                const color = isBuy ? '#00e676' : '#ff5252';
                const offset = isBuy ? -30 : 30;
                
                return (
                  <g key={`signal-${i}`} className="cursor-pointer animate-in fade-in duration-300">
                    <circle
                      cx={x}
                      cy={y}
                      r="6"
                      fill={color}
                      stroke="white"
                      strokeWidth="2"
                      className="animate-pulse"
                    />
                    <circle
                      cx={x}
                      cy={y}
                      r="14"
                      fill={color}
                      fillOpacity="0.2"
                    />
                    <rect
                      x={x - 32}
                      y={y + offset - 12}
                      width="64"
                      height="24"
                      fill={color}
                      rx="4"
                      className="shadow-lg"
                    />
                    <text
                      x={x}
                      y={y + offset - 2}
                      fill="black"
                      fontSize="9"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {signal.type}
                    </text>
                  </g>
                );
              })}
              
              {/* Tooltip mejorado */}
              {hoveredCandle !== null && candles[hoveredCandle] && (
                <g className="animate-in fade-in duration-150">
                  <rect
                    x={getX(hoveredCandle) - 85}
                    y={10}
                    width="170"
                    height="100"
                    fill="black"
                    fillOpacity="0.95"
                    rx="8"
                    className="shadow-2xl"
                  />
                  <text x={getX(hoveredCandle)} y={28} fill="white" fontSize="11" textAnchor="middle" fontWeight="bold">
                    Vela #{hoveredCandle + 1}
                  </text>
                  <text x={getX(hoveredCandle)} y={46} fill="#9ca3af" fontSize="9" textAnchor="middle">
                    O: ${candles[hoveredCandle].open.toFixed(0)}
                  </text>
                  <text x={getX(hoveredCandle)} y={62} fill="#9ca3af" fontSize="9" textAnchor="middle">
                    H: ${candles[hoveredCandle].high.toFixed(0)} | L: ${candles[hoveredCandle].low.toFixed(0)}
                  </text>
                  <text x={getX(hoveredCandle)} y={78} fill="#9ca3af" fontSize="9" textAnchor="middle">
                    C: ${candles[hoveredCandle].close.toFixed(0)}
                  </text>
                  {candles[hoveredCandle].isLiquidityGrab && (
                    <text x={getX(hoveredCandle)} y={94} fill="#ff9800" fontSize="8" textAnchor="middle" fontWeight="bold">
                      🔥 Liquidity Grab
                    </text>
                  )}
                </g>
              )}
            </svg>
          </div>
        </div>

        {/* Stats Grid mejorado */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-5">
          <div className="bg-gradient-to-br from-[#0f1117] to-[#0b0d12] rounded-xl p-3 border border-[#2a2e39] hover:border-yellow-500/30 transition-all group">
            <p className="text-gray-400 text-xs flex items-center gap-1">
              <Target size={10} />
              Señales PL7
            </p>
            <p className="text-2xl font-bold text-white">{stats?.totalSignals || 0}</p>
          </div>
          <div className="bg-gradient-to-br from-[#0f1117] to-[#0b0d12] rounded-xl p-3 border border-[#2a2e39]">
            <p className="text-gray-400 text-xs flex items-center gap-1">
              <ArrowUp size={10} />
              BUY
            </p>
            <p className="text-2xl font-bold text-[#26a69a]">{stats?.buySignals || 0}</p>
          </div>
          <div className="bg-gradient-to-br from-[#0f1117] to-[#0b0d12] rounded-xl p-3 border border-[#2a2e39]">
            <p className="text-gray-400 text-xs flex items-center gap-1">
              <ArrowDown size={10} />
              SELL
            </p>
            <p className="text-2xl font-bold text-[#ef5350]">{stats?.sellSignals || 0}</p>
          </div>
          <div className="bg-gradient-to-br from-[#0f1117] to-[#0b0d12] rounded-xl p-3 border border-[#2a2e39]">
            <p className="text-gray-400 text-xs flex items-center gap-1">
              <Gauge size={10} />
              Fuerza
            </p>
            <p className="text-2xl font-bold text-yellow-500">{stats?.strongSignals || 0}</p>
          </div>
          <div className="bg-gradient-to-br from-[#0f1117] to-[#0b0d12] rounded-xl p-3 border border-[#2a2e39]">
            <p className="text-gray-400 text-xs">Volumen 24h</p>
            <p className="text-lg font-bold text-white">$1.2B</p>
          </div>
          <div className="bg-gradient-to-br from-[#0f1117] to-[#0b0d12] rounded-xl p-3 border border-[#2a2e39]">
            <p className="text-gray-400 text-xs">Precisión PL7</p>
            <p className="text-lg font-bold text-white">87.3%</p>
          </div>
        </div>

        {/* Signals List mejorada */}
        {showSignals && signals.length > 0 && (
          <div className="mt-5 bg-gradient-to-br from-[#0f1117] to-[#0b0d12] rounded-xl border border-[#2a2e39] p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-gray-400 flex items-center gap-2">
                <Activity size={12} />
                Señales PL7 Recientes - Últimas 6
              </p>
              {!logoError && (
                <img 
                  src="/images/price-logistic-7-logo.png"
                  alt="PL7"
                  className="w-5 h-5 object-contain opacity-50"
                />
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {signals.slice(-6).reverse().map((signal, idx) => (
                <div
                  key={idx}
                  className={`group relative px-3 py-1.5 rounded-lg text-xs font-bold transition-all hover:scale-105 ${
                    signal.type === 'BUY'
                      ? 'bg-[#26a69a]/10 text-[#26a69a] border border-[#26a69a]/30 hover:bg-[#26a69a]/20'
                      : 'bg-[#ef5350]/10 text-[#ef5350] border border-[#ef5350]/30 hover:bg-[#ef5350]/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-yellow-500">PL7</span>
                    {signal.type === 'BUY' ? <ArrowUp size={10} /> : <ArrowDown size={10} />}
                    <span className="font-mono">${Math.round(signal.price)}</span>
                    <span className="text-[10px] opacity-75">•</span>
                    <span className="text-[10px]">{signal.reason}</span>
                    {signal.strength === 'strong' && (
                      <span className="text-yellow-500 text-[10px]">🔥</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer mejorado con logo */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-4 text-gray-500 text-[10px] bg-[#0f1117]/50 px-5 py-2 rounded-full">
            <span className="flex items-center gap-1">📊 PL7 Engine Active</span>
            <span className="flex items-center gap-1">🟢 PL7 BUY</span>
            <span className="flex items-center gap-1">🔴 PL7 SELL</span>
            <span className="flex items-center gap-1">🟡 EMA 26</span>
            <span className="flex items-center gap-1">🔵 EMA 12</span>
            <span className="flex items-center gap-1">
              {!logoError && (
                <img src="/images/price-logistic-7-logo.png" alt="PL7" className="w-3 h-3 object-contain" />
              )}
              Price Logistic 7
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}