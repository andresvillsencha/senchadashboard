Ext.define('CafeApp.store.SalesStore', {
    extend: 'Ext.data.Store',

    alias: 'store.sales',

    autoLoad: true,
    pageSize: null,

    proxy: {
        type: 'ajax',
        url: '/backend/endpoint/api/SoftwareSales/',

        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});
