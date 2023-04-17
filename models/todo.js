const mongoose=require('mongoose');
const TodoSchema=new mongoose.Schema({
    name:String,
    isCompleted:String,
    priority:String
})
module.exports=mongoose.model('Todos',TodoSchema);