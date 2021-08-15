const sampleValues = {
    companyName: "FTI Consulting Inc",
    ciqId: "NYSE:FCN",
    valDate: "2017-12-18T00:00:00.000Z",
    curr: "GBP",
    finYearEnd: "9999-12-31T00:00:00.000Z",
    histStart: 2016,
    histEnd: 2018,
    restatementType: "LFR",
    filingMode: "P",
    convMode: "Historical",
    forecastModel: "Two-period model",
    useCiqForecast: "Specify own forecast",
    forecastStart: 2018,
    forecastEnd: 2021,
    forecastRevGrowth: {
        2018: 5,
        2019: 4,
        2020: 3,
        2021: 2,
    },
    forecastRevGrowth: { 2018: 5, 2019: 4, 2020: 3, 2021: 2 },
    forecastCogsPct: { 2018: 40, 2019: 40, 2020: 40, 2021: 40 },
    forecastVarOpCostPct: { 2018: 20, 2019: 20, 2020: 20, 2021: 20 },
    forecastFixedOpCost: { 2018: 150, 2019: 165, 2020: 175, 2021: 180 },
    forecastDeprPct: { 2018: 10, 2019: 10, 2020: 10, 2021: 10 },
    forecastCapexPct: { 2018: 10, 2019: 10, 2020: 10, 2021: 10 },
    forecastWorkingCapPct: { 2018: 5, 2019: 5, 2020: 5, 2021: 5 },
    g: 2,
    discRateApproach: "Bottom-up approach",
    rf: 1.8,
    preTaxRd: 6,
    debtRatio: 30,
    t: 25,
    rOverride: "",
    betaDate: "2019-12-01T00:00:00.000Z",
    gearingMeasure: "Net debt",
    index: "MSCI World",
    erp: 5.5,
    comps: [
        {
            id: 1,
            name: "Alticast Corporation",
            ciqId: "IQ22615883",
        },
        {
            id: 2,
            name: "CyberLink Corp.",
            ciqId: "IQ7827924",
        },
        {
            id: 3,
            name: "Hancom MDS Inc.",
            ciqId: "IQ24947391",
        },
        {
            id: 4,
            name: "ZOO Digital Group plc",
            ciqId: "IQ7685249",
        },
        {
            id: 5,
            name: "TiVo Corporation",
            ciqId: "IQ217503",
        },
        {
            id: 6,
            name: "Beijing Jetsen Technology Co., Ltd.",
            ciqId: "IQ117027181",
        },
        {
            id: 7,
            name: "Kudelski SA",
            ciqId: "IQ882187",
        },
        {
            id: 8,
            name: "SeaChange International, Inc.",
            ciqId: "IQ216463",
        },
        {
            id: 9,
            name: "Pebble Beach Systems Group plc",
            ciqId: "IQ879091",
        },
        {
            id: 10,
            name: "Roku, Inc.",
            ciqId: "IQ8690249",
        },
    ],
}

export default sampleValues
