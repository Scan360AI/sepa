// /js/charts_config.js

// Funzioni di utilità per la formattazione
function formatCurrency(value, decimals = 2) {
    if (value === null || value === undefined) return 'N/D';
    
    // Gestisce numeri negativi
    const isNegative = value < 0;
    const absValue = Math.abs(value);
    
    // Formatta in base alla grandezza
    let formattedValue;
    if (absValue >= 1000000) {
        formattedValue = (absValue / 1000000).toFixed(decimals) + ' M€';
    } else if (absValue >= 1000) {
        formattedValue = (absValue / 1000).toFixed(decimals) + ' K€';
    } else {
        formattedValue = absValue.toFixed(decimals) + ' €';
    }
    
    // Aggiunge il segno negativo se necessario
    return isNegative ? '-' + formattedValue : formattedValue;
}

function formatPercentage(value, decimals = 1) {
    if (value === null || value === undefined) return 'N/D';
    return value.toFixed(decimals) + '%';
}

// Configurazioni comuni per i grafici
const commonChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            titleFont: { size: 12 },
            bodyFont: { size: 12 },
            padding: 10,
            cornerRadius: 4
        },
        legend: {
            position: 'bottom',
            labels: {
                boxWidth: 12,
                padding: 15,
                font: { size: 11 }
            }
        }
    },
    animation: {
        duration: 1000,
        easing: 'easeOutQuart'
    }
};

// Configurazioni colori per i grafici
const chartColors = {
    primary: 'rgba(78, 115, 223, 0.8)',
    secondary: 'rgba(54, 185, 204, 0.8)',
    success: 'rgba(28, 200, 138, 0.8)',
    info: 'rgba(54, 185, 204, 0.8)',
    warning: 'rgba(246, 194, 62, 0.8)',
    danger: 'rgba(231, 74, 59, 0.8)',
    light: 'rgba(244, 246, 249, 0.8)',
    dark: 'rgba(90, 92, 105, 0.8)',
    primaryBorder: 'rgba(78, 115, 223, 1)',
    secondaryBorder: 'rgba(54, 185, 204, 1)',
    successBorder: 'rgba(28, 200, 138, 1)',
    infoBorder: 'rgba(54, 185, 204, 1)',
    warningBorder: 'rgba(246, 194, 62, 1)',
    dangerBorder: 'rgba(231, 74, 59, 1)',
    lightBorder: 'rgba(244, 246, 249, 1)',
    darkBorder: 'rgba(90, 92, 105, 1)'
};

// Dati per i grafici della dashboard
function getTrendRicaviEbitdaData_Dashboard() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                type: 'bar',
                label: 'Ricavi',
                data: [6034808, 4955439, 4301307],
                backgroundColor: chartColors.primary,
                borderColor: chartColors.primaryBorder,
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'bar',
                label: 'EBITDA',
                data: [827392, 752520, 859828],
                backgroundColor: chartColors.success,
                borderColor: chartColors.successBorder,
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'line',
                label: 'EBITDA Margin',
                data: [13.7, 15.2, 19.99],
                borderColor: chartColors.dangerBorder,
                backgroundColor: 'transparent',
                borderWidth: 2,
                pointBackgroundColor: chartColors.danger,
                pointRadius: 4,
                yAxisID: 'y1'
            }
        ]
    };
}

function getTrendPfnEbitdaData_Dashboard() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'PFN/EBITDA',
                data: [0.38, 0.29, 0.35],
                borderColor: chartColors.primary,
                backgroundColor: 'rgba(78, 115, 223, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: chartColors.primary,
                pointRadius: 4
            }
        ]
    };
}

