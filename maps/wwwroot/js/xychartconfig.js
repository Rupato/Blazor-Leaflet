var chart = am4core.createFromConfig({

    // Category axis
    "xAxes": [{
        "type": "CategoryAxis",
        "dataFields": {
            "category": "key"
        }
    }],

    // Value axis
    "yAxes": [{
        "type": "ValueAxis"
    }],

    // Series
    "series": [{
        "type": "ColumnSeries",
        "dataFields": {
            "categoryX": "key",
            "valueY": "value"
        },
    },
    {
        "type": "LineSeries",
        "dataFields": {
            "categoryX": "key",
            "valueY": "value1"
        },

    },
    ],


    // Cursor
    "cursor": {},

    // Data
    "data": [
        {
            "key": "Akershus",
            "value": 5639529.084738546,
            "value1": 2643954.9653579677
        },
        {
            "key": "Aust-Agder",
            "value": 2643954.9653579677,
            "value1": 3614503.325361203
        },
        {
            "key": "Buskerud",
            "value": 3614503.325361203,
            "value1": 2200498.3865184654
        },
        {
            "key": "Finnmark Finnmárku",
            "value": 2200498.3865184654,
            "value1": 2599636.9128469196
        },
        {
            "key": "Hedmark",
            "value": 2599636.9128469196,
            "value1": 3654184.9887571414
        },
        {
            "key": "Hordaland",
            "value": 3654184.9887571414,
            "value1": 2770037.0889379308
        },
        {
            "key": "Møre og Romsdal",
            "value": 2770037.0889379308,
            "value1": 2488231.9380567037
        },
        {
            "key": "Nordland",
            "value": 2488231.9380567037,
            "value1": 2606096.7365454063
        },
        {
            "key": "Oppland",
            "value": 2606096.7365454063,
            "value1": 5639529.084738546,
        }
    ]

}, "chartdiv", "XYChart");