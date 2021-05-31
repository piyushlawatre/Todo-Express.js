import TodoRepo from "./todo.repo.js";

const getAllTask = () => TodoRepo.getAllTask();
const createTheTask = (task) => TodoRepo.createTheTask(task);
const deleteTheTask = (id) => TodoRepo.deleteTheTask(id);
const updateTheTask = (id) => TodoRepo.updateTheTask(id);

export default {
    getAllTask,
    createTheTask,
    deleteTheTask,
    updateTheTask 
}
