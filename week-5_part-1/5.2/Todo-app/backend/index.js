import express from 'express';
import { createTodo, updateTodo } from "./types.js"
import { todo } from './db.js'
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:5173'}));
app.use(express.json());

app.post('/todo', async (req,res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
        msg: "You sent the wrong input"
    })
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  })

  res.json({
    msg: "Todo Created" 
  })
})

app.get('/todos', async (req,res) => {
  const todos = await todo.find({});
  res.json({
    todos
  })
})

app.put('/completed', async (req,res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
        msg: "You sent the wrong input"
    })
    return;
  }
  await todo.update({
    _id: req.body.id
  },{
    completed: true
  })
  res.json({
    msg: "Todo marked as completed"
  })
})

app.listen(port) 