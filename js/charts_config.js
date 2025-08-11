/**
 * SCAN - Strategic Corporate Analysis Navigator
 * Configurazione Dati e Opzioni per Grafici Chart.js
 * Versione 1.2 - Dati Aggiornati per SEPA S.r.l.
 */

// ======================================
// FUNZIONI PER RECUPERARE I DATI SPECIFICI
// ======================================

// --- Dati per Dashboard Esecutiva (dashboard.html) ---
function getTrendRicaviEbitdaData_Dashboard() {
    // console.log("Fornitura dati per trendRicaviEbitdaChart (Dashboard)");
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
             {
                 label: "Ricavi (€)",
                 data: [6034808, 4955439, 4301307], // Valori assoluti
                 borderColor: 'rgb(25, 25, 112)',
                 backgroundColor: 'rgba(25, 25, 112, 0.1)',
                 type: 'line', tension: 0.1, yAxisID: 'y', fill: true, pointRadius: 3,
             },
             {
                 label: "EBITDA (€)",
                 data: [827392, 752520, 859828], // Valori assoluti
                 borderColor: 'rgb(77, 140, 87)',
                 backgroundColor: 'rgba(77, 140, 87, 0.7)',
                 type: 'bar', yAxisID: 'y', barPercentage: 0.6, categoryPercentage: 0.7
             },
              {
                  label: "EBITDA Margin (%)",
                  data: [13.7, 15.2, 19.99], // Percentuale
                  borderColor: 'rgb(217, 140, 0)',
                  backgroundColor: 'transparent',
                  type: 'line', tension: 0.1, yAxisID: 'y1', fill: false, borderDash: [5, 5], pointRadius: 3
              }
        ]
    };
}

function getTrendPfnEbitdaData_Dashboard() {
    // console.log("Fornitura dati per trendPfnEbitdaChart (Dashboard)");
    return {
         labels: ["2022", "2023", "2024"],
         datasets: [
             {
                 label: "PFN/EBITDA",
                 data: [0.38, 0.29, 0.35], // Valori del rapporto (PFN positiva = indebitamento)
                 borderColor: 'rgb(77, 140, 87)',
                 backgroundColor: 'rgba(77, 140, 87, 0.2)',
                 tension: 0.1, fill: true, pointRadius: 5, pointHoverRadius: 7,
                 pointBackgroundColor: 'rgb(77, 140, 87)'
             },
              {
                 label: 'Soglia Attenzione (<3x)',
                 data: [3, 3, 3], // Linea target
                 borderColor: 'rgb(255, 193, 7)',
                 borderDash: [5, 5], fill: false, pointRadius: 0, borderWidth: 2,
             }
         ]
     };
}

// --- Dati per Report Dettagliati (report/parteX_*.html) ---

// Dati Parte 1
function getMainMetricsData() {
    // console.log("Fornitura dati per mainMetricsChart (Report Parte 1)");
     return {
         labels: ["2022", "2023", "2024"],
         datasets: [
             { label: "Ricavi (€000)", data: [6035, 4955, 4301], backgroundColor: "rgba(25, 25, 112, 0.7)" }, // Dati in migliaia
             { label: "EBITDA (€000)", data: [827, 753, 860], backgroundColor: "rgba(77, 140, 87, 0.7)" },
             { label: "Patrimonio Netto (€000)", data: [6044, 6128, 6151], backgroundColor: "rgba(217, 140, 0, 0.7)" }
         ]
     };
}
function getCurrentAssetsLiabilitiesData() {
    // console.log("Fornitura dati per currentAssetsLiabilitiesChart (Report Parte 1)");
    // Dati estratti dai report - corrisponde a Capitale Circolante, Attivo Corrente, Passivo Corrente
     return {
         labels: ["2023", "2024"],
         datasets: [
             { label: "Attivo Corrente", data: [7430165, 7250035], backgroundColor: "rgba(25, 25, 112, 0.7)" },
             { label: "Passivo Corrente", data: [7667799, 7303951], backgroundColor: "rgba(214, 34, 70, 0.7)" },
             { label: "Capitale Circolante Netto", data: [-237634, -53916], backgroundColor: "rgba(77, 140, 87, 0.7)" }
         ]
     };
}

