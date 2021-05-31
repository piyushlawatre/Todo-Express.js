import TodoModel from "./todo.schema.js";

const getAllTask = () => TodoModel.getTodo();
const createTheTask = (task) => TodoModel.createTodo(task);
const deleteTheTask = (id) => TodoModel.deleteTodo(id);
const updateTheTask = (id) => TodoModel.updateTodo(id);

export default {
    getAllTask,
    createTheTask,
    deleteTheTask,
    updateTheTask 
}
