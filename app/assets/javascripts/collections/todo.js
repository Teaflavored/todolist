window.Todo.Collections.Todos = Backbone.Collection.extend({
  url: "/api/todos",
  model: Todo.Models.Todo,

  getOrFetch: function(id){
    var model;
    var todos = this;

    if (model = this.get(id)){
      model.fetch();
      return model;
    } else {
      model = new Todo.Models.Todo({id: id});
      model.fetch({
        success:function(){
          todos.add(model);
        }
      });
      return model;
    }
  }
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
