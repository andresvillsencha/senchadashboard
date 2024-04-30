Ext.define('CafeApp.model.SalesData', {
    extend: 'CafeApp.model.Base',

    fields: [
        'name', 
        // 'subtotal',
        {
            name: 'subtotal',
            calculate: function (data) {
                // calculate subtotal
                let subtotal=0;
                let dataRow=data;
                
                for (let i=0;i<dataRow.sales.length;i++) {
                    if (dataRow.sales!== undefined) subtotal+=dataRow.sales[i].currency_sold;
                }
                return subtotal;
            }
        }, {
            name: 'quantity',
            calculate: function (data) {
                // calculate subtotal
                let qty=0;
                let dataRow=data;
                
                for (let i=0;i<dataRow.sales.length;i++) {
                    if (dataRow.sales!== undefined) qty+=dataRow.sales[i].quantity_sold;
                }
                return qty;
            }
        }
    ]
});
