/**
 * economico_charts.js
 * Script per l'inizializzazione dei grafici nella pagina "Analisi Economica e Benchmark"
 * SEPA S.r.l. - Report Dettagliato
 */

// Assicurarsi che il DOM sia caricato
document.addEventListener('DOMContentLoaded', function() {
    // Verifica che il file report_init.js sia stato caricato correttamente
    if (typeof getEconomicTrendData !== 'function' || 
        typeof getMarginAnalysisData !== 'function' || 
        typeof getProfitabilityIndicesData !== 'function' ||
        typeof getLeverageEffectData !== 'function') {
        console.error('Le funzioni di report_init.js non sono disponibili. Assicurarsi che il file sia caricato correttamente.');
        return;
    }

    // Inizializza i grafici della pagina
    initEconomicTrendChart();
    initMarginalityChart();
    initProfitabilityIndicesChart();
    initLeverageChart();
    
    // Aggiorna il badge IRP nell'header
    updateIRPBadge();
    
    // Assicurati che le funzioni di stampa e logout siano definite
    defineUtilityFunctions();
});

/**
 * Inizializza il grafico di Andamento Ricavi ed EBITDA (Grafico 2.1)
 */
function initEconomicTrendChart() {
    const ctx = document.getElementById('economicTrendChart');
    
    if (!ctx) {
        console.error('Elemento canvas #economicTrendChart non trovato nella pagina.');
        return;
    }
    
    // Ottieni i dati dal file report_init.js
    const economicTrendData = getEconomicTrendData();
    
    // Crea il grafico
    new Chart(ctx, {
        type: 'bar',
        data: economicTrendData,
        options: {
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
                                label += formatCurrency(context.raw) + ' K';
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
                        text: 'Ricavi (K€)'
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
        }
    });
}

/**
 * Inizializza il grafico di Evoluzione delle Principali Marginalità (Grafico 2.2)
 */
function initMarginalityChart() {
    const ctx = document.getElementById('marginalityChart');
    
    if (!ctx) {
        console.error('Elemento canvas #marginalityChart non trovato nella pagina.');
        return;
    }
    
    // Ottieni i dati dal file report_init.js
    const marginalityData = getMarginAnalysisData();
    
    // Crea il grafico
    new Chart(ctx, {
        type: 'bar',
        data: marginalityData,
        options: {
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
                            label += context.raw + '%';
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
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Percentuale (%)'
                    },
                    grid: {
                        borderDash: [5, 5]
                    }
                }
            }
        }
    });
}

/**
 * Inizializza il grafico di Andamento Redditività (Grafico 2.3)
 */
function initProfitabilityIndicesChart() {
    const ctx = document.getElementById('profitabilityIndicesChart');
    
    if (!ctx) {
        console.error('Elemento canvas #profitabilityIndicesChart non trovato nella pagina.');
        return;
    }
    
    // Ottieni i dati dal file report_init.js
    const profitabilityData = getProfitabilityIndicesData();
    
    // Crea il grafico
    new Chart(ctx, {
        type: 'bar',
        data: profitabilityData,
        options: {
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
                            label += context.raw + '%';
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
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Valore (%)'
                    },
                    grid: {
                        borderDash: [5, 5]
                    }
                }
            }
        }
    });
}

/**
 * Inizializza il grafico di Evoluzione della Struttura Finanziaria (Grafico 2.4)
 */
function initLeverageChart() {
    const ctx = document.getElementById('leverageChart');
    
    if (!ctx) {
        console.error('Elemento canvas #leverageChart non trovato nella pagina.');
        return;
    }
    
    // Ottieni i dati dal file report_init.js
    const leverageData = getLeverageEffectData();
    
    // Crea il grafico
    new Chart(ctx, {
        type: 'bar',
        data: leverageData,
        options: {
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
                            if (context.datasetIndex === 2) { // Se è il dataset ROE (linea)
                                label += context.raw + '%';
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
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Valore (%)'
                    },
                    grid: {
                        borderDash: [5, 5]
                    }
                }
            }
        }
    });
}

/**
 * Aggiorna il badge IRP nell'header
 */
function updateIRPBadge() {
    const irpScoreValue = 55.87; // Valore IRP fisso
    const irpHeaderBadge = document.getElementById('irp-header-badge');
    
    if (irpHeaderBadge) {
        let badgeClass = 'bg-warning text-dark';
        if (irpScoreValue >= 71) {
            badgeClass = 'bg-success';
        } else if (irpScoreValue < 51) {
            badgeClass = 'bg-danger';
        }
        
        irpHeaderBadge.className = `badge ${badgeClass} me-3`;
        irpHeaderBadge.textContent = `IRP: ${irpScoreValue.toFixed(1)}`;
    }
}

/**
 * Definisce le funzioni di utilità se non esistono
 */
function defineUtilityFunctions() {
    // Funzione di formattazione valori monetari
    if (typeof formatCurrency !== 'function') {
        window.formatCurrency = function(value) {
            return new Intl.NumberFormat('it-IT', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(value);
        };
    }
    
    // Funzione di stampa
    if (typeof printDocument !== 'function') {
        window.printDocument = function() {
            window.print();
        };
    }
    
    // Funzione di logout
    if (typeof logout !== 'function') {
        window.logout = function() {
            console.log("Logout action triggered (placeholder)");
        };
    }
}