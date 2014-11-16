window.Todo.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "":"todosIndex",
    "todos/new": "todosNew",
    "todos/:id": "todosShow"
  },

  todosIndex: function(){
    var indexView = new window.Todo.Views.TodosIndex({
      collection: Todo.Collections.todos
    });
    Todo.Collections.todos.fetch();
    $("body").html(indexView.render().$el)
  },

  todosNew: function(){

    var view = new Todo.Views.TodosNew();
    $("body").html(view.render().$el)
  },

  todosShow: function(id){
    var model = Todo.Collections.todos.getOrFetch(id)
    model.comments().fetch()

    var showView = new Todo.Views.TodosShow({
      model: model
    })

    $("body").html(showView.render().$el)
  }
})
