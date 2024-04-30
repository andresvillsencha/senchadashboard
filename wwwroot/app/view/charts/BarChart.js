Ext.define('CafeApp.view.charts.BarChart', {
    extend: 'Ext.panel.Panel',
    xtype: 'bar-chart',

    requires: [
        'CafeApp.store.SalesStore'
    ],

    title: 'Bar Chart',
    layout: 'fit',
    
    items: [{
        xtype: 'cartesian',
        reference: 'chart',
        store: {
            type: 'sales'
        },
        axes: [{
            type: 'numeric',
            position: 'left',
            grid: true,
            title: 'Sales'
        }, {
            type: 'category',
            position: 'bottom'
        }],

        plugins: {
            ptype: 'chartitemevents'
        },

        listeners: {
            itemclick: function (series, item) {
                Ext.Msg.alert('Details', 'Item: '+item.field+'<br>Month: '+item.record.get('month')+'<br>Value: '+item.record.get(item.field));

            }
        },


        series: [{
            type: 'bar',
            colors: ["#4bbc99", "#bed187" ],
            xField: 'month',
            yField: [ 'Streamify', 'TaskMaster' ],
            title: [ 'Streamify', 'TaskMaster' ],
            stacked: false,
            style: {
                minGapWidth: 10
            },
        }]
    }]
});