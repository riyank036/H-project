import mongoose, { trusted } from 'mongoose';

mongoose.connect('mongodb+srv://riyankpatel036:Riyankpatel12345@cluster0.fvzbp.mongodb.net/Todo')
.then(()=> console.log("Connected!"));

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

export { todo }