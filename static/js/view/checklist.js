define(function(require){
  var Backbone = require('backbone');
  var item_tpl = require('text!app/templates/checklist.tpl');

  var View = Backbone.View.extend({
    tagName: 'ul',

    initialize: function(options) {
      this.options = options;
    },

    render: function(){
      var item_template = _.template(item_tpl);
      this.options.items.forEach(function(item) {
        item.checked = (item.checked) ? true : false;
        this.$el.append(item_template(item));
      }, this);
      return this;
    }
  });

  return View;
});
