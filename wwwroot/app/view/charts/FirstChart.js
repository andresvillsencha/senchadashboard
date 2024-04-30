Ext.define('CafeApp.view.charts.FirstChart', {
    extend: 'Ext.panel.Panel',
    xtype: 'first-chart',

    title: 'First Chart',
    layout: 'fit',

    requires: [
        'CafeApp.store.SalesRepSalesStore',
        'Ext.chart.theme.Blue'
    ],

    items: [{
        xtype: 'polar',
        reference: 'chart',
        store: {
            type: 'sales-rep-sales'
        },

        insetPadding: 60,
        interactions: [ 'rotate', 'itemhighlight' ],

        theme: 'blue',

        series: [{
            type: 'pie',
            angleField: 'subtotal',
            radiusField: 'quantity',
            highlight: {
                margin: 80
            },
            label: {
                field: 'name',
                display: 'outside'
            },
            tooltip: {
                trackMouse: true,
                renderer: function (tooltip, record) {
                    let message = record.get('name') + ': ' + record.get('subtotal');
                    tooltip.setHtml('<div style="font-size:14px;">'+message+'</div>');
                }
            }
        }]
    }]
    
    
});