class Todo < ActiveRecord::Base
  has_many :comments, class_name: "TodoComment", foreign_key: :todo_id, primary_key: :id
  validates :title, presence: true
end
