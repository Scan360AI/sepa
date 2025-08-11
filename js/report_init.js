/**
 * SEPA S.r.l. - Configurazione dati per grafici report
 * Generato automaticamente da BilancioPlus
 */

// Funzioni per la generazione dei dati dei grafici
function getMainMetricsData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Ricavi',
                data: [6034.81, 4955.44, 4301.31],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'EBITDA',
                data: [827.39, 752.52, 859.83],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Patrimonio Netto',
                data: [6043.67, 6128.46, 6150.88],
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getCurrentAssetsLiabilitiesData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Attivo Circolante',
                data: [6815099, 7430165, 7250035],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Passività Correnti',
                data: [7456816, 7667799, 7303951],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getEconomicTrendData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Ricavi',
                data: [6034.81, 4955.44, 4301.31],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                label: 'EBITDA %',
                data: [13.7, 15.2, 20.0],
                backgroundColor: 'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                type: 'line',
                yAxisID: 'y1'
            }
        ]
    };
}

function getMarginAnalysisData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Valore Aggiunto %',
                data: [46.9, 47.2, 51.2],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'EBITDA %',
                data: [13.7, 15.2, 20.0],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'EBIT %',
                data: [4.5, 7.4, 13.1],
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            },
            {
                label: 'Utile Netto %',
                data: [3.0, 1.7, 0.5],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getCostStructureData() {
    return {
        labels: ['Acquisti e consumi', 'Costi variabili prod.', 'Costo del personale', 'Altri costi fissi', 'Ammortamenti', 'Oneri diversi', 'Oneri finanziari'],
        datasets: [
            {
                label: '% sui Ricavi 2024',
                data: [48.8, 10.7, 14.4, 6.1, 6.9, 7.4, 4.3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(199, 199, 199, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(199, 199, 199, 1)'
                ],
                borderWidth: 1
            }
        ]
    };
}

function getProfitabilityIndicesData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'ROI',
                data: [4.25, 5.81, 8.72],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'ROE',
                data: [3.02, 1.39, 0.36],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'ROS',
                data: [4.5, 7.4, 13.1],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getLeverageEffectData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'ROI',
                data: [4.25, 5.81, 8.72],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                type: 'bar'
            },
            {
                label: 'Costo medio del debito',
                data: [16.69, 33.71, 56.70],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                type: 'bar'
            },
            {
                label: 'ROE',
                data: [3.02, 1.39, 0.36],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                type: 'line'
            }
        ]
    };
}

// --- PARTE 3: Patrimoniale ---
function getBalanceSheetStructureData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Attivo Circolante',
                data: [47.3, 50.8, 50.6],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                stack: 'Stack 0'
            },
            {
                label: 'Immobilizzazioni',
                data: [52.7, 49.2, 49.4],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                stack: 'Stack 0'
            },
            {
                label: 'Passività Correnti',
                data: [51.8, 52.5, 51.0],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                stack: 'Stack 1'
            },
            {
                label: 'Passività Consolidate',
                data: [6.3, 5.6, 6.1],
                backgroundColor: 'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                stack: 'Stack 1'
            },
            {
                label: 'Patrimonio Netto',
                data: [41.9, 41.9, 42.9],
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                stack: 'Stack 1'
            }
        ]
    };
}

function getNetFinancialPositionData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Debiti Finanziari',
                data: [378375, 263396, 329788],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Liquidità',
                data: [59918, 45124, 32016],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'PFN',
                data: [318457, 218272, 297772],
                backgroundColor: 'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                type: 'line'
            }
        ]
    };
}

function getSolidityIndicesData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Copertura Immobilizzazioni',
                data: [0.80, 0.85, 0.87],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Indice di Struttura Secondario',
                data: [0.87, 0.93, 0.95],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Leva Finanziaria (D/E)',
                data: [0.06, 0.04, 0.05],
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            },
            {
                label: 'Autonomia Finanziaria',
                data: [0.42, 0.42, 0.43],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };
}

// --- PARTE 4: Bancabilità ---
function getDebtSustainabilityData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'PFN/EBITDA',
                data: [0.38, 0.29, 0.35],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                label: 'Leva Finanziaria (D/E)',
                data: [0.06, 0.04, 0.05],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                label: 'Cash Flow Operativo/Debiti Finanziari',
                data: [1124.09, 15.52, 33.81],
                backgroundColor: 'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                type: 'line',
                yAxisID: 'y1'
            }
        ]
    };
}

