import { Router } from "express";
import TodoService from "./todo.service.js";

const router = Router();

router.get('/', (req, res, next) => {
    const result = TodoService.getAllTask();
    res.send(result);
})

router.post("/", (req, res, next) => {
    console.log(req.body);
    const task = req.body;
    const result = TodoService.createTheTask(task);
    res.send(result);
})

router.put("/update", (req, res, next) => {
    console.log(req.query);
    const { id } = req.query;
    const result = TodoService.updateTheTask(id);
    res.send(result);
})

//got error in req.param 
router.delete("/delete", (req, res, next) => {
    console.log(req.query);
    const { id } = req.query;
    const result = TodoService.deleteTheTask(id);
    res.send(result);
})

export default router;
