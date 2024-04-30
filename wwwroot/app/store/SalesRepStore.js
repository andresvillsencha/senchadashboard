Ext.define('CafeApp.store.SalesRepStore', {
    extend: 'Ext.data.Store',

    alias: 'store.sales-representatives',

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
