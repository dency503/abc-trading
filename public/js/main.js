// Inicializar gráfico
let priceChart;

// Función para actualizar indicadores
async function updateIndicators() {
    try {
        const response = await fetch('/api/indicators');
        const data = await response.json();
        
        // Actualizar valores en el DOM
        document.getElementById('rsi-value').textContent = data.rsi;
        document.getElementById('macd-value').textContent = data.macd;
        document.getElementById('ma50-value').textContent = `$${data.movingAverage.ma50}`;
        document.getElementById('ma200-value').textContent = `$${data.movingAverage.ma200}`;
        
        // Cambiar color según valor del RSI
        const rsiElement = document.getElementById('rsi-value');
        if (data.rsi > 70) {
            rsiElement.className = 'indicator-value text-3xl font-bold text-red-500';
        } else if (data.rsi < 30) {
            rsiElement.className = 'indicator-value text-3xl font-bold text-green-500';
        } else {
            rsiElement.className = 'indicator-value text-3xl font-bold text-yellow-400';
        }
        
    } catch (error) {
        console.error('Error al actualizar indicadores:', error);
    }
}

// Función para actualizar datos del mercado
async function updateMarketData() {
    try {
        const response = await fetch('/api/trading-data');
        const data = await response.json();
        
        // Actualizar gráfico con nuevos datos
        if (priceChart) {
            const newData = data.map(item => parseFloat(item.price));
            priceChart.data.datasets[0].data = newData;
            priceChart.update();
        }
        
    } catch (error) {
        console.error('Error al actualizar datos del mercado:', error);
    }
}

// Inicializar gráfico de precios
function initChart() {
    const ctx = document.getElementById('priceChart').getContext('2d');
    
    priceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: 50}, (_, i) => `T-${49-i}`),
            datasets: [{
                label: 'Precio BTC/USD',
                data: Array.from({length: 50}, () => Math.random() * 50000 + 10000),
                borderColor: 'rgb(234, 179, 8)',
                backgroundColor: 'rgba(234, 179, 8, 0.1)',
                tension: 0.1,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'white'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'white'
                    }
                }
            }
        }
    });
}

// Animación de números
function animateNumbers() {
    const indicators = document.querySelectorAll('.indicator-value');
    indicators.forEach(indicator => {
        if (indicator.textContent !== '--') {
            indicator.style.opacity = '0';
            indicator.style.transform = 'scale(0.8)';
            setTimeout(() => {
                indicator.style.transition = 'all 0.3s ease';
                indicator.style.opacity = '1';
                indicator.style.transform = 'scale(1)';
            }, 100);
        }
    });
}

// Efecto de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Detectar cuando los elementos entran en vista
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.trading-card, section').forEach(el => {
    observer.observe(el);
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initChart();
    updateIndicators();
    updateMarketData();
    
    // Actualizar cada 5 segundos
    setInterval(() => {
        updateIndicators();
        updateMarketData();
        animateNumbers();
    }, 5000);
});

// Agregar efecto hover a los botones
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});