function getDebtComponentsData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Debiti Finanziari',
                data: [378375, 263396, 329788],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'PFN',
                data: [318457, 218272, 297772],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'EBITDA',
                data: [827392, 752520, 859828],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Cash Flow Operativo',
                data: [4253214, 40876, 111508],
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getPFNEBITDAData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'PFN (€)',
                data: [318457, 218272, 297772],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                label: 'EBITDA (€)',
                data: [827392, 752520, 859828],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                label: 'PFN/EBITDA',
                data: [0.38, 0.29, 0.35],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                type: 'line',
                yAxisID: 'y1'
            }
        ]
    };
}

function getCrisisIndicatorsData() {
    return {
        labels: ['Oneri Fin./Ricavi', 'PN/Debiti Totali', 'Attività Breve/Passività Breve', 'Cash Flow/Totale Attivo', 'Indebitamento Prev. e Trib./Totale Attivo'],
        datasets: [
            {
                label: 'Valore SEPA',
                data: [4.35, 81.45, 98.82, 2.13, 20.67],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Soglia di Allarme',
                data: [3.0, 7.6, 93.7, 0.5, 4.9],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };
}

// --- PARTE 5: Circolante e Flussi ---
function getWorkingCapitalCycleData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Giorni Crediti Clienti (DSO)',
                data: [358, 476, 532],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Giorni Magazzino (DIO)',
                data: [4, 48, 95],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Giorni Debiti Fornitori (DPO)',
                data: [334, 355, 326],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Ciclo del Circolante',
                data: [28, 169, 301],
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                type: 'line'
            }
        ]
    };
}