function getCicloCircolanteData_Dashboard() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'DSO (Giorni Crediti)',
                data: [358, 476, 532],
                backgroundColor: chartColors.danger,
                borderColor: chartColors.dangerBorder,
                borderWidth: 1
            },
            {
                label: 'DPO (Giorni Debiti)',
                data: [334, 355, 326],
                backgroundColor: chartColors.success,
                borderColor: chartColors.successBorder,
                borderWidth: 1
            },
            {
                label: 'DIO (Giorni Magazzino)',
                data: [4, 48, 95],
                backgroundColor: chartColors.warning,
                borderColor: chartColors.warningBorder,
                borderWidth: 1
            },
            {
                label: 'Ciclo del Circolante',
                data: [28, 169, 301],
                backgroundColor: chartColors.info,
                borderColor: chartColors.infoBorder,
                borderWidth: 1
            }
        ]
    };
}

// Dati per i grafici della pagina di analisi economica
function getTrendRicaviEbitData_Economica() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                type: 'bar',
                label: 'Ricavi',
                data: [6034808, 4955439, 4301307],
                backgroundColor: chartColors.primary,
                borderColor: chartColors.primaryBorder,
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'bar',
                label: 'EBIT',
                data: [270436, 368753, 562142],
                backgroundColor: chartColors.success,
                borderColor: chartColors.successBorder,
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'line',
                label: 'ROS',
                data: [4.5, 7.4, 13.1],
                borderColor: chartColors.dangerBorder,
                backgroundColor: 'transparent',
                borderWidth: 2,
                pointBackgroundColor: chartColors.danger,
                pointRadius: 4,
                yAxisID: 'y1'
            }
        ]
    };
}

function getMarginAnalysisData_Economica() {
    return {
        labels: ['Valore Aggiunto', 'Margine Contribuzione', 'EBITDA', 'EBIT', 'Utile Netto'],
        datasets: [
            {
                label: '2022',
                data: [46.9, 30.4, 13.7, 4.5, 3.0],
                backgroundColor: 'rgba(78, 115, 223, 0.5)',
                borderColor: chartColors.primaryBorder,
                borderWidth: 1
            },
            {
                label: '2023',
                data: [47.2, 35.2, 15.2, 7.4, 1.7],
                backgroundColor: 'rgba(54, 185, 204, 0.5)',
                borderColor: chartColors.infoBorder,
                borderWidth: 1
            },
            {
                label: '2024',
                data: [51.2, 40.5, 20.0, 13.1, 0.5],
                backgroundColor: 'rgba(28, 200, 138, 0.5)',
                borderColor: chartColors.successBorder,
                borderWidth: 1
            },
            {
                label: 'Benchmark Settore',
                data: [44.0, 32.0, 11.5, 6.5, 3.0],
                backgroundColor: 'rgba(246, 194, 62, 0.5)',
                borderColor: chartColors.warningBorder,
                borderWidth: 1
            }
        ]
    };
}

function getCostsBreakdownData_Economica() {
    return {
        labels: ['Acquisti e consumi', 'Costi variabili prod.', 'Costo del personale', 'Altri costi fissi', 'Ammortamenti', 'Oneri diversi', 'Oneri finanziari'],
        datasets: [
            {
                label: '% sui ricavi 2024',
                data: [48.8, 10.7, 14.4, 6.1, 6.9, 7.4, 4.3],
                backgroundColor: [
                    chartColors.primary,
                    chartColors.success,
                    chartColors.warning,
                    chartColors.info,
                    chartColors.secondary,
                    chartColors.dark,
                    chartColors.danger
                ],
                borderColor: [
                    chartColors.primaryBorder,
                    chartColors.successBorder,
                    chartColors.warningBorder,
                    chartColors.infoBorder,
                    chartColors.secondaryBorder,
                    chartColors.darkBorder,
                    chartColors.dangerBorder
                ],
                borderWidth: 1
            }
        ]
    };
}

