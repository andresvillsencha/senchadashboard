/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('CafeApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'CafeApp.view.main.MainController',
        'CafeApp.view.main.MainModel',

        'CafeApp.view.dashboard.Home',
        
        'CafeApp.view.charts.FirstChart',
        'CafeApp.view.charts.Layout',
        'CafeApp.view.charts.BarChart'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 0,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        layout: 'fit',
        items: [{
            xtype: 'dashboard'
        }]
    }, {
        title: 'First Chart',
        iconCls: 'fa-chart-pie',
        layout:'fit',
        items: [{
            xtype: 'first-chart'
        }]
    }, {
        title: 'Second Chart',
        iconCls: 'fa-chart-bar',
        layout:'fit',
        items: [{
            xtype: 'bar-chart'
        }]
    }, {
        title: 'Gauges + Layouts',
        iconCls: 'fa-tachometer-alt',
        layout:'fit',
        items: [{
            xtype: 'layout-panel'
        }]
    }]
});
