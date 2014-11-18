window.Todo.Models.Todo = Backbone.Model.extend({
  //properties here are inserted into the model's prototype
  urlRoot: "/api/todos",

  comments: function(){
    if(this._comments === undefined){
      this._comments = new Todo.Collections.TodoComments([], { todo: this })
    }

    return this._comments;
  },

  parse: function (jsonResp){
    if(jsonResp.comments){
      this.comments().set(jsonResp.comments)
      delete jsonResp.comments;
    }

    return jsonResp
  }
});
