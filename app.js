/*
	This file is generated and updated by Sencha Cmd. You can edit this file as
	needed for your application, but these edits will have to be merged by
	Sencha Cmd when it performs code generation tasks such as generating new
	models, controllers or views and when running 'sencha app upgrade'.

	Ideally changes to this file would be limited and most work would be done
	in other places (such as Controllers). If Sencha Cmd cannot merge your
	changes and its generated code, it will produce a 'merge conflict' that you
	will need to resolve manually.
*/

Ext.Loader.setConfig({
	enabled:true,
	disableCaching: false,
	paths: {
		Ext: './touch/src',
		WorkingWaterfronts: './app'
	}
});

Ext.application({
	name		: 'WorkingWaterfronts',
	models		: ['Locations', 'PointsOfInterest'],
	stores		: ['Location', 'Distance', 'PointOfInterest'],
	views		: ['Home', 'MapList', 'PointOfInterest'],
	controllers	: ['Home', 'MapList', 'PointOfInterest'],

	launch: function() {
		Ext.Viewport.add(Ext.create('WorkingWaterfronts.view.Home'));
		Ext.Viewport.add(Ext.create('WorkingWaterfronts.view.MapList'));
		Ext.Viewport.add(Ext.create('WorkingWaterfronts.view.PointOfInterest'));
		// todo: add detail for point view

		// This is used to iplement android back button
        if(Ext.os.is('Android')){
            document.addEventListener("backButton", Ext.bind(onBackKeyDown, this), false);
            function onBackKeyDown(eve){
                eve.preventDefault();
                console.log("device back button was pressed");
                if(Ext.Viewport.getActiveItem().xtype ==  WorkingWaterfronts.view.Home.xtype){
                    navigator.app.exitApp();
                }
                // Action is like a fired event from a view page, routes are assigned
                // for the url sent back in the controller routes section. The routes
                // section in the controller defines which function to call when an 
                // action is sent to the controller from the device back button
                if(Ext.Viewport.getActiveItem().xtype ==  WorkingWaterfronts.view.ListView.xtype){
                    this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
                        url: 'listback'
                    }));
                }
                // Note after the device back button branch pull request is accepted and included
                // in dev we will need to replace the detail view function with the commented
                // out function below it in order to take into account navigation back from the
                // productDetail page
                if((Ext.Viewport.getActiveItem().xtype ==  WorkingWaterfronts.view.Detail.xtype) | (Ext.Viewport.getActiveItem().xtype ==  WorkingWaterfronts.view.ProductDetail.xtype)){
                    this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
                        url: 'detailback'
                    }));
                }
                // if((Ext.Viewport.getActiveItem().xtype ==  WorkingWaterfronts.view.Detail.xtype) | (Ext.Viewport.getActiveItem().xtype ==  WorkingWaterfronts.view.Productdetail.xtype)){
                //     this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
                //         url: 'detailback'
                //     }));
                // }
                if(Ext.Viewport.getActiveItem().xtype ==  WorkingWaterfronts.view.Info.xtype){
                    this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
                        url: 'infoback'
                    }));
                }
                if(Ext.Viewport.getActiveItem().xtype ==  WorkingWaterfronts.view.Specific.xtype){
                    this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
                        url: 'specificback'
                    }));
                }
            }
        }
	}

});