function getRedditivityIndexData_Economica() {
    return {
        labels: ['ROI', 'ROE', 'ROS', 'Asset Turnover', 'Cash Flow Op./Ricavi'],
        datasets: [
            {
                label: '2022',
                data: [4.25, 3.02, 4.5, 0.95, 70.48],
                backgroundColor: 'rgba(78, 115, 223, 0.5)',
                borderColor: chartColors.primaryBorder,
                borderWidth: 1
            },
            {
                label: '2023',
                data: [5.81, 1.39, 7.4, 0.78, 0.82],
                backgroundColor: 'rgba(54, 185, 204, 0.5)',
                borderColor: chartColors.infoBorder,
                borderWidth: 1
            },
            {
                label: '2024',
                data: [8.72, 0.36, 13.1, 0.67, 2.59],
                backgroundColor: 'rgba(28, 200, 138, 0.5)',
                borderColor: chartColors.successBorder,
                borderWidth: 1
            },
            {
                label: 'Benchmark Settore',
                data: [7.0, 5.5, 6.5, 1.05, 6.5],
                backgroundColor: 'rgba(246, 194, 62, 0.5)',
                borderColor: chartColors.warningBorder,
                borderWidth: 1
            }
        ]
    };
}

// Dati per i grafici della pagina di analisi patrimoniale
function getAssetsBreakdownData_Patrimoniale() {
    return {
        labels: ['Liquidità', 'Crediti Clienti', 'Rimanenze', 'Altri Crediti', 'Immobilizzazioni'],
        datasets: [
            {
                label: '2024',
                data: [0.2, 44.3, 3.9, 2.2, 49.4],
                backgroundColor: [
                    chartColors.success,
                    chartColors.primary,
                    chartColors.warning,
                    chartColors.info,
                    chartColors.secondary
                ],
                borderColor: [
                    chartColors.successBorder,
                    chartColors.primaryBorder,
                    chartColors.warningBorder,
                    chartColors.infoBorder,
                    chartColors.secondaryBorder
                ],
                borderWidth: 1
            }
        ]
    };
}

function getLiabilitiesBreakdownData_Patrimoniale() {
    return {
        labels: ['Debiti Fornitori', 'Altri Debiti', 'Fondi', 'Debiti Finanziari', 'Patrimonio Netto'],
        datasets: [
            {
                label: '2024',
                data: [19.1, 31.9, 3.8, 2.3, 42.9],
                backgroundColor: [
                    chartColors.primary,
                    chartColors.info,
                    chartColors.warning,
                    chartColors.danger,
                    chartColors.success
                ],
                borderColor: [
                    chartColors.primaryBorder,
                    chartColors.infoBorder,
                    chartColors.warningBorder,
                    chartColors.dangerBorder,
                    chartColors.successBorder
                ],
                borderWidth: 1
            }
        ]
    };
}

function getPfnTrendData_Patrimoniale() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                type: 'bar',
                label: 'Debiti Finanziari',
                data: [378375, 263396, 329788],
                backgroundColor: chartColors.danger,
                borderColor: chartColors.dangerBorder,
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'bar',
                label: 'Liquidità',
                data: [59918, 45124, 32016],
                backgroundColor: chartColors.success,
                borderColor: chartColors.successBorder,
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'line',
                label: 'PFN',
                data: [318457, 218272, 297772],
                borderColor: chartColors.primaryBorder,
                backgroundColor: 'transparent',
                borderWidth: 2,
                pointBackgroundColor: chartColors.primary,
                pointRadius: 4,
                yAxisID: 'y'
            }
        ]
    };
}

