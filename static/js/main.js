define(function (require) {
    var Composer = require('backbone.composer');
    var MainView = require('app/view/main');
    var User = require('app/models/user');
    var Notes = require('app/collections/note');

    var view = new MainView({
      el: 'body',
      model: new User(),
      collection: new Notes()
    });
    view.render();
});
