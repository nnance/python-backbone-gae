define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var Backbone = require('backbone');
    var MainView = require('app/view/main');
    var User = require('app/models/user');

    var view = new MainView({
      el: 'body',
      model: new User()
    });
    view.render();
});
