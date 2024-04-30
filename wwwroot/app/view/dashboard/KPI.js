Ext.define('CafeApp.view.dashboard.KPI', {
    extend: 'Ext.panel.Panel',
    xtype: 'kpi-panel',

    requires: [
        'CafeApp.store.KPIStore',
        'CafeApp.view.dashboard.LeaderBoard'
    ],

    layout: { 
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },

    defaults: {
        xtype: 'panel',
        flex: 1,
        layout: 'fit',
        padding: 8
    },

    items: [{
        itemId: 'hot-leads',
        items: {
            xtype: 'gauge',
            // needle: 'wedge',
            valueStyle : { fill: '#990000' },
            value:0,
        },
        listeners: {
            beforerender: function () {
                let me=this;
                let store=Ext.create('CafeApp.store.KPIStore', {
                    params: { kpi: 'Hot' },
                    gauge: me.down('gauge')
                });
            },
        }
    }, {
        itemId: 'warm-leads',
        items: {
            xtype: 'gauge',
            valueStyle : { fill: '#999933' },
            value:0,
        },
        listeners: {
            beforerender: function () {
                let me=this;
                let store=Ext.create('CafeApp.store.KPIStore', {
                    params: { kpi: 'Warm' },
                    gauge: me.down('gauge')
                });
            },
        }
    }, {
        itemId: 'closed-leads',
        items: {
            xtype: 'gauge',
            valueStyle : { fill: '#009966' }
        },
        listeners: {
            beforerender: function () {
                let me=this;
                let store=Ext.create('CafeApp.store.KPIStore', {
                    params: { kpi: 'Closed' },
                    gauge: me.down('gauge')
                });
            },
        }
    }, {
        xtype: 'leaderboard',
        flex: 3,
    }],


});