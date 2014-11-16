window.Todo.Collections.Todos = Backbone.Collection.extend({
  url: "/api/todos",
  model: Todo.Models.Todo
})


//common to do this since there'll ever only be one collection
window.Todo.Collections.todos = new window.Todo.Collections.Todos();

// all api actions
//create
//show
//update
//destroy
//index collection

// = FORM PAGES
//new
//edit
