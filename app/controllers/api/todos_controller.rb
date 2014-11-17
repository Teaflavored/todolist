class Api::TodosController < ApplicationController
  def index
    @todos = Todo.all
    render "todos/index"
  end

  def show
    @todo = Todo.find(params[:id])
    @comments = @todo.comments
    render "todos/show"
  end

  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render "todos/show"
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todo_params)
      render "todos/show"
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    if @todo.destroy
      render "todos/show"
    else
      raise "WTF?"
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:title)
  end
end
