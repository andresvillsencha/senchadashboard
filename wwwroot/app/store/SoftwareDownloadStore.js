Ext.define('CafeApp.store.SoftwareDownloadStore', {
    extend: 'Ext.data.Store',

    alias: 'store.sw-downloads',

    autoLoad: true,
    pageSize: null,

    proxy: {
        type: 'ajax',
        url: '/backend/endpoint/api/SoftwareDownloads/',

        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});
