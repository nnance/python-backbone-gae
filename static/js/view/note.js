define(function(require){
  var _ = require('underscore');
  var Backbone = require('backbone');
  var Composer = require('backbone.composer');
  var tpl = require('text!app/templates/note.tpl');
  var item_tpl = require('text!app/templates/checklist.tpl');

  var NoteView = Backbone.View.extend({
    template: _.template(tpl),

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      if (this.model.get('checklist_items')) {
        var item_template = _.template(item_tpl);
        this.model.get('checklist_items').forEach(function(item){
          item.checked = (item.checked) ? true : false;
          this.$('ul').append(item_template(item));
        });
      }
      return this;
    }
  });

  return NoteView;
});