function getSolidityIndexData_Patrimoniale() {
    return {
        labels: ['Copertura Immobilizzazioni', 'Indice Struttura Secondario', 'Leva Finanziaria (D/E)', 'Autonomia Finanziaria'],
        datasets: [
            {
                label: '2022',
                data: [0.80, 0.87, 0.06, 0.42],
                backgroundColor: 'rgba(78, 115, 223, 0.5)',
                borderColor: chartColors.primaryBorder,
                borderWidth: 1
            },
            {
                label: '2023',
                data: [0.85, 0.93, 0.04, 0.42],
                backgroundColor: 'rgba(54, 185, 204, 0.5)',
                borderColor: chartColors.infoBorder,
                borderWidth: 1
            },
            {
                label: '2024',
                data: [0.87, 0.95, 0.05, 0.43],
                backgroundColor: 'rgba(28, 200, 138, 0.5)',
                borderColor: chartColors.successBorder,
                borderWidth: 1
            },
            {
                label: 'Benchmark',
                data: [0.7, 1.0, 1.0, 0.3],
                backgroundColor: 'rgba(246, 194, 62, 0.5)',
                borderColor: chartColors.warningBorder,
                borderWidth: 1,
                borderDash: [5, 5]
            }
        ]
    };
}

// Dati per i grafici della pagina di analisi finanziaria
function getCashFlowTrendData_Finanziaria() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                type: 'bar',
                label: 'EBITDA',
                data: [827392, 752520, 859828],
                backgroundColor: chartColors.primary,
                borderColor: chartColors.primaryBorder,
                borderWidth: 1
            },
            {
                type: 'bar',
                label: 'Cash Flow Operativo',
                data: [4253214, 40876, 111508],
                backgroundColor: chartColors.success,
                borderColor: chartColors.successBorder,
                borderWidth: 1
            },
            {
                type: 'bar',
                label: 'Free Cash Flow',
                data: [-176479, 100869, -79504],
                backgroundColor: chartColors.info,
                borderColor: chartColors.infoBorder,
                borderWidth: 1
            }
        ]
    };
}

function getWorkingCapitalData_Finanziaria() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Giorni Crediti Clienti (DSO)',
                data: [358, 476, 532],
                backgroundColor: chartColors.danger,
                borderColor: chartColors.dangerBorder,
                borderWidth: 1
            },
            {
                label: 'Giorni Magazzino (DIO)',
                data: [4, 48, 95],
                backgroundColor: chartColors.warning,
                borderColor: chartColors.warningBorder,
                borderWidth: 1
            },
            {
                label: 'Giorni Debiti Fornitori (DPO)',
                data: [334, 355, 326],
                backgroundColor: chartColors.success,
                borderColor: chartColors.successBorder,
                borderWidth: 1
            },
            {
                label: 'Ciclo del Circolante',
                data: [28, 169, 301],
                backgroundColor: chartColors.primary,
                borderColor: chartColors.primaryBorder,
                borderWidth: 1
            }
        ]
    };
}

function getCashFlowWaterfallData_Finanziaria() {
    return {
        labels: ['EBITDA', 'Imposte', 'Var. Circolante', 'Cash Flow Operativo', 'Investimenti', 'Free Cash Flow', 'Op. Finanziarie', 'Var. Netta Cassa'],
        datasets: [
            {
                label: '2024',
                data: [859828, -171729, -687753, 111508, -191012, -79504, 66396, -13108],
                backgroundColor: [
                    chartColors.success,
                    chartColors.danger,
                    chartColors.warning,
                    chartColors.primary,
                    chartColors.info,
                    chartColors.secondary,
                    chartColors.dark,
                    chartColors.primary
                ],
                borderColor: [
                    chartColors.successBorder,
                    chartColors.dangerBorder,
                    chartColors.warningBorder,
                    chartColors.primaryBorder,
                    chartColors.infoBorder,
                    chartColors.secondaryBorder,
                    chartColors.darkBorder,
                    chartColors.primaryBorder
                ],
                borderWidth: 1
            }
        ]
    };
}

