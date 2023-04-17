const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const {getAllTodo,createTodo,getTodoById,deleteTodoById,UpdateTodoById}=require('./controllers/todo');
const connectDB=require('./config/db');

connectDB();
const app=new express();
app.use(bodyParser.json());
app.use(cors({origin:'*'}));
app.get('/api/v2/health',(req,res)=>{
    res.status(200).send("health check");
});
app.get('/api/v2/todo',getAllTodo);
app.get('/api/v2/todo/:id',getTodoById);
app.post('/api/v2/todo',createTodo);
app.delete('/api/v2/todo/:id',deleteTodoById);
app.put('/api/v2/todo/:id',UpdateTodoById);
app.listen(3001,()=>{
    console.log("server is running");
})