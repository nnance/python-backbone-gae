define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var Backbone = require('backbone');
    var MainView = require('app/view/main');

    var view = new MainView({el: 'body'});
    view.render();
});