// Dati Parte 2
function getEconomicTrendData() {
    // console.log("Fornitura dati per economicTrendChart (Report Parte 2)");
    // Uguale a getTrendRicaviEbitdaData_Dashboard ma usa valori in €000 per coerenza con altre tabelle
    const dataAbs = getTrendRicaviEbitdaData_Dashboard();
    dataAbs.datasets[0].data = dataAbs.datasets[0].data.map(v => v ? v / 1000 : null); // Ricavi in K
    dataAbs.datasets[1].data = dataAbs.datasets[1].data.map(v => v ? v / 1000 : null); // EBITDA in K
    dataAbs.datasets[0].label = "Ricavi (€000)";
    dataAbs.datasets[1].label = "EBITDA (€000)";
    return dataAbs;
}
function getMarginalityData() {
    // console.log("Fornitura dati per marginalityChart (Report Parte 2)");
     return {
         labels: ["2022", "2023", "2024"],
         datasets: [
            { label: "Valore Aggiunto %", data: [46.9, 47.2, 51.2], borderColor: "rgba(25, 25, 112, 1)", fill: false },
            { label: "Margine di Contribuzione %", data: [30.4, 35.2, 40.5], borderColor: "rgba(42, 58, 128, 1)", fill: false },
            { label: "EBITDA %", data: [13.7, 15.2, 20.0], borderColor: "rgba(77, 140, 87, 1)", fill: false },
            { label: "EBIT %", data: [4.5, 7.4, 13.1], borderColor: "rgba(217, 140, 0, 1)", fill: false }
         ]
     };
}
function getProfitabilityIndicesData() {
    // console.log("Fornitura dati per profitabilityIndicesChart (Report Parte 2)");
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
            { label: "ROE %", data: [3.02, 1.39, 0.36], borderColor: "rgba(25, 25, 112, 1)", backgroundColor: "rgba(25, 25, 112, 0.2)", fill: true},
            { label: "ROI %", data: [4.25, 5.81, 8.72], borderColor: "rgba(77, 140, 87, 1)", backgroundColor: "rgba(77, 140, 87, 0.2)", fill: true},
            { label: "ROS %", data: [4.5, 7.4, 13.1], borderColor: "rgba(217, 140, 0, 1)", backgroundColor: "rgba(217, 140, 0, 0.2)", fill: true}
        ]
    };
}
function getLeverageData() {
     // console.log("Fornitura dati per leverageChart (Report Parte 2)");
     return {
         labels: ["2023", "2024"],
         datasets: [
             { label: "ROI (%)", data: [5.81, 8.72], backgroundColor: "rgba(25, 25, 112, 0.7)"},
             { label: "ROE (%)", data: [1.39, 0.36], backgroundColor: "rgba(77, 140, 87, 0.7)"}
         ]
     };
}
function getBenchmarkRadarData() {
    // console.log("Fornitura dati per benchmarkRadarChart (Report Parte 2)");
    // Dati normalizzati basati sul posizionamento competitivo
    return {
        labels: ["Crescita Ricavi", "EBITDA Margin", "ROI", "Turnover", "Costo Personale", "PFN/EBITDA", "D/E"],
        datasets: [
            {
                label: "SEPA S.r.l.", // Valori > 100 = Migliore della media
                data: [15, 180, 125, 70, 90, 12, 8], // DATI NORMALIZZATI basati sui report
                backgroundColor: "rgba(25, 25, 112, 0.3)", borderColor: "rgba(25, 25, 112, 1)", borderWidth: 2, pointBackgroundColor: "rgba(25, 25, 112, 1)"
            },
            {
                label: "Media Settore", // Base 100
                data: [100, 100, 100, 100, 100, 100, 100],
                backgroundColor: "rgba(217, 140, 0, 0.3)", borderColor: "rgba(217, 140, 0, 1)", borderWidth: 2, pointBackgroundColor: "rgba(217, 140, 0, 1)"
            }
        ]
    };
}

