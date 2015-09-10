define(function (require) {
    var _ = require('underscore');
    var Backbone = require('backbone');
    var tpl = require('text!app/templates/main.tpl');

    var View = Backbone.View.extend({
        template: _.template(tpl),

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return View;
});
