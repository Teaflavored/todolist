window.Todo.Collections.TodoComments = Backbone.Collection.extend({
  url: function(){
    //return "/api/todos/" + this.todo.get("id") + "/comments";
    return this.todo.url() + "/comments"
  },

  model: window.Todo.Models.Comment,

  initialize: function(models, options){
    this.todo = options.todo;
  }
});
