Ext.define('CafeApp.store.SalesRepSalesStore', {
    extend: 'Ext.data.Store',

    alias: 'store.sales-rep-sales',
    model: 'CafeApp.model.SalesData',

    autoLoad: true,
    pageSize: null,

    proxy: {
        type: 'ajax',
        url: '/backend/endpoint/api/SalesRepSales/',

        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});
