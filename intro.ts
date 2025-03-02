interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate?: Date;
}

class TodoList {
    private todos: TodoItem[] = [];
    private nextId = 1;

    addTodo(task: string, dueDate?: Date): void {
        const newTodo: TodoItem = {
            id: this.nextId++,
            task,
            completed: false,
            dueDate
        };
        this.todos.push(newTodo);
    }

    completeTodo(id: number): void {
        const index = this.findTodoIndex(id);
        this.todos[index].completed = true;
    }

    removeTodo(id: number): void {
        const index = this.findTodoIndex(id);
        this.todos.splice(index, 1);
    }

    listTodos(): TodoItem[] {
        return [...this.todos];
    }

    filterTodosByStatus(completed: boolean): TodoItem[] {
        return this.todos.filter(todo => todo.completed === completed);
    }

    updateTask(id: number, newTask: string): void {
        const index = this.findTodoIndex(id);
        this.todos[index].task = newTask;
    }

    clearCompleted(): void {
        this.todos = this.todos.filter(todo => !todo.completed);
    }

    private findTodoIndex(id: number): number {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index === -1) {
            throw new Error(`Todo with ID ${id} not found`);
        }
        return index;
    }
}

export { TodoItem, TodoList };