function getCashFlowAnalysisData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'EBITDA',
                data: [859828, 752520, 859828],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Cash Flow Operativo',
                data: [4253214, 40876, 111508],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Free Cash Flow',
                data: [-176479, 100869, -79504],
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            },
            {
                label: 'Variazione Netta di Cassa',
                data: [-88011, -14794, -13108],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getCashFlowComponentsData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Cash Flow Capitale Circolante',
                data: [3315849, -799449, -687753],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Cash Flow Operativo',
                data: [4253214, 40876, 111508],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Cash Flow Investimenti',
                data: [-4429693, 59993, -191012],
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            },
            {
                label: 'Variazione Debiti Finanziari',
                data: [87761, -114979, 66392],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getCashFlowProjectionsData() {
    return {
        labels: ['2025', '2026', '2027', '2028'],
        datasets: [
            {
                label: 'Cash Flow Operativo',
                data: [256154, 442996, 442996, 442996],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Variazione Netta Cassa',
                data: [256154, 442996, 442996, 442996],
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            },
            {
                label: 'Liquidità finale',
                data: [288170, 731166, 1174162, 1617158],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                type: 'line'
            }
        ]
    };
}

// --- PARTE 6: Rischi ---
function getRiskIndicatorsData() {
    return {
        labels: ['Variazione Ricavi', 'EBITDA Margin', 'PFN/EBITDA', 'Leva Finanziaria (D/E)', 'Liquidità/Ricavi', 'Cash Flow Operativo/Ricavi', 'Equilibrio del circolante (giorni)'],
        datasets: [
            {
                label: 'Valore 12/2024',
                data: [-13.20, 19.99, 0.35, 0.05, 0.74, 2.59, 301],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getZScoreData() {
    return {
        labels: ['Z-Score di Altman', 'Probabilità di Default (MCC)'],
        datasets: [
            {
                label: 'Valore',
                data: [2.55, 8.45],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(255, 99, 132, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }
        ]
    };
}

function getRedFlagsData() {
    return {
        labels: ['Riduzione Ricavi', 'Liquidità critica', 'DSO patologico', 'Oneri finanziari sproporzionati', 'Posizione tributaria elevata', 'Cash Flow Operativo insufficiente', 'Leanus Score negativo'],
        datasets: [
            {
                label: 'Livello di Criticità (1-10)',
                data: [8, 9, 10, 9, 7, 8, 8],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getStressTestData() {
    return {
        labels: ['Variazione Ricavi', 'Variazione Costi Fissi', 'Variazione Crediti', 'Variazione Rimanenze', 'Variazione Debiti'],
        datasets: [
            {
                label: 'Valore critico',
                data: [-32.27, 63.73, 3, -1057, -3],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Valore attuale',
                data: [-13.20, 0, 532, 95, 326],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };
}

// --- PARTE 7: Raccomandazioni ---
function getActionPlanData() {
    return {
        labels: ['Gestione crediti', 'Liquidità', 'Oneri finanziari', 'Posizione tributaria', 'Fatturato', 'Capitale circolante'],
        datasets: [
            {
                label: 'Priorità (1-10)',
                data: [10, 9, 9, 7, 7, 9],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(255, 99, 132, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }
        ]
    };
}

function getKPIDashboardData() {
    return {
        labels: ['EBITDA margin', 'EBIT margin', 'ROI', 'Cash Flow Operativo/Ricavi', 'Liquidità/Ricavi', 'DSO (giorni crediti)', 'Ciclo del circolante', 'PFN/EBITDA'],
        datasets: [
            {
                label: 'Ultimo valore',
                data: [19.99, 13.07, 8.72, 2.59, 0.74, 532, 301, 0.35],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Target',
                data: [18, 12, 8, 5, 5, 360, 200, 1],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getIRPComponentsData() {
    return {
        labels: ['Component Score', 'Leanus Score Normalizzato', 'Rating MCC', 'Z-Score di Altman'],
        datasets: [
            {
                label: 'Punteggio',
                data: [74.33, 40.83, 46.20, 65.10],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 206, 86, 0.5)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }
        ]
    };
}

function getIRPRadarData() {
    return {
        labels: ['PFN/EBITDA', 'EBIT/Oneri finanziari', 'Ciclo circolante', 'EBITDA/Ricavi', 'Copertura attivo fisso', 'DSCR'],
        datasets: [
            {
                label: 'Punteggio (0-100)',
                data: [95, 80, 10, 100, 48, 73],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    };
}

// --- PARTE 8: Ottimizzazione ---
function getOptimizationImpactData() {
    return {
        labels: ['EBITDA', 'EBIT', 'Utile netto', 'PFN', 'PFN/EBITDA', 'Copertura immob.', 'Ciclo del circolante', 'Leanus Score'],
        datasets: [
            {
                label: 'Pre-ottimizzazione',
                data: [859.83, 562.14, 22.41, 297.77, 0.35, 0.87, 301, 0.70],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Post-ottimizzazione',
                data: [914.33, 652.14, 87.41, 272.77, 0.30, 0.91, 288.5, 1.40],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getBancabilityImprovementData() {
    return {
        labels: ['Leanus Score', 'PFN/EBITDA', 'Copertura immobilizzazioni', 'Ciclo del circolante', 'Interest Coverage Ratio', 'EBITDA margin', 'IRP'],
        datasets: [
            {
                label: 'Pre-ottimizzazione',
                data: [0.70, 0.35, 0.87, 301, 3.01, 19.99, 55.87],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Post-ottimizzazione',
                data: [1.40, 0.30, 0.91, 288.5, 3.49, 21.26, 59.35],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getOptimizationAreasData() {
    return {
        labels: ['Politiche di ammortamento', 'Capitalizzazione costi sviluppo', 'Valutazione rimanenze', 'Accantonamenti', 'Riclassificazione poste patrimoniali', 'Working capital management'],
        datasets: [
            {
                label: 'Impatto potenziale (€000)',
                data: [36.5, 100, 50, 7.5, 0, 175],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 99, 132, 0.5)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }
        ]
    };
}

// Opzioni comuni per i grafici
const commonChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        }
    },
    scales: {
        x: {
            ticks: {
                maxRotation: 45,
                minRotation: 45
            }
        },
        y: {
            beginAtZero: true
        }
    }
};

// Funzione per formattare valori monetari
function formatCurrency(value) {
    return new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

// Funzione per inizializzare un grafico
function initChart(chartId, type, data, options) {
    const ctx = document.getElementById(chartId).getContext('2d');
    return new Chart(ctx, {
        type: type,
        data: data,
        options: options
    });
}