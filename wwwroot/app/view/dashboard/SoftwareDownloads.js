Ext.define('CafeApp.view.dashboard.SoftwareDownloads', {
    extend: 'Ext.panel.Panel',
    xtype: 'downloads-chart',

    requires: [
        'CafeApp.store.SoftwareDownloadStore',
        'Ext.chart.theme.*'
    ],

    title: 'Downloads (last 12 months)',
    layout: 'fit',
    
    items: [{
        xtype:  'cartesian',
        reference: 'chart',
        interactions: [{
            type: 'panzoom',
            zoomOnPan: false
        }],
        store: {
            type: 'sw-downloads'
        },
        insetPadding: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20
        },
        legend: {
            // type: 'dom',
            docked: 'right'
        },
        colors: ["#4b99bc", "#5995be", "#6995c0", "#7495c3", "#8493c5", "#8e8fc8", "#988dca", "#a68acd", "#b087cf", "#be87d1", "#c585d6", "#ce81d9", "#d87fdb", "#e37bde", "#dd80da", "#f672e2" ],

        axes: [{
            type: 'numeric',
            position: 'left',
            titleMargin: 20,
            grid: true,
            title: {
                text: 'Sales'
            },
        }, {
            type: 'category',
            position: 'bottom',
            label    : {
                rotation : {
                    degrees : -45
                }    
            }
        }],
        series: {
            type: 'bar',
            xField: 'month',
            title: [ 'Streamify', 'TaskMaster', 'FinancePro', 'HealthTrack', 'SocialSphere', 'ProjectPlanner', 'TravelBuddy', "PhotoGenius", "NoteWave", "ShopSmart", "LearnEasy", "GameZone" ],
            yField: [ 'Streamify', 'TaskMaster', 'FinancePro', 'HealthTrack', 'SocialSphere', 'ProjectPlanner', 'TravelBuddy', "PhotoGenius", "NoteWave", "ShopSmart", "LearnEasy", "GameZone" ],
            stacked: true,
            fullStack: true,
            style: {
                minGapWidth: 10
            },
            label: {
                field: 'sales',
                display: 'insideEnd',
            },
            highlight: {
                strokeStyle: 'black',
                fillStyle: '#ACF'
            },
            tooltip: {
                trackMouse: false,
                renderer: function (tooltip, record, item) {
                    tooltip.setHtml( item.field + ": " + record.get(item.field) + ' downloads.<br> ' + record.get('month'));
                }
            }
        },
    }]
});