// Dati Parte 3
function getAssetsData() {
    // console.log("Fornitura dati per assetsChart (Report Parte 3)");
    const originalData = [1525399, 5550027, 3320, 552778, 6344840, 32016]; // Immob. Mat, Fin, Immat, Magazzino, Crediti, Liquidità
    const total = originalData.reduce((a, b) => a + b, 0);
    return {
        labels: ["Immob. Materiali", "Immob. Finanziarie", "Immob. Immateriali", "Magazzino", "Crediti", "Liquidità"],
        _originalData: originalData, // Valori originali per tooltip
        datasets: [ {
             data: originalData.map(v => total > 0 ? (v/total)*100 : 0), // Dati %
             backgroundColor: ["#191970", "#4a69bd", "#F44336", "#FFC107", "#4CAF50", "#6c757d"] // Palette definita
         } ]
    };
}
function getLiabilitiesData() {
    // console.log("Fornitura dati per liabilitiesChart (Report Parte 3)");
    const originalData = [6150876, 0, 329788, 2736037, 544166]; // PN, Debt MLT, Debt BT, Debt Comm., Fondi
    const total = originalData.reduce((a, b) => a + b, 0);
     return {
         labels: ["Patrimonio Netto", "Debiti Fin. MLT", "Debiti Fin. BT", "Debiti Comm.", "Fondi"],
         _originalData: originalData,
         datasets: [ {
             data: originalData.map(v => total > 0 ? (v/total)*100 : 0), // Dati %
             backgroundColor: ["#191970", "#4CAF50", "#FFC107", "#4a69bd", "#6c757d"] // Palette coerente
        } ]
     };
}
function getInvestmentsStructureData() {
    // console.log("Fornitura dati per investmentsStructureChart (Report Parte 3)");
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
             { label: "Immobilizzazioni", data: [7594706, 7185420, 7078746], backgroundColor: "rgba(25, 25, 112, 0.7)", stack: "Stack 0" },
             { label: "Crediti commerciali", data: [5992808, 6549124, 6344840], backgroundColor: "rgba(77, 140, 87, 0.7)", stack: "Stack 0" },
             { label: "Rimanenze", data: [32457, 346036, 552778], backgroundColor: "rgba(217, 140, 0, 0.7)", stack: "Stack 0" },
             { label: "Liquidità", data: [59918, 45124, 32016], backgroundColor: "rgba(79, 109, 122, 0.7)", stack: "Stack 0" }
        ]
    };
}
function getEquityCompositionData() {
    // console.log("Fornitura dati per equityCompositionChart (Report Parte 3)");
    // Dati ottenuti dalla relazione
    const originalData = [400000, 5728463, 22413, 0]; // Capitale Sociale, Riserve, Utile, Utili a nuovo
    const total = originalData.reduce((a, b) => a + b, 0);
     return {
         labels: ["Capitale Sociale", "Riserve", "Utile Esercizio", "Utili a Nuovo"],
         _originalData: originalData,
         datasets: [ {
             data: originalData.map(v => total > 0 ? (v/total)*100 : 0), // Dati %
             backgroundColor: ["#191970", "#4CAF50", "#FFC107", "#4a69bd"]
        } ]
     };
}
function getFinancialDebtSourcesData() {
    // console.log("Fornitura dati per financialDebtSourcesChart (Report Parte 3)");
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
            { 
                label: "Debiti Finanziari", 
                data: [378375, 263396, 329788], 
                backgroundColor: "rgba(214, 34, 70, 0.7)",
                type: "bar",
                yAxisID: 'y'
            },
            { 
                label: "Patrimonio Netto", 
                data: [6043669, 6128459, 6150876], 
                backgroundColor: "rgba(25, 25, 112, 0.7)",
                type: "bar",
                yAxisID: 'y'
            },
            { 
                label: "Rapporto D/E", 
                data: [0.06, 0.04, 0.05], 
                type: "line",
                borderColor: "rgba(77, 140, 87, 1)",
                backgroundColor: "transparent",
                yAxisID: 'y1',
                borderWidth: 2,
                pointBackgroundColor: "rgba(77, 140, 87, 1)",
                fill: false
            }
        ]
    };
}
function getPfnTrendData() {
    // console.log("Fornitura dati per pfnTrendChart (Report Parte 3)");
    return {
         labels: ["2022", "2023", "2024"],
         datasets: [
             { label: "Debiti Finanziari Tot.", data: [378375, 263396, 329788], type: "bar", backgroundColor: "rgba(214, 34, 70, 0.7)", yAxisID: 'y' },
             { label: "Liquidità", data: [59918, 45124, 32016], type: "bar", backgroundColor: "rgba(77, 140, 87, 0.7)", yAxisID: 'y'},
             { label: "PFN", data: [318457, 218272, 297772], type: "line", borderColor: "rgba(25, 25, 112, 1)", fill: false, yAxisID: 'y' }
         ]
     };
}

