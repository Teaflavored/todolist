window.Todo = {
  Models: {},
  Collections: {},
  Views: {},
  intialize: function(){
    var indexView = new window.Todo.Views.TodosIndex({
      collection: Todo.Collections.todos
    });
    Todo.Collections.todos.fetch();
    $("body").append(indexView.render().$el)


    var view = new Todo.Views.TodosNew();
    $("body").append(view.render().$el)
  }
};

$(Todo.intialize)
