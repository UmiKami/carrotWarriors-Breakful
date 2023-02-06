import express from "express"
import todosRouter from "./routes/todo.js"
import greetingsRouter from "./routes/greeetings.js"

const app = express();
const PORT = 3001;

// app.use allows us to use a middleware | allows server to interpret json
app.use(express.json());
// for Form URL-encoded 
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    console.log(`${req.method}: ${req.route}`);
    next();
});

app.use("/api/todos", todosRouter)
app.use("/api/greetings", greetingsRouter)

// tells the express app on which port to run
app.listen(PORT, ()=> console.log(`Express server running on port ${PORT}!`));

app.get("/", (req, res)=>{
    res.send("<h1><span style='color: red;'>Congrats!</span> You have connected with this wonderful API!</h1>");
})


