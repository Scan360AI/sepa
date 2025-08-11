/**
 * circolante_charts.js
 * Script per l'inizializzazione dei grafici nella pagina "Circolante e Flussi di Cassa"
 * SEPA S.r.l. - Report Dettagliato
 */

// Assicurarsi che il DOM sia caricato
document.addEventListener('DOMContentLoaded', function() {
    // Verifica che il file report_init.js sia stato caricato correttamente
    if (typeof getWorkingCapitalCycleData !== 'function' || 
        typeof getCashFlowAnalysisData !== 'function' || 
        typeof getCashFlowProjectionsData !== 'function') {
        console.error('Le funzioni di report_init.js non sono disponibili. Assicurarsi che il file sia caricato correttamente.');
        return;
    }

    // Inizializza i grafici
    initCircolanteChart();
    initCashFlowChart();
    initCashFlowProjectionChart();
});

/**
 * Inizializza il grafico del ciclo del circolante
 */
function initCircolanteChart() {
    const ctx = document.getElementById('circolanteChart');
    
    if (!ctx) {
        console.error('Elemento canvas #circolanteChart non trovato nella pagina.');
        return;
    }
    
    // Ottieni i dati dal file report_init.js
    const workingCapitalData = getWorkingCapitalCycleData();
    
    // Crea il grafico
    new Chart(ctx, {
        type: 'line',
        data: workingCapitalData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Giorni'
                    }
                }
            }
        }
    });
}

/**
 * Inizializza il grafico dei flussi di cassa
 */
function initCashFlowChart() {
    const ctx = document.getElementById('cashFlowChart');
    
    if (!ctx) {
        console.error('Elemento canvas #cashFlowChart non trovato nella pagina.');
        return;
    }
    
    // Ottieni i dati dal file report_init.js
    const cashFlowData = getCashFlowAnalysisData();
    
    // Crea il grafico
    new Chart(ctx, {
        type: 'bar',
        data: cashFlowData,
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
                            label += formatCurrency(context.raw);
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Euro'
                    }
                }
            }
        }
    });
}

/**
 * Inizializza il grafico delle proiezioni dei flussi di cassa
 */
function initCashFlowProjectionChart() {
    const ctx = document.getElementById('cashFlowProjectionChart');
    
    if (!ctx) {
        console.error('Elemento canvas #cashFlowProjectionChart non trovato nella pagina.');
        return;
    }
    
    // Ottieni i dati dal file report_init.js
    const cashFlowProjectionData = getCashFlowProjectionsData();
    
    // Crea il grafico
    new Chart(ctx, {
        type: 'line',
        data: cashFlowProjectionData,
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
                            label += formatCurrency(context.raw);
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Euro'
                    }
                }
            }
        }
    });
}

/**
 * Funzione di supporto per formattare i valori monetari
 */
function formatCurrency(value) {
    // Utilizza la funzione formatCurrency del file report_init.js se disponibile
    if (typeof window.formatCurrency === 'function') {
        return window.formatCurrency(value);
    }
    
    // Altrimenti, implementa una versione di base
    return new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

/**
 * Aggiorna dinamicamente i valori nelle card e nelle tabelle della pagina
 */
function updatePageValues() {
    // Ottieni i dati necessari
    const workingCapitalData = getWorkingCapitalCycleData();
    const cashFlowData = getCashFlowAnalysisData();
    const cashFlowProjectionData = getCashFlowProjectionsData();

    try {
        // Aggiorna i valori relativi al ciclo del circolante
        const lastYearIndex = workingCapitalData.labels.length - 1;
        
        // Valori DSO, DIO, DPO e ciclo del circolante
        const dsoValue = workingCapitalData.datasets[0].data[lastYearIndex];
        const dioValue = workingCapitalData.datasets[1].data[lastYearIndex];
        const dpoValue = workingCapitalData.datasets[2].data[lastYearIndex];
        const cycleValue = workingCapitalData.datasets[3].data[lastYearIndex];
        
        // Trova gli elementi nella pagina e aggiorna i valori
        const dsoElements = document.querySelectorAll('.metric-components .component:nth-child(1) .value');
        const dioElements = document.querySelectorAll('.metric-components .component:nth-child(2) .value');
        const dpoElements = document.querySelectorAll('.metric-components .component:nth-child(3) .value');
        const cycleElements = document.querySelectorAll('.metric-large .value');
        
        // Aggiorna i valori se gli elementi esistono
        dsoElements.forEach(el => { el.textContent = `${dsoValue} giorni`; });
        dioElements.forEach(el => { el.textContent = `${dioValue} giorni`; });
        dpoElements.forEach(el => { el.textContent = `${dpoValue} giorni`; });
        cycleElements.forEach(el => { el.textContent = cycleValue; });
        
        // Aggiorna i valori dei flussi di cassa
        const ebitdaValue = cashFlowData.datasets[0].data[lastYearIndex];
        const cfOperativoValue = cashFlowData.datasets[1].data[lastYearIndex];
        const fcfValue = cashFlowData.datasets[2].data[lastYearIndex];
        
        // Trova gli elementi nella pagina e aggiorna i valori
        const ebitdaElements = document.querySelectorAll('.metric-components .component:nth-child(1) .value');
        const cfOpElements = document.querySelectorAll('.metric-large .value');
        
        // Aggiorna solo gli elementi che si riferiscono ai flussi di cassa (in base al contesto)
        if (ebitdaElements.length > 3) {
            ebitdaElements[3].textContent = `€${formatCurrency(ebitdaValue)}`;
        }
        
        if (cfOpElements.length > 1) {
            cfOpElements[1].textContent = `€${formatCurrency(cfOperativoValue)}`;
        }
    } catch (error) {
        console.error('Errore durante l\'aggiornamento dei valori nella pagina:', error);
    }
}

// Esegui l'aggiornamento dei valori nella pagina dopo che tutti i grafici sono stati inizializzati
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(updatePageValues, 500);
});