define(function(require){
  var Backbone = require('backbone');

  var Note = Backbone.Model.extend({
    urlRoot: '/api/notes'
  });

  return Note;
});
