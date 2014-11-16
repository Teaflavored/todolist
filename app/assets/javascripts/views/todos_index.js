window.Todo.Views.TodosIndex = Backbone.View.extend({
  template: JST["todos/index"],

  initialize: function (options){
    this.listenTo(this.collection, "sync add", this.render.bind(this))
  },
  events:{
    "click button#refresh": "refresh"
  },

  refresh: function(){
    this.collection.fetch()
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
