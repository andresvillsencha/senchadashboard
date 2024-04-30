Ext.define('CafeApp.view.dashboard.SalesChart', {
    extend: 'Ext.panel.Panel',
    xtype: 'sales-chart',

    requires: [
        'CafeApp.store.SalesStore'
    ],

    title: 'Top Selling software (last 12 months)',
    layout: 'fit',
    
    items: [{
        xtype:  'cartesian',
        reference: 'chart',
        store: {
            type: 'sales'
        },
        insetPadding: 20,
        legend: {
            docked: 'right'
        },
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
        colors: ["#4bbc99", "#59be95", "#69c095", "#74c395", "#84c593", "#8ec88f", "#98ca8d", "#a6cd8a", "#b0cf87", "#bed187", "#c5d685", "#ced981", "#d8db7f", "#e3de7b", "#ddda80", "#f6e272" ],

        series: {
            type: 'area',
            xField: 'month',
            title: [ 'Streamify', 'TaskMaster', 'FinancePro', 'HealthTrack', 'SocialSphere', 'ProjectPlanner', 'TravelBuddy', "PhotoGenius", "NoteWave", "ShopSmart", "LearnEasy", "GameZone" ],
            yField: [ 'Streamify', 'TaskMaster', 'FinancePro', 'HealthTrack', 'SocialSphere', 'ProjectPlanner', 'TravelBuddy', "PhotoGenius", "NoteWave", "ShopSmart", "LearnEasy", "GameZone" ],
            stacked: true,
            style: {
                minGapWidth: 10
            },
        },
    }]
});