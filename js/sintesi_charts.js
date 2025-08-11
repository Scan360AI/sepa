/**
 * sintesi_charts.js
 * Script per l'inizializzazione dei grafici nella pagina "Sintesi e Profilo Aziendale"
 * SEPA S.r.l. - Report Dettagliato
 */

// Assicurarsi che il DOM sia caricato
document.addEventListener('DOMContentLoaded', function() {
    // Verifica che il file report_init.js sia stato caricato correttamente
    if (typeof getMainMetricsData !== 'function' || typeof getCurrentAssetsLiabilitiesData !== 'function') {
        console.error('Le funzioni di report_init.js non sono disponibili. Assicurarsi che il file sia caricato correttamente.');
        return;
    }

    // Inizializza i grafici
    initMainMetricsChart();
    initCurrentAssetsLiabilitiesChart();
});

/**
 * Inizializza il grafico dei principali indicatori (Ricavi, EBITDA, Patrimonio Netto)
 */
function initMainMetricsChart() {
    const ctx = document.getElementById('mainMetricsChart');
    
    if (!ctx) {
        console.error('Elemento canvas #mainMetricsChart non trovato nella pagina.');
        return;
    }
    
    // Ottieni i dati dal file report_init.js
    const mainMetricsData = getMainMetricsData();
    
    // Crea il grafico
    new Chart(ctx, {
        type: 'bar',
        data: mainMetricsData,
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
                            label += formatCurrency(context.raw) + ' K';
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
                        text: 'Valori in migliaia di €'
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
 * Inizializza il grafico del Capitale Investito Netto (Attivo Circolante e Passività Correnti)
 */
function initCurrentAssetsLiabilitiesChart() {
    const ctx = document.getElementById('currentAssetsLiabilitiesChart');
    
    if (!ctx) {
        console.error('Elemento canvas #currentAssetsLiabilitiesChart non trovato nella pagina.');
        return;
    }
    
    // Ottieni i dati dal file report_init.js
    const currentAssetsLiabilitiesData = getCurrentAssetsLiabilitiesData();
    
    // Crea il grafico
    new Chart(ctx, {
        type: 'bar',
        data: currentAssetsLiabilitiesData,
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
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Valori in €'
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
 * Funzione di supporto per formattare i valori monetari
 * Se disponibile, utilizza la funzione dal file report_init.js
 */
function formatCurrency(value) {
    // Verifica se esiste la funzione nel file report_init.js
    if (typeof window.formatCurrency === 'function') {
        return window.formatCurrency(value);
    }
    
    // Altrimenti, implementa una versione semplificata
    return new Intl.NumberFormat('it-IT', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

/**
 * Aggiorna la formattazione e i badge IRP nella pagina
 */
function updateIRPVisuals() {
    // Imposta l'IRP visivamente
    const irpScoreValue = 55.87; // Valore IRP fisso come nel documento
    
    // Aggiorna il badge nell'header
    const irpHeaderBadge = document.getElementById('irp-header-badge');
    if (irpHeaderBadge) {
        irpHeaderBadge.className = 'badge bg-danger me-3';
        irpHeaderBadge.textContent = `IRP: ${irpScoreValue.toFixed(1)}`;
    }
    
    // Aggiorna le classi CSS della sezione IRP
    const irpSection = document.getElementById('irp-summary-section');
    if (irpSection) {
        irpSection.className = 'irp-visual-section risk-high report-section';
    }
    
    // Aggiorna il cerchio del punteggio IRP
    const scoreCircle = document.querySelector('.irp-score-circle');
    if (scoreCircle) {
        scoreCircle.className = 'irp-score-circle risk-high';
    }
    
    // Aggiorna la categoria di testo
    const categoryTextElement = document.querySelector('.irp-category-text');
    if (categoryTextElement) {
        const categoryBadge = categoryTextElement.querySelector('.status-badge');
        if (categoryBadge) {
            categoryBadge.className = 'status-badge bg-danger';
        }
    }
}

// Aggiunge l'inizializzazione dei badge IRP e altri elementi visivi
document.addEventListener('DOMContentLoaded', function() {
    updateIRPVisuals();
    
    // Assicurati che le funzioni di stampa e logout siano definite
    if (typeof window.printDocument !== 'function') {
        window.printDocument = function() {
            window.print();
        };
    }
    
    if (typeof window.logout !== 'function') {
        window.logout = function() {
            console.log("Logout action triggered (placeholder)");
        };
    }
});