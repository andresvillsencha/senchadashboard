Ext.define('CafeApp.view.dashboard.SalesRepChart', {
    extend: 'Ext.panel.Panel',
    xtype: 'SR-chart',

    requires: [
        'CafeApp.store.SalesRepSalesStore',
        'CafeApp.store.SalesRepGroupsStore',
        'Ext.chart.theme.Blue'
    ],

    title: 'Sales Representatives',
    layout: 'fit',

    tbar: [{
        xtype: 'combobox',
        store: { type: 'sales-rep-groups' },
        displayField: 'name',
        valueField: 'id',
        emptyText: 'Select One',
        forceSelection: true,
        editable: false,
        listeners: {
            change: function (obj,group_id) {
                let chart=Ext.getCmp('sales-chart');
                chart.store.clearFilter(group_id>0);
                chart.store.filter('group_id',group_id);
            }
        }
    }, {
        xtype: 'button',
        text: 'Show All',
        handler: function () {
            let chart=Ext.getCmp('sales-chart');
            chart.store.clearFilter();
        }
    }, '->', {
        xtype: 'button',
        iconCls: 'fa fa-expand',
        handler: function () {
            let chart=Ext.getCmp('sales-chart').cloneConfig();
            let myWindow=new Ext.create('Ext.window.Window', {
                title: 'Sales Representative',
                modal: true,
                width: 800,
                height: 600,
                layout: 'fit',
                items: chart
            });
            myWindow.show();
        }
    }],
    
    items: [{
        xtype:  'polar',
        reference: 'chart',
        id: 'sales-chart',
        store: {
            type: 'sales-rep-sales'
        },
        insetPadding: 60,
        interactions: ['rotate'],
        theme: 'blue',
        series: [{
            type: 'pie',
            title: 'Min',
            angleField: 'subtotal',
            radiusField: 'quantity',
            label: {
                field: 'name',
                display: 'outside'
            },
            style: {
                strokeStyle: 'transparent',
                lineWidth: 1
            },
            tooltip: {
                trackMouse: true,
                renderer: function (tooltip,record,item) {
                    let months='<div>' +
                        '   <div style="font-weight:bold; width: 100px; display: inline-block;">Month</div>' +
                        '   <div style="font-weight:bold; width: 100px; display: inline-block;">USD</div>' +
                        '   <div style="font-weight:bold; width: 60px; display: inline-block;">QTY</div>' +
                        '<div>';
                    let sales = record.get('sales');
                    for (let i=0; i<sales.length;i++) {
                        months += 
                            '<div>' +
                            '   <div style="font-weight:bold; width: 100px; display: inline-block;">'+sales[i].month +'</div>' +
                            '   <div style="width: 100px; display: inline-block;">$'+sales[i].currency_sold +'</div>' +
                            '   <div style="width: 60px; display: inline-block;">'+sales[i].quantity_sold +'</div>' +
                            '<div>';
                    }
                    tooltip.setHtml(
                        '<div style="font-weight: bold; font-size: 14px; border-bottom: 1px solid #fff; margin-bottom: 4px;">' +record.get('name') + '</div>' + 
                        months
                    );
                }
            }
        }],
    }]
});