function getDebtSustainabilityData_Finanziaria() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                type: 'bar',
                label: 'PFN/EBITDA',
                data: [0.38, 0.29, 0.35],
                backgroundColor: chartColors.primary,
                borderColor: chartColors.primaryBorder,
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'bar',
                label: 'Leva Finanziaria (D/E)',
                data: [0.06, 0.04, 0.05],
                backgroundColor: chartColors.success,
                borderColor: chartColors.successBorder,
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'line',
                label: 'EBIT/Oneri Finanziari',
                data: [4.28, 4.15, 3.01],
                borderColor: chartColors.dangerBorder,
                backgroundColor: 'transparent',
                borderWidth: 2,
                pointBackgroundColor: chartColors.danger,
                pointRadius: 4,
                yAxisID: 'y1'
            }
        ]
    };
}

// Dati per i grafici della pagina di analisi dei rischi
function getRiskRadarData_Rischi() {
    return {
        labels: [
            'Variazione Ricavi',
            'EBITDA Margin',
            'PFN/EBITDA',
            'Leva Finanziaria',
            'Liquidità/Ricavi',
            'Cash Flow/Ricavi',
            'Ciclo Circolante',
            'DSO'
        ],
        datasets: [
            {
                label: 'SEPA S.r.l.',
                data: [20, 90, 95, 95, 15, 40, 10, 5],
                backgroundColor: 'rgba(78, 115, 223, 0.2)',
                borderColor: chartColors.primaryBorder,
                borderWidth: 2,
                pointBackgroundColor: chartColors.primary,
                pointRadius: 3
            },
            {
                label: 'Benchmark Settore',
                data: [60, 65, 70, 60, 70, 65, 70, 65],
                backgroundColor: 'rgba(246, 194, 62, 0.2)',
                borderColor: chartColors.warningBorder,
                borderWidth: 2,
                pointBackgroundColor: chartColors.warning,
                pointRadius: 3
            }
        ]
    };
}

function getZScoreTrendData_Rischi() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                type: 'line',
                label: 'Z-Score',
                data: [2.65, 2.60, 2.55],
                borderColor: chartColors.primary,
                backgroundColor: 'rgba(78, 115, 223, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: chartColors.primary,
                pointRadius: 4
            },
            {
                type: 'line',
                label: 'Soglia Sicurezza',
                data: [3, 3, 3],
                borderColor: chartColors.success,
                backgroundColor: 'transparent',
                borderWidth: 2,
                borderDash: [5, 5],
                pointRadius: 0
            },
            {
                type: 'line',
                label: 'Soglia Rischio',
                data: [1.8, 1.8, 1.8],
                borderColor: chartColors.danger,
                backgroundColor: 'transparent',
                borderWidth: 2,
                borderDash: [5, 5],
                pointRadius: 0
            }
        ]
    };
}

function getStressTestData_Rischi() {
    return {
        labels: ['Variazione Ricavi', 'Variazione Costi Fissi', 'Variazione Crediti', 'Variazione Rimanenze', 'Variazione Debiti'],
        datasets: [
            {
                label: 'Valore Critico',
                data: [-32.27, 63.73, 3, -1057, -3],
                backgroundColor: chartColors.danger,
                borderColor: chartColors.dangerBorder,
                borderWidth: 1
            },
            {
                label: 'Valore Attuale',
                data: [-13.20, 0, 532, 95, 326],
                backgroundColor: chartColors.primary,
                borderColor: chartColors.primaryBorder,
                borderWidth: 1
            }
        ]
    };
}

function getRiskIndexData_Rischi() {
    return {
        labels: ['Leanus Score', 'Z-Score', 'Prob. Default MCC', 'IRP'],
        datasets: [
            {
                label: 'Valore Attuale',
                data: [0.70, 2.55, 8.45, 55.87],
                backgroundColor: [
                    chartColors.danger,
                    chartColors.warning,
                    chartColors.warning,
                    chartColors.warning
                ],
                borderColor: [
                    chartColors.dangerBorder,
                    chartColors.warningBorder,
                    chartColors.warningBorder,
                    chartColors.warningBorder
                ],
                borderWidth: 1
            },
            {
                label: 'Soglia Sicurezza',
                data: [10, 3, 5, 65],
                backgroundColor: 'rgba(28, 200, 138, 0.2)',
                borderColor: chartColors.successBorder,
                borderWidth: 1,
                borderDash: [5, 5]
            }
        ]
    };
}

