define(function (require) {
    var MainView = require('app/view/main');
    var User = require('app/models/user');
    var Notes = require('app/collections/note');

    var view = new MainView({
      el: 'body',
      model: new User(user),
      collection: new Notes(notes)
    });
    view.render();
});
