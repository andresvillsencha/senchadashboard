Ext.define('CafeApp.store.RatingsStore', {
    extend: 'Ext.data.Store',

    alias: 'store.ratings',

    autoLoad: true,
    pageSize: null,

    proxy: {
        type: 'ajax',
        url: '/backend/endpoint/api/SoftwareRatingsSum/',

        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});
