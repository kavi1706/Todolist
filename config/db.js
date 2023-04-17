const mongoose=require('mongoose');
const connectDB=async()=>{
    try{
        const connection=await mongoose.connect('mongodb://localhost:27017/todo');
        console.log('db is connected');
    }
    catch(error){
       console.log("error");
    }
}
module.exports=connectDB;