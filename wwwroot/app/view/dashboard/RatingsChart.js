/**
 * FIRST CHART: RADAR
 * 
 */
Ext.define('CafeApp.view.dashboard.RatingsChart', {
    extend: 'Ext.panel.Panel',
    xtype: 'ratings-chart',

    requires: [
        'CafeApp.store.RatingsStore'
    ],

    title: 'Software Ratings',
    layout: 'fit',
    
    items: [{
        xtype:  'polar',
        reference: 'chart',
        store: {
            type: 'ratings'
        },
        legend: {
            docked: 'right'
        },
        insetPadding: 40,
        interactions: ['rotate'],
        colors: [ '#CAA', '#AAC', '#ACA'],
        axes: [{
            type: 'numeric',
            position: 'radial',
            minimum: 0,
            maximum: 5,
            grid: true,
        }, {
            type: 'category',
            position: 'angular',
            grid: true
        }],
        series: [{
            type: 'radar',
            title: 'Min',
            angleField: 'name',
            radiusField: 'min_rating',
            style: {
                lineWidth: 2,
                fillStyle: 'none'
            },
            marker: true,
            tooltip: {
                trackMouse: true,
                renderer: function(tooltip, record, item) {
                    tooltip.setHtml(record.get('name') + ' Min: ' + record.get(item.field));
                }
            }
        }, {
            type: 'radar',
            title: 'Avg',
            angleField: 'name',
            radiusField: 'avg_rating',
            style: {
                lineWidth: 2,
                fillStyle: 'none'
            },
            marker: true,
            tooltip: {
                trackMouse: true,
                renderer: function(tooltip, record, item) {
                    tooltip.setHtml(record.get('name') + ' Avg: ' + record.get(item.field));
                }
            }
        }, {
            type: 'radar',
            title: 'Max',
            angleField: 'name',
            radiusField: 'max_rating',
            style: {
                lineWidth: 2,
                fillStyle: 'none'
            },
            marker: true,
            tooltip: {
                trackMouse: true,
                renderer: function(tooltip, record, item) {
                    tooltip.setHtml(record.get('name') + ' Max: ' + record.get(item.field));
                }
            }
        }],
    }]
});