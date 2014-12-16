/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.Loader.setConfig({
    enabled:true,
    disableCaching: false,
    paths: {
        "Ext": 'touch/src'
    }
});
 
Ext.application({
    name: 'WorkingWaterfronts',

    controllers: ["List"],
    models: ["Vendors", "Products", "Locations", "VendorInventories", "ProductLists"],
    stores: ["Education", "Vendor", "Product", "Location", "Distance", "VendorInventory", "ProductList"],
    views: ["Home", "Detail", "ListView", "Map", "Info", "Specific", "ProductDetail"],


    launch: function() {
        Ext.Viewport.add(Ext.create('WorkingWaterfronts.view.Home'));
        Ext.Viewport.add(Ext.create('WorkingWaterfronts.view.Map'));
        Ext.Viewport.add(Ext.create('WorkingWaterfronts.view.ListView'));
        Ext.Viewport.add(Ext.create('WorkingWaterfronts.view.Detail')); 
        Ext.Viewport.add(Ext.create('WorkingWaterfronts.view.ProductDetail')); 
        Ext.Viewport.add(Ext.create('WorkingWaterfronts.view.Info'));
        Ext.Viewport.add(Ext.create('WorkingWaterfronts.view.Specific'));
    }
});
