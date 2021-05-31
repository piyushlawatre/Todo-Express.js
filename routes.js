import TodoRouter from "./todo/todo.route.js";

export const routes = [
    {
        path: "/todo",
        handler: TodoRouter
    }
]