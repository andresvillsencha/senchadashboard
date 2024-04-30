Ext.define('CafeApp.view.dashboard.LeaderBoard', {
    extend: 'Ext.grid.Panel',
    xtype: 'leaderboard',

    requires: [
        'CafeApp.store.LeaderBoardStore'
    ],

    layout: 'fit',
    width: '100%',

    store: {
        type: 'leaderboard-store'
    },

    columns: [{
        text: 'Id',
        dataIndex: 'sr_id',
        width: 100
    },{
        text: 'Sales Representative',
        dataIndex: 'name',
        flex: 1
    }, {
        text: 'Leads',
        dataIndex: 'leads',
        width: 100
    }, {
        text: 'Rating',
        dataIndex: 'stars',
        width: 100,
        renderer: function (value) {
            let stars="";
            for (let i=0;i<5;i++) {
                stars += (i<value) ? '<span class="fa fa-star" style="color:#cccc00"></span>' : '<span class="fa fa-star" style="color:#eeeeee"></span>';
            }
            return stars;
        }
    }]
    
});