// Dati Parte 4
function getDebtSustainabilityData() {
    // console.log("Fornitura dati per debtSustainabilityChart (Report Parte 4)");
     // Valori normalizzati per il grafico radar
     return {
         labels: ["PFN/EBITDA", "D/E", "DSCR", "Oneri Fin./Ricavi", "Cash Flow Op./Ricavi", "Leanus Score"],
         datasets: [
             { label: "SEPA S.r.l.", data: [12, 8, 140, 30, 26, 18], backgroundColor: "rgba(25, 25, 112, 0.2)", borderColor: "rgba(25, 25, 112, 1)" }, // Valori normalizzati basati sui dati reali
             { label: "Target/Benchmark", data: [100, 67, 100, 100, 100, 75], backgroundColor: "rgba(77, 140, 87, 0.2)", borderColor: "rgba(77, 140, 87, 1)" }
         ]
     };
}
function getDebtCostData() { // Grafico Capacità Indebitamento
    // console.log("Fornitura dati per debtCostChart (Report Parte 4)");
    return {
         labels: ["2022", "2023", "2024"],
         datasets: [
             { label: "EBITDA (€000)", data: [827, 753, 860], type: "bar", yAxisID: "y", backgroundColor: "rgba(77, 140, 87, 0.7)" },
             { label: "Capacità Teorica Indeb. (3x EBITDA, €000)", data: [2482, 2259, 2580], type: "line", yAxisID: "y", borderColor: "rgba(25, 25, 112, 1)", fill: false }
         ]
     };
}

// Dati Parte 5
function getWorkingCapitalCycleData() {
    // console.log("Fornitura dati per workingCapitalCycleChart (Report Parte 5)");
    return {
        labels: ["Crediti Clienti (DSO)", "Magazzino (DIO)", "Debiti Fornitori (DPO)", "Ciclo Circolante"],
        datasets: [
            { label: "SEPA S.r.l. (Giorni)", data: [532, 95, 326, 301], backgroundColor: "rgba(25, 25, 112, 0.7)" },
            { label: "Benchmark Settore (Giorni)", data: [75, 40, 75, 40], backgroundColor: "rgba(77, 140, 87, 0.7)" }
        ]
    };
}
function getCashFlowWaterfallData() {
    // console.log("Fornitura dati per cashFlowWaterfallChart (Report Parte 5)");
    // Implementazione con barre semplici per rappresentare la cascata
     return {
         labels: ["EBITDA", "Imposte", "+Δ Circ.", "=CF Op.", "-Invest.", "=FCF", "+Δ Debt", "-Divid.", "=Δ Cassa"],
         datasets: [{
             data: [859828, -171729, -687753, 111508, -191012, -79504, 66396, 0, -13108],
             backgroundColor: [ // Colori significativi
                 '#4CAF50', // EBITDA (+)
                 '#F44336', // Imposte (-)
                 '#F44336', // Delta Circ. (-)
                 '#4CAF50', // CF Op (+)
                 '#F44336', // Investimenti (-)
                 '#F44336', // FCF (-)
                 '#4CAF50', // Delta Debt (+)
                 '#6c757d', // Dividendi (=)
                 '#F44336'  // Delta Cassa (-)
             ]
         }]
     };
}
function getCashFlowTrendData() {
    // console.log("Fornitura dati per cashFlowTrendChart (Report Parte 5)");
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
            { label: "Cash Flow Operativo", data: [4253214, 40876, 111508], borderColor: "rgba(77, 140, 87, 1)", fill: true, backgroundColor: "rgba(77, 140, 87, 0.1)"},
            { label: "Cash Flow Investimenti", data: [-4429693, 59993, -191012], borderColor: "rgba(214, 34, 70, 1)", fill: true, backgroundColor: "rgba(214, 34, 70, 0.1)" },
            { label: "Variazione Netta di Cassa", data: [-88011, -14794, -13108], borderColor: "rgba(25, 25, 112, 1)", fill: true, backgroundColor: "rgba(25, 25, 112, 0.1)" }
        ]
    };
}
function getCashFlowProjectionData() {
    // console.log("Fornitura dati per cashFlowProjectionChart (Report Parte 5)");
    return {
        labels: ["2024", "2025E", "2026E", "2027E", "2028E"],
        datasets: [
            { label: "Cash Flow Operativo", data: [111508, 256154, 442996, 442996, 442996], type: 'bar', backgroundColor: "rgba(79, 109, 122, 0.7)", yAxisID: 'y' },
            { label: "Variazione Debiti Fin.", data: [66396, 0, 0, 0, 0], type: 'bar', backgroundColor: "rgba(214, 34, 70, 0.7)", yAxisID: 'y' },
            { label: "Liquidità Finale", data: [32016, 288170, 731166, 1174162, 1617158], type: 'line', borderColor: "rgba(77, 140, 87, 1)", fill: false, yAxisID: 'y1' }
        ]
    };
}

