Ext.define('CafeApp.view.charts.Layout', {
    extend: 'Ext.panel.Panel',
    xtype: 'layout-panel',

    requires: [
        'CafeApp.store.KPIStore',
    ],

    layout: { 
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },

    items: [{
        xtype: 'gauge',
        needle: 'wedge',
        valueStyle : { fill: '#009900' },
        value: 55,
        maxValue: 100,
        minValue: 20,
        flex: 1
    }, {
        xtype: 'polar',
        axes: {
            type: 'numeric',
            position: 'gauge',
            maximum: 200,
            majorTickSteps: 10
        },

        store: {
            type: 'kpi-store',
            params: { kpi: 'Hot' },
            gauge: null,
        },

        series: {
            type: 'gauge',
            angleField: 'value',
            colors: ['#1F6D91', '#90BCC9'],
            needle: true,
            donut: 30,
        },
        flex: 1
    }, {
        xtype: 'polar',
        store: {
            fields: ['label', 'value' ],
            data: [
                { label: 'Closed', value: 20 },
                { label: 'Warm', value: 6 },
                { label: 'Hot', value: 12 },
            ]
        },
        series: {
            type: 'pie',
            angleField: 'value',
            label: {
                field: 'label',
                display: 'outside'
            },
            colors: ['#369', '#396', '#936'],
            donut: 50,
        },

        flex: 1
    }, ],


});