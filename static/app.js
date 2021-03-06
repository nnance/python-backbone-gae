// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'static/components',
    paths: {
        underscore: 'lodash/lodash',
        text: 'text/text',
        jquery: 'jquery/dist/jquery',
        backbone: 'backbone/backbone',
        'backbone.composer': 'backbone.composer/backbone.composer',
        app: '../js'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);
