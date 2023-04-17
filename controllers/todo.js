const Todo=require('../models/todo');
exports.getAllTodo=async(req,res)=>{
    try{
        const list=await Todo.find();
        res.status(200).json({
            data:list,
            length:list.length
        })
    }
    catch(error){
console.log(error)
    }
}

exports.createTodo= async(req,res)=>{
    try{
        const newTodo=req.body;
        await Todo.create(newTodo);
        res.status(201).json({
            msg:'created'
        })
    }
    catch(error){
return res.status(500).json({
    msg:'server error'
})
    }
}
exports.getTodoById=async(req,res)=>{
    try
    {
        const list=await Todo.findById(req.params.id);
        res.status(200).json({
            data:list
        });
    }
    catch(err)
    {
        return res.status(500).json({
            msg:'server error'
        })
    }
}
exports.deleteTodoById=async (req,res)=>{
    try{
        const todo=await Todo.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            msg:'deleted'
        })
    }
    catch(err)
    {
        return res.status(500).json({
            msg:'server error'
        })
    }
}
exports.UpdateTodoById=async (req,res)=>{
    try{
        const todo=await Todo.findByIdAndUpdate(req.params.id,req.body);
        return res.status(200).json({
    msg:'updated'
        })
    }
    catch(err)
    {
        return res.status(500).json({
            msg:'server error'
        })
    }
}