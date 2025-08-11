/**
 * dashboard_charts.js
 * Script per l'inizializzazione dei grafici nella dashboard utilizzando i dati da report_init.js
 * SEPA S.r.l. - Dashboard
 */

// Assicurarsi che il DOM sia caricato
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboardCharts();
});

/**
 * Inizializza tutti i grafici nella dashboard
 */
function initializeDashboardCharts() {
    // Inizializza il grafico Trend Economico e Margine
    initTrendRicaviEbitdaChart();

    // Inizializza il grafico Sostenibilità Debito (PFN/EBITDA)
    initPfnEbitdaChart();

    // Aggiungi eventuali altri grafici della dashboard qui
    
    // Visualizza i principali KPI della dashboard
    updateDashboardKPIs();
}

/**
 * Inizializza il grafico Trend Economico e Margine
 */
function initTrendRicaviEbitdaChart() {
    const ctx = document.getElementById('trendRicaviEbitdaChart').getContext('2d');
    
    // Utilizza la funzione getEconomicTrendData() da report_init.js
    const economicTrendData = getEconomicTrendData();
    
    // Crea il grafico con Chart.js
    new Chart(ctx, {
        type: 'bar', // Tipo di grafico combinato
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
        }
    });
}

/**
 * Inizializza il grafico Sostenibilità Debito (PFN/EBITDA)
 */
function initPfnEbitdaChart() {
    const ctx = document.getElementById('trendPfnEbitdaChart').getContext('2d');
    
    // Utilizza la funzione getPFNEBITDAData() da report_init.js
    const pfnEbitdaData = getPFNEBITDAData();
    
    // Crea il grafico con Chart.js
    new Chart(ctx, {
        type: 'bar',
        data: pfnEbitdaData,
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
        }
    });
}

/**
 * Aggiorna i valori dei KPI nella dashboard
 */
function updateDashboardKPIs() {
    // Ottiene i dati delle metriche principali
    const mainMetricsData = getMainMetricsData();
    const marginAnalysisData = getMarginAnalysisData();
    const debtSustainabilityData = getDebtSustainabilityData();
    const workingCapitalCycleData = getWorkingCapitalCycleData();
    const cashFlowAnalysisData = getCashFlowAnalysisData();
    
    // Aggiorna i valori dinamici nei KPI card
    // Nota: in un'implementazione reale, questi selettori andrebbero verificati 
    // rispetto alla struttura effettiva dell'HTML
    
    // Esempio di aggiornamento per i KPI dei ricavi
    try {
        // Ricavi - ultimo anno
        const ricaviValue = mainMetricsData.datasets[0].data[2]; // valore 2024
        const ricaviPrevValue = mainMetricsData.datasets[0].data[1]; // valore 2023
        const ricaviVariazione = ((ricaviValue - ricaviPrevValue) / ricaviPrevValue * 100).toFixed(2);

        const ricaviKpiValue = document.querySelector('.kpi-card-v2:nth-child(2) .kpi-value-modern');
        const ricaviTrendValue = document.querySelector('.kpi-card-v2:nth-child(2) .trend-value');
        
        if (ricaviKpiValue) {
            ricaviKpiValue.textContent = `€ ${ricaviValue.toFixed(2)} M`;
        }
        
        if (ricaviTrendValue) {
            ricaviTrendValue.textContent = `${ricaviVariazione}%`;
        }
        
        // EBITDA Margin
        const ebitdaMarginValue = marginAnalysisData.datasets[1].data[2]; // valore 2024
        const ebitdaMarginPrevValue = marginAnalysisData.datasets[1].data[1]; // valore 2023
        const ebitdaMarginVariazione = (ebitdaMarginValue - ebitdaMarginPrevValue).toFixed(2);
        
        const ebitdaMarginKpiValue = document.querySelector('.kpi-card-v2:nth-child(3) .kpi-value-modern');
        const ebitdaMarginTrendValue = document.querySelector('.kpi-card-v2:nth-child(3) .trend-value');
        
        if (ebitdaMarginKpiValue) {
            ebitdaMarginKpiValue.textContent = `${ebitdaMarginValue.toFixed(2)}%`;
        }
        
        if (ebitdaMarginTrendValue) {
            ebitdaMarginTrendValue.textContent = `+${ebitdaMarginVariazione} p.p.`;
        }
        
        // PFN/EBITDA
        const pfnEbitdaValue = debtSustainabilityData.datasets[0].data[2]; // valore 2024
        const pfnEbitdaPrevValue = debtSustainabilityData.datasets[0].data[1]; // valore 2023
        const pfnEbitdaVariazione = (pfnEbitdaValue - pfnEbitdaPrevValue).toFixed(2);
        
        const pfnEbitdaKpiValue = document.querySelector('.kpi-card-v2:nth-child(4) .kpi-value-modern');
        const pfnEbitdaTrendValue = document.querySelector('.kpi-card-v2:nth-child(4) .trend-value');
        
        if (pfnEbitdaKpiValue) {
            pfnEbitdaKpiValue.textContent = pfnEbitdaValue.toFixed(2);
        }
        
        if (pfnEbitdaTrendValue) {
            const prefix = pfnEbitdaVariazione > 0 ? '+' : '';
            pfnEbitdaTrendValue.textContent = `${prefix}${pfnEbitdaVariazione}`;
        }
        
        // DSO (Giorni Incasso Clienti)
        const dsoValue = workingCapitalCycleData.datasets[0].data[2]; // valore 2024
        const dsoPrevValue = workingCapitalCycleData.datasets[0].data[1]; // valore 2023
        const dsoVariazione = (dsoValue - dsoPrevValue).toFixed(0);
        
        const dsoKpiValue = document.querySelector('.kpi-card-v2:nth-child(5) .kpi-value-modern');
        const dsoTrendValue = document.querySelector('.kpi-card-v2:nth-child(5) .trend-value');
        
        if (dsoKpiValue) {
            dsoKpiValue.textContent = `${dsoValue.toFixed(0)} gg`;
        }
        
        if (dsoTrendValue) {
            const prefix = dsoVariazione > 0 ? '+' : '';
            dsoTrendValue.textContent = `${prefix}${dsoVariazione} gg`;
        }
        
        // Cash Flow Operativo
        const cfOpValue = cashFlowAnalysisData.datasets[1].data[2]; // valore 2024
        const cfOpPercentage = (cfOpValue / (ricaviValue * 1000000) * 100).toFixed(2);
        
        const cfOpKpiValue = document.querySelector('.kpi-card-v2:nth-child(6) .kpi-value-modern');
        const cfOpTrendValue = document.querySelector('.kpi-card-v2:nth-child(6) .trend-value');
        
        if (cfOpKpiValue) {
            cfOpKpiValue.textContent = `€ ${(cfOpValue / 1000).toFixed(2)} K`;
        }
        
        if (cfOpTrendValue) {
            cfOpTrendValue.textContent = `${cfOpPercentage}%`;
        }
        
    } catch (error) {
        console.error('Errore nell\'aggiornamento dei KPI:', error);
    }
}

/**
 * Funzione helper per formattare valori monetari
 */
function formatCurrencyMillion(value) {
    return new Intl.NumberFormat('it-IT', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
}