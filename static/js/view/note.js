define(function(require){
  var _ = require('underscore');
  var Backbone = require('backbone');

  var NoteView = Backbone.View.extend({
    template: _.template(require('text!app/templates/note.tpl')),

    serializeData: function() {
        return this.model.toJSON();
    }
  });

  return NoteView;
});
