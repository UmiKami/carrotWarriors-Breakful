import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) =>{
    console.log("Processing request...");
    setTimeout(()=>{
        next();
    }, 1000)
},(req, res)=>{
    const greetings = {
        1: "hi",
        2: "hello_2",
        3: "salutations"
    }

    res.send(greetings);
})


export default router;