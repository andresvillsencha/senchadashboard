Ext.define('CafeApp.store.KPIStore', {
    extend: 'Ext.data.Store',

    alias: 'store.kpi-store',

    autoLoad: true,
    pageSize: null,

    listeners: {
        beforeload: function (store, operation, eOpts) {
            this.proxy.extraParams=this.params;
        },
        load: function (obj,records) {
            if (this.gauge!==null) {
                this.gauge.setMaxValue(records[0].data.max);
                this.gauge.setValue(records[0].data.value);
                this.gauge.setTextTpl(records[0].data.label+': {value}');
            }
        }
    },

    proxy: {
        type: 'ajax',
        url: '/backend/endpoint/api/KPIs/',

        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});
