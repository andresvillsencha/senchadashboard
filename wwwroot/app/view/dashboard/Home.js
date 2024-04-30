Ext.define('CafeApp.view.dashboard.Home', {
    extend: 'Ext.panel.Panel',
    xtype: 'dashboard',

    requires: [
        'CafeApp.view.dashboard.RatingsChart',
        'CafeApp.view.dashboard.SalesChart',
        'CafeApp.view.dashboard.SalesRepChart',
        'CafeApp.view.dashboard.SoftwareDownloads',
        'CafeApp.view.dashboard.KPI'
    ],

    layout: { 
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
     },
     bodyStyle: {
        backgroundColor: '#eee'
     },

    defaults: {
        margin: '12 12 6 12',
    },

    items: [{
        xtype: 'kpi-panel',
        flex: 2,
    },{
        xtype: 'panel',
        flex: 3,
        layout: { 
            type: 'hbox',
            pack: 'start',
            align: 'stretch',
        },
        bodyStyle: {
            backgroundColor: '#eee'
        },
        items: [{
            xtype: 'ratings-chart',
            flex: 1,
            margin: '0 12 0 0',
        },{
            xtype: 'sales-chart',
            flex: 2
        }]
    }, {
        xtype: 'panel',
        flex: 3,
        bodyStyle: {
            backgroundColor: '#eee'
        },

        layout: { 
            type: 'hbox',
            pack: 'start',
            align: 'stretch',
        },
        items: [{
            xtype: 'SR-chart',
            flex: 1,
            margin: '0 12 0 0',
        },{
            xtype: 'downloads-chart',
            flex: 2
        }]
    }]

});
