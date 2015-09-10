define(function (require) {
  var Backbone = require('backbone');

  var User = Backbone.Model.extend({
    initialize: function() {
      if (user) {
        this.set(user);
      }
    }
  });
  return User;
});