// Dati Parte 6
function getZscoreData() {
    // console.log("Fornitura dati per zscoreChart (Report Parte 6)");
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
            { label: "Z-Score", data: [null, null, 2.55], borderColor: "rgba(25, 25, 112, 1)", fill: false },
            { label: "Soglia Sicurezza", data: [2.99, 2.99, 2.99], borderColor: "rgba(77, 140, 87, 1)", borderDash: [5, 5], fill: false, pointRadius: 0 },
            { label: "Soglia Rischio", data: [1.81, 1.81, 1.81], borderColor: "rgba(214, 34, 70, 1)", borderDash: [5, 5], fill: false, pointRadius: 0 }
        ]
    };
}
function getRiskIndicatorsData() {
     // console.log("Fornitura dati per riskIndicatorsChart (Report Parte 6)");
     // Dati normalizzati basati sui valori dell'azienda vs benchmark
    return {
        labels: ["ROI", "ROS", "D/E", "Cop. Immob.", "DSO", "DPO"], 
        datasets: [{
             label: "SEPA S.r.l.",
             data: [125, 164, 8, 87, 709, 434], // Normalizzati dai dati dei report
             backgroundColor: "rgba(136, 141, 194, 0.5)", borderColor: "rgba(97, 103, 173, 1)", borderWidth: 2
            }, {
             label: "Target/Benchmark",
             data: [100, 100, 67, 100, 100, 100], // Benchmark normalizzato
             backgroundColor: "rgba(145, 190, 145, 0.4)", borderColor: "rgba(103, 167, 103, 1)", borderWidth: 2
        }]
    };
}
function getSensitivityData() {
    // console.log("Fornitura dati per sensitivityChart (Report Parte 6)");
     return {
         labels: ["Ricavi", "Costi Fissi", "Crediti Clienti (gg)", "Debiti Fornitori (gg)"],
         datasets: [{
             label: "Variazione Critica",
             data: [-32.27, 63.73, 3, -3], // Dati dai report - Basati sull'analisi di sensitività
             backgroundColor: ["#F44336", "#4CAF50", "#F44336", "#F44336"] // Colori per impatto
         }]
     };
}


