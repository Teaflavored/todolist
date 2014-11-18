window.Todo.Views.CommentsNew = Backbone.View.extend({
  template: JST["comments/new"],
  initialize: function(options){
    this.todo = options.todo
  },

  events: {
    "submit form": "submit",
    "keyup textarea": "handleKeyUp"
  },

  handleKeyUp: function(event){
    this.renderPreview();
  },

  renderPreview: function(){
    var content = this.$("textarea").val()
    this.$(".preview").html(marked(_.escape(content)))
  },

  submit: function(event){
    var view = this;
    event.preventDefault();
    var commentParams = $(event.currentTarget).serializeJSON();
    var comment = new Todo.Models.Comment(commentParams);

    comment.save({}, {
      success: function(){
        view.todo.comments().add(comment)
      }
    })
  },

  render: function(){
    var renderedContent = this.template({
      todo: this.todo,
    });

    this.$el.html(renderedContent);

    return this;
  }
});
