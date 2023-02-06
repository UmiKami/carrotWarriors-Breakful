import { Router } from "express";

const router = Router();

let todo = [
    { id: 1, label: "task sample 1", done: false },
    { id: 2, label: "task sample 3", done: true },
    { id: 3, label: "task sample 3", done: true },
    { id: 4, label: "task sample 4", done: false },
    { id: 5, label: "task sample 5", done: true },
    { id: 6, label: "task sample 6", done: false },
    { id: 7, label: "task sample 7", done: true },
    { id: 8, label: "task sample 8", done: false },
    { id: 9, label: "task sample 9", done: true },
    { id: 10, label: "task sample 10", done: false },
];

router.get("/", (req, res) => {
    if (req.query.startId && req.query.status) {
        const taskStatus = req.query.status;
        const taskID = req.query.startId;

        const result = todo.filter(
            (item) => item.done == JSON.parse(taskStatus) && item.id >= taskID
        );

        res.send(result);
    } else if (req.query.status) {
        const taskStatus = req.query.status;

        const result = todo.filter(
            (item) => item.done == JSON.parse(taskStatus)
        );

        res.send(result);
    } else if (req.query.endId && req.query.startId) {
        console.log("Id range detected!!");
        const taskStartID = req.query.startId;
        const taskEndID = req.query.endId;

        const result = todo.filter(
            (item) => item.id >= taskStartID && item.id <= taskEndID
        );

        res.send(result);
    } else if (req.query.startId) {
        const taskID = req.query.startId;

        const result = todo.filter((item) => item.id >= taskID);

        res.send(result);
    } else {
        res.send(todo);
    }
});

router.post("/add", (req, res) => {
    const task = req.body;
    console.log(task);

    todo.push(task);

    res.status(201).send(todo);
});

router.delete("/delete/:index", (req, res) => {
    const index = req.params.index;

    if (index >= todo.length) {
        res.send("Invalid item position!");
    }

    // deletes item from todo array at specific index
    todo.splice(index, 1);

    res.send(todo);
});

export default router;