// ======================================
// OPZIONI COMUNI PER I GRAFICI
// ======================================
const commonChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: { boxWidth: 12, padding: 15, font: { size: 11 } }
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleFont: { weight: 'bold', size: 13 },
            bodyFont: { size: 12 },
            padding: 10,
            cornerRadius: 4,
            displayColors: true,
            boxPadding: 4,
            callbacks: { // Callback di default migliorato
                 label: function(context) {
                     let label = context.dataset.label || context.label || '';
                     if (label) label += ': ';
                     let value = context.parsed.y;
                      if (value === null || value === undefined) value = context.parsed.r; // Per radar

                     if (value !== null && value !== undefined) {
                         const axisID = context.dataset.yAxisID;
                         const labelText = context.label;
                         const datasetLabel = context.dataset.label || '';

                          if (datasetLabel.includes('%') || (axisID === 'y1' && context.chart.options.scales?.y1?.title?.text.includes('%'))) {
                             label += formatPercentage(value);
                          } else if (datasetLabel.includes('(gg)') || labelText?.includes('(gg)')) {
                             label += value.toFixed(0) + ' gg';
                          } else if (datasetLabel.includes('(x)') || labelText?.includes('(x)') || datasetLabel.includes('PFN/EBITDA') || datasetLabel.includes('D/E') || datasetLabel.includes('Z-Score')) {
                             label += value.toFixed(2) + (datasetLabel.includes('Z-Score') ? '' : 'x');
                          } else if (datasetLabel.includes('Score') && !datasetLabel.includes('Z-Score')) {
                              label += value.toFixed(2);
                          } else if (datasetLabel.includes('Variazione Critica')) { // Per grafico sensitività
                               label += value.toFixed(2) + (labelText.includes('(gg)') ? ' gg' : '%');
                          }
                          else if (Math.abs(value) >= 1000000) {
                             label += formatCurrency(value / 1000000, 2) + ' M';
                         } else if (Math.abs(value) >= 1000) {
                             label += formatCurrency(value / 1000, 0) + ' K';
                         } else {
                              label += formatCurrency(value, (Math.abs(value) < 10 && value !== 0 ? 2 : 0));
                         }
                     } else {
                         label += 'N/D';
                     }
                     return label;
                 }
             }
        }
    },
    scales: {
        x: {
            grid: { display: false },
            ticks: { font: { size: 11 } }
        },
        y: {
            grid: { color: '#e0e0e0', borderDash: [2, 3] },
            ticks: { font: { size: 11 } }
        }
    },
    animation: { duration: 400 }
};

// Opzioni specifiche per grafici a torta/ciambella
const pieChartOptions = {
    ...commonChartOptions,
    cutout: '0%',
     plugins: {
         ...commonChartOptions.plugins,
        tooltip: {
             ...commonChartOptions.plugins.tooltip,
            callbacks: { // Callback specifico per Torta/Ciambella
                label: function(context) {
                    const label = context.label || '';
                    const value = context.raw || 0; // Usa valore raw (percentuale)
                    const originalValue = context.dataset._originalData ? context.dataset._originalData[context.dataIndex] : value;
                    const percentage = formatPercentage(value); // Formatta la percentuale
                    return `${label}: ${formatCurrency(originalValue)} (${percentage})`;
                }
            }
        }
     }
};
const doughnutChartOptions = { ...pieChartOptions, cutout: '50%' };

// Opzioni specifiche per grafici radar
const radarChartOptions = {
     ...commonChartOptions,
      scales: {
         r: {
             angleLines: { color: '#e0e0e0' },
             grid: { color: '#e0e0e0' },
             pointLabels: { font: { size: 10 } },
             ticks: {
                 backdropColor: 'rgba(255, 255, 255, 0.75)',
                 font: { size: 9 },
                 maxTicksLimit: 5,
                 // callback: function(value) { return value + '%'; } // Esempio se scala è %
             },
             suggestedMin: 0,
             // suggestedMax: 150 // Adattare se necessario per i dati normalizzati
         }
      },
      plugins: {
          ...commonChartOptions.plugins,
          tooltip: {
              ...commonChartOptions.plugins.tooltip,
               callbacks: {
                   label: function(context) {
                       let label = context.dataset.label || '';
                       if (label) label += ': ';
                       if (context.parsed.r !== null) {
                          label += context.parsed.r.toFixed(1); // Valore asse radiale
                       }
                       return label;
                   }
               }
          }
      }
};

console.log("charts_config.js caricato e pronto per SEPA S.r.l.");