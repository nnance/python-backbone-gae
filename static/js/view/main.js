define(function (require) {
    var _ = require('underscore');
    var Backbone = require('backbone');
    var Composer = require('backbone.composer');
    var NoteView = require('app/view/note');

    var View = Backbone.View.extend({
        template: _.template(require('text!app/templates/main.tpl')),

        events: {
          'click button': 'saveNote'
        },

        initialize: function() {
            if (this.collection) {
                this.collection.forEach(_.partial(this.addItem,'append'), this);
                this.listenTo(this.collection,'add', _.partial(this.addItem,'prepend'));
            }
        },

        serializeData: function() {
            return this.model.toJSON();
        },

        addItem: function(location, note) {
            this.addSubView({
              view: new NoteView({model: note}),
              selector: '#notes',
              location: location
            });
        },

        saveNote: function() {
          var model = this.collection.create(this.serializeForm('form'), {wait: true});
          if (model && !model.validationError) {
            this.$('form')[0].reset();
          }
        }
    });

    return View;
});
