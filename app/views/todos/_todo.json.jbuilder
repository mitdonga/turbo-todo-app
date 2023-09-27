json.extract! todo, :id, :title, :is_done, :created_at, :updated_at
json.url todo_url(todo, format: :json)
