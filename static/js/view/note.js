define(function(require){
  var _ = require('underscore');
  var Backbone = require('backbone');
  var Composer = require('backbone.composer');
  var ChecklistView = require('app/view/checklist');
  var tpl = require('text!app/templates/note.tpl');

  var NoteView = Backbone.View.extend({
    template: _.template(tpl),
    className: 'note',

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      if (this.model.get('checklist_items')) {
        var checklistView = new ChecklistView({items: this.model.get('checklist_items')});
        checklistView.render();
        this.$el.append(checklistView.el);
      }
      return this;
    }
  });

  return NoteView;
});
