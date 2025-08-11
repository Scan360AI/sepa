/**
 * charts_config_advanced.js
 * Configurazione avanzata dei grafici per la dashboard
 * SEPA S.r.l.
 */

// Assicurarsi che il DOM sia caricato
document.addEventListener('DOMContentLoaded', function() {
    // Inizializza i grafici quando il DOM è pronto
    initializeCharts();
});

/**
 * Inizializza tutti i grafici della dashboard
 */
function initializeCharts() {
    initTrendRicaviEbitdaChart();
    initTrendPfnEbitdaChart();
}

/**
 * Inizializza il grafico Trend Economico e Margine
 */
function initTrendRicaviEbitdaChart() {
    // Ottiene i dati dal file report_init.js utilizzando le funzioni predefinite
    const economicTrendData = getEconomicTrendData();
    
    // Configura le opzioni del grafico
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.dataset.yAxisID === 'y') {
                            label += formatCurrency(context.raw) + ' M';
                        } else {
                            label += context.raw + '%';
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                title: {
                    display: true,
                    text: 'Ricavi (M€)'
                },
                grid: {
                    borderDash: [5, 5]
                }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                title: {
                    display: true,
                    text: 'EBITDA %'
                },
                grid: {
                    display: false
                },
                min: 0,
                max: 25
            }
        }
    };
    
    // Crea il grafico
    const ctx = document.getElementById('trendRicaviEbitdaChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: economicTrendData,
        options: options
    });
}

/**
 * Inizializza il grafico Sostenibilità Debito (PFN/EBITDA)
 */
function initTrendPfnEbitdaChart() {
    // Ottiene i dati dal file report_init.js utilizzando le funzioni predefinite
    const pfnEbitdaData = getPFNEBITDAData();
    
    // Configura le opzioni del grafico
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.dataset.yAxisID === 'y') {
                            label += formatCurrency(context.raw);
                        } else {
                            label += context.raw.toFixed(2) + ' x';
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                title: {
                    display: true,
                    text: 'Valori in €'
                },
                grid: {
                    borderDash: [5, 5]
                }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                title: {
                    display: true,
                    text: 'PFN/EBITDA'
                },
                grid: {
                    display: false
                },
                min: 0,
                max: 1
            }
        }
    };
    
    // Crea il grafico
    const ctx = document.getElementById('trendPfnEbitdaChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: pfnEbitdaData,
        options: options
    });
}

/**
 * Funzione helper per formattare valori monetari
 * Riutilizza la funzione dal file report_init.js se disponibile
 */
function formatCurrency(value) {
    // Se disponibile la funzione dal file report_init.js, la utilizziamo
    if (typeof window.formatCurrency === 'function') {
        return window.formatCurrency(value);
    }
    
    // Altrimenti, implementiamo la nostra versione
    return new Intl.NumberFormat('it-IT', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}