Ext.define('WorkingWaterfronts.store.ProductList', {
    extend: 'Ext.data.Store',
    storeId: 'ProductList',
 
    config: {
        model: 'WorkingWaterfronts.model.ProductLists',
        data: [
            {
                "name": "test Fish",
                "preparation": "Skewered",
                "vendors": [
                    {
                        "name": "test 1"
                    },
                    {
                        "name": "test 2"
                    }
                ]
            },
            {
                "name": "other Fish",
                "preparation": "new",
                "vendors": [
                    {
                        "name": "test 1"
                    },
                    {
                        "name": "test 2"
                    }
                ]
            }
        ]
    }
});