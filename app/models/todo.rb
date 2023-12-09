class Todo < ApplicationRecord
  
  # after_create_commit -> { broadcast_prepend_later_to "todos", partial: "todos/todo", locals: { todo: self }, target: "todos" }
  # after_update_commit -> { broadcast_replace_later_to "todos", partial: "todos/todo", locals: { todo: self } }
  # after_destroy_commit -> { broadcast_remove_to "todos" }
      # OR
  broadcasts_to -> (todo) { "todos" }, inserts_by: :prepend
end
