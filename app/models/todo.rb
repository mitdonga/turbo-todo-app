class Todo < ApplicationRecord
  
  after_create_commit -> { broadcast_prepend_to "todos", partial: "todos/todo", locals: { todo: self }, target: "todos" }
end
