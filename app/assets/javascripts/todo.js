window.Todo = {
  Models: {},
  Collections: {},
  Views: {},
  intialize: function(){
    var view = new window.Todo.Views.TodosIndex({
      collection: Todo.Collections.todos
    });
    Todo.Collections.todos.fetch();
    $("body").append(view.render().$el)
  }
};

$(Todo.intialize)
