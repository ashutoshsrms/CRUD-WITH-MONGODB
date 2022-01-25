var mongoose=require('mongoose')

let employeeScheme=new mongoose.Schema({
    fullName:{
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    city:{
        type:String
    }
})
let Employee=mongoose.model('Emp',employeeScheme)
module.exports=Employee