// Dati per i grafici della pagina di ottimizzazione
function getOptimizationImpactData_Ottimizzazione() {
    return {
        labels: ['EBITDA', 'EBIT', 'Utile netto', 'PFN', 'PFN/EBITDA', 'Copertura immob.', 'Ciclo circolante', 'Leanus Score'],
        datasets: [
            {
                label: 'Pre-ottimizzazione',
                data: [859828, 562142, 22413, 297772, 0.35, 0.87, 301, 0.70],
                backgroundColor: chartColors.primary,
                borderColor: chartColors.primaryBorder,
                borderWidth: 1
            },
            {
                label: 'Post-ottimizzazione (min)',
                data: [904828, 637142, 72413, 277772, 0.31, 0.90, 291, 1.20],
                backgroundColor: chartColors.success,
                borderColor: chartColors.successBorder,
                borderWidth: 1
            },
            {
                label: 'Post-ottimizzazione (max)',
                data: [923828, 667142, 102413, 267772, 0.29, 0.92, 286, 1.60],
                backgroundColor: chartColors.info,
                borderColor: chartColors.infoBorder,
                borderWidth: 1
            }
        ]
    };
}

function getOptimizationAreasData_Ottimizzazione() {
    return {
        labels: ['Politiche ammortamento', 'Capitalizzazione costi', 'Valutazione rimanenze', 'Accantonamenti', 'Working capital', 'Posizione finanziaria'],
        datasets: [
            {
                label: 'Impatto potenziale (€)',
                data: [44000, 120000, 60000, 10000, 200000, 30000],
                backgroundColor: [
                    chartColors.primary,
                    chartColors.success,
                    chartColors.warning,
                    chartColors.info,
                    chartColors.danger,
                    chartColors.secondary
                ],
                borderColor: [
                    chartColors.primaryBorder,
                    chartColors.successBorder,
                    chartColors.warningBorder,
                    chartColors.infoBorder,
                    chartColors.dangerBorder,
                    chartColors.secondaryBorder
                ],
                borderWidth: 1
            }
        ]
    };
}

function getBankabilityImprovementData_Ottimizzazione() {
    return {
        labels: ['Leanus Score', 'PFN/EBITDA', 'Copertura immob.', 'Ciclo circolante', 'Interest Coverage', 'EBITDA margin', 'IRP'],
        datasets: [
            {
                label: 'Pre-ottimizzazione',
                data: [0.70, 0.35, 0.87, 301, 3.01, 19.99, 55.87],
                backgroundColor: chartColors.primary,
                borderColor: chartColors.primaryBorder,
                borderWidth: 1
            },
            {
                label: 'Post-ottimizzazione',
                data: [1.40, 0.30, 0.91, 288, 3.49, 21.26, 59.35],
                backgroundColor: chartColors.success,
                borderColor: chartColors.successBorder,
                borderWidth: 1
            }
        ]
    };
}

function getImplementationTimelineData_Ottimizzazione() {
    return {
        labels: ['Simulazione', 'Validazione', 'Implementazione', 'Documentazione', 'Disclosure'],
        datasets: [
            {
                label: 'Giorni necessari',
                data: [5, 7, 10, 5, 3],
                backgroundColor: [
                    chartColors.primary,
                    chartColors.success,
                    chartColors.warning,
                    chartColors.info,
                    chartColors.secondary
                ],
                borderColor: [
                    chartColors.primaryBorder,
                    chartColors.successBorder,
                    chartColors.warningBorder,
                    chartColors.infoBorder,
                    chartColors.secondaryBorder
                ],
                borderWidth: 1
            }
        ]
    };
}