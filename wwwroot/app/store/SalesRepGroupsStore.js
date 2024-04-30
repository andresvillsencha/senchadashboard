Ext.define('CafeApp.store.SalesRepGroupsStore', {
    extend: 'Ext.data.Store',

    alias: 'store.sales-rep-groups',

    autoLoad: true,
    pageSize: null,

    proxy: {
        type: 'ajax',
        url: '/backend/endpoint/api/Departments/',

        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});
