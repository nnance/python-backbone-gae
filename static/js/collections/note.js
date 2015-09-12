define(function(require){
  var Backbone = require('backbone');
  var Note = require('app/models/note');

  var Note = Backbone.Collection.extend({
    model: Note,
    url: '/api/notes'
  });

  return Note;
});
