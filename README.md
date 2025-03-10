# Todo List Application

A simple Todo List implementation in TypeScript supporting basic CRUD operations and additional features.

## Features

- Add todos with optional due dates
- Mark todos as completed
- Remove todos by ID
- List all todos
- Filter todos by completion status
- Update task descriptions
- Clear all completed todos
- Error handling for invalid operations

## Implementation Details

### TodoItem Interface
- `id`: Unique identifier (auto-incrementing)
- `task`: Task description
- `completed`: Completion status
- `dueDate`: Optional due date

### TodoList Class
- Maintains todos in a private array
- Uses TypeScript access modifiers for encapsulation
- Implements error handling for invalid operations
- Provides the following methods:
  - `addTodo(task: string, dueDate?: Date)`: Adds a new todo
  - `completeTodo(id: number)`: Marks todo as completed
  - `removeTodo(id: number)`: Removes a todo
  - `listTodos()`: Returns all todos
  - `filterTodosByStatus(completed: boolean)`: Filters by completion status
  - `updateTask(id: number, newTask: string)`: Updates task description
  - `clearCompleted()`: Removes all completed todos

## Usage Example

```typescript
const todoList = new TodoList();

// Add todos
todoList.addTodo("Buy milk");
todoList.addTodo("Write report", new Date("2023-12-31"));

// Complete a todo
todoList.completeTodo(1);

// Update a task
todoList.updateTask(2, "Write final report");

// List all todos
console.log(todoList.listTodos());

// Clear completed todos
todoList.clearCompleted();
