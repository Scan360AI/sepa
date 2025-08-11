/**
 * dashboard_integration.js
 * Script per l'integrazione dei dati da report_init.js nella dashboard
 * SEPA S.r.l. - Dashboard
 */

// Assicurarsi che il DOM sia caricato
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se le funzioni di report_init.js sono disponibili
    if (typeof getMainMetricsData !== 'function') {
        console.error('Le funzioni di report_init.js non sono disponibili. Assicurarsi che il file sia caricato correttamente.');
        return;
    }

    // Sostituisce l'oggetto chartData semplificato con i dati completi da report_init.js
    window.chartData = {
        // Dati per il grafico Trend Economico e Margine
        trendRicaviEbitda: {
            labels: getEconomicTrendData().labels,
            ricavi: getEconomicTrendData().datasets[0].data,
            ebitda: getMarginAnalysisData().datasets[1].data  // Prende i dati EBITDA % da MarginAnalysis
        },
        
        // Dati per il grafico Sostenibilità Debito (PFN/EBITDA)
        trendPfnEbitda: {
            labels: getPFNEBITDAData().labels,
            pfnEbitda: getPFNEBITDAData().datasets[2].data,
            pfn: getPFNEBITDAData().datasets[0].data,
            ebitda: getPFNEBITDAData().datasets[1].data
        },
        
        // Dati per KPI principali
        kpi: {
            ricavi: {
                value: getMainMetricsData().datasets[0].data[2],
                prevValue: getMainMetricsData().datasets[0].data[1],
                trend: ((getMainMetricsData().datasets[0].data[2] - getMainMetricsData().datasets[0].data[1]) / 
                        getMainMetricsData().datasets[0].data[1] * 100).toFixed(2)
            },
            ebitdaMargin: {
                value: getMarginAnalysisData().datasets[1].data[2],
                prevValue: getMarginAnalysisData().datasets[1].data[1],
                trend: (getMarginAnalysisData().datasets[1].data[2] - getMarginAnalysisData().datasets[1].data[1]).toFixed(2)
            },
            pfnEbitda: {
                value: getPFNEBITDAData().datasets[2].data[2],
                prevValue: getPFNEBITDAData().datasets[2].data[1],
                trend: (getPFNEBITDAData().datasets[2].data[2] - getPFNEBITDAData().datasets[2].data[1]).toFixed(2)
            },
            dso: {
                value: getWorkingCapitalCycleData().datasets[0].data[2],
                prevValue: getWorkingCapitalCycleData().datasets[0].data[1],
                trend: (getWorkingCapitalCycleData().datasets[0].data[2] - getWorkingCapitalCycleData().datasets[0].data[1]).toFixed(0)
            },
            cashFlowOp: {
                value: getCashFlowAnalysisData().datasets[1].data[2],
                percentage: (getCashFlowAnalysisData().datasets[1].data[2] / 
                            (getMainMetricsData().datasets[0].data[2] * 1000000) * 100).toFixed(2)
            },
            leanusScore: {
                value: 0.70  // Questo valore è hardcoded perché non sembra essere presente nei dati di report_init.js
            },
            irp: {
                value: 55.87  // Questo valore è hardcoded perché non sembra essere presente nei dati di report_init.js
            }
        }
    };

    // Ora aggiorniamo i KPI nella dashboard con i valori reali
    updateDashboardKPIsFromChartData();
    
    // Se dashboard_init.js è configurato per utilizzare chartData, i grafici verranno aggiornati automaticamente
    // Altrimenti, possiamo inizializzare manualmente i grafici
    if (typeof initializeDashboardCharts === 'function') {
        // Se abbiamo caricato dashboard_charts.js, usiamo quello
        initializeDashboardCharts();
    } else {
        // Alternativa: se disponibile, inizializza usando le funzioni esistenti
        if (typeof initializeCharts === 'function') {
            initializeCharts();
        }
    }
});

/**
 * Aggiorna i valori dei KPI nella dashboard utilizzando chartData
 */
function updateDashboardKPIsFromChartData() {
    try {
        // Ricavi
        const ricaviKpiValue = document.querySelector('.kpi-card-v2:nth-child(2) .kpi-value-modern');
        const ricaviTrendValue = document.querySelector('.kpi-card-v2:nth-child(2) .trend-value');
        
        if (ricaviKpiValue) {
            ricaviKpiValue.textContent = `€ ${chartData.kpi.ricavi.value.toFixed(2)} M`;
        }
        
        if (ricaviTrendValue) {
            ricaviTrendValue.textContent = `${chartData.kpi.ricavi.trend}%`;
        }
        
        // EBITDA Margin
        const ebitdaMarginKpiValue = document.querySelector('.kpi-card-v2:nth-child(3) .kpi-value-modern');
        const ebitdaMarginTrendValue = document.querySelector('.kpi-card-v2:nth-child(3) .trend-value');
        
        if (ebitdaMarginKpiValue) {
            ebitdaMarginKpiValue.textContent = `${chartData.kpi.ebitdaMargin.value.toFixed(2)}%`;
        }
        
        if (ebitdaMarginTrendValue) {
            ebitdaMarginTrendValue.textContent = `+${chartData.kpi.ebitdaMargin.trend} p.p.`;
        }
        
        // PFN/EBITDA
        const pfnEbitdaKpiValue = document.querySelector('.kpi-card-v2:nth-child(4) .kpi-value-modern');
        const pfnEbitdaTrendValue = document.querySelector('.kpi-card-v2:nth-child(4) .trend-value');
        
        if (pfnEbitdaKpiValue) {
            pfnEbitdaKpiValue.textContent = chartData.kpi.pfnEbitda.value.toFixed(2);
        }
        
        if (pfnEbitdaTrendValue) {
            const prefix = parseFloat(chartData.kpi.pfnEbitda.trend) > 0 ? '+' : '';
            pfnEbitdaTrendValue.textContent = `${prefix}${chartData.kpi.pfnEbitda.trend}`;
        }
        
        // DSO (Giorni Incasso Clienti)
        const dsoKpiValue = document.querySelector('.kpi-card-v2:nth-child(5) .kpi-value-modern');
        const dsoTrendValue = document.querySelector('.kpi-card-v2:nth-child(5) .trend-value');
        
        if (dsoKpiValue) {
            dsoKpiValue.textContent = `${chartData.kpi.dso.value.toFixed(0)} gg`;
        }
        
        if (dsoTrendValue) {
            const prefix = parseInt(chartData.kpi.dso.trend) > 0 ? '+' : '';
            dsoTrendValue.textContent = `${prefix}${chartData.kpi.dso.trend} gg`;
        }
        
        // Cash Flow Operativo
        const cfOpKpiValue = document.querySelector('.kpi-card-v2:nth-child(6) .kpi-value-modern');
        const cfOpTrendValue = document.querySelector('.kpi-card-v2:nth-child(6) .trend-value');
        
        if (cfOpKpiValue) {
            cfOpKpiValue.textContent = `€ ${(chartData.kpi.cashFlowOp.value / 1000).toFixed(2)} K`;
        }
        
        if (cfOpTrendValue) {
            cfOpTrendValue.textContent = `${chartData.kpi.cashFlowOp.percentage}%`;
        }
        
    } catch (error) {
        console.error('Errore nell\'aggiornamento dei KPI dalla chartData:', error);
    }
}