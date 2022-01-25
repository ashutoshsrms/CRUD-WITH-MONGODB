var mongoose=require('mongoose');

mongoose.connect("mongodb+srv://ashutosh:1234567890@cluster0.0bxb4.mongodb.net/Employee?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err){
        //console.log("bxcv"); 
        console.log(" mongodb Connected ")  
    }else
        console.log("Error "+err) 
})   // databse url , object ,callback function