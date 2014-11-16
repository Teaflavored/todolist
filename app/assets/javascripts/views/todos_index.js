window.Todo.Views.TodosIndex = Backbone.View.extend({
  template: JST["todos/index"],
  // initialize: function(options){
  //   this.collection = options.collection;
  // },

  events:{
    "click button#refresh": "refresh"
  },

  refresh: function(){
    var view = this;
    this.collection.fetch({
      success: function(){
        view.render();
      }
    })
  },
  render: function(){
    //building HTML in JS code, not good
    var renderedContent = this.template({
      todos: this.collection
    })
    this.$el.html(renderedContent);

    return this;
  }
});
