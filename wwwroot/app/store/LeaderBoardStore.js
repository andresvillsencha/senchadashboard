Ext.define('CafeApp.store.LeaderBoardStore', {
    extend: 'Ext.data.Store',

    alias: 'store.leaderboard-store',

    autoLoad: true,
    pageSize: null,

    proxy: {
        type: 'ajax',
        url: '/backend/endpoint/api/leaderboard/',

        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});
