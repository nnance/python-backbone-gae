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
                this.collection.forEach(this.addItem, this);
                this.listenTo(this.collection,'add',this.addItem);
            }
        },

        serializeData: function() {
            return this.model.toJSON();
        },

        addItem: function(note) {
            this.addSubView({
              view: new NoteView({model: note}),
              selector: '#notes'
            });
        },

        saveNote: function() {
          this.collection.create(this.serializeForm('form'), {wait: true});
        }
    });

    return View;
});
