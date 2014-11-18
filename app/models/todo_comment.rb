class TodoComment < ActiveRecord::Base
  validates :content, :todo_id, presence: true
  belongs_to :todo
end
