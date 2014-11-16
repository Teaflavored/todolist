window.Todo = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},
  intialize: function(){
    //new only sets up the routes
    new Todo.Routers.AppRouter();
    //start listening to changes in location
    Backbone.history.start();
  }
};

$(Todo.intialize)
