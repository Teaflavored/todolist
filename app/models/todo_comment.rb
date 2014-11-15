class TodoComment < ActiveRecord::Base
  validates :content, :todo, presence: true

  belongs_to :todo

end