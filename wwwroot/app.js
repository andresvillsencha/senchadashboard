/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'CafeApp.Application',

    name: 'CafeApp',

    requires: [
        // This will automatically load all classes in the CafeApp namespace
        // so that application classes do not need to require each other.
        'CafeApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'CafeApp.view.main.Main'
});
