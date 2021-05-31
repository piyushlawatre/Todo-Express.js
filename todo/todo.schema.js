import { v4 as uuidv4 } from 'uuid';

// while creating:
// { id: <some-id>,  text: 'this is a todo', isDone: false, isDeleted: false }
// after updating
// { id: <some-id>,  text: 'this is a todo', isDone: true, isDeleted: false }
// after deleting
// { id: <some-id>,  text: 'this is a todo', isDone: false, isDeleted: true }
// which manages the CRUD of todos
// get all todos
// create a todo
// update a todo -> mark as done
// delete a todo -> delete a todo

class TodoSchema {
    todoList = [];
    constructor(todoList) {
        this.todoList = todoList;
    }
    getTodo() {
        return this.todoList;
    }

    createTodo(task) {
        task.id = uuidv4();
        this.todoList.push(task);
        task.isDone = false;
        task.isDeleted = false;
        return task;
    }

    updateTodo(id) {
        const taskIndex = this.todoList.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            const a = this.todoList[taskIndex].isDone = true;
        }
        else {
            throw { message: "Task Not Found" }
        }
    }

    deleteTodo(id) {
        const taskIndex = this.todoList.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            const a = this.todoList[taskIndex].isDeleted = true;
        }
        else {
            throw { message: "Task Not Found" }
        }
    }
}

const TodoModel = new TodoSchema([]);
export default TodoModel;
