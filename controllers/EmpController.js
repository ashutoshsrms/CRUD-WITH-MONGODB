const express=require('express')
const Employee=require('../model/employee.model')
const router=express.Router()

router.get('/',(req,res) =>{
    res.render('employee/addorEdit',{
        viewTitle:"Add Employee"
    })
})

router.post('/employee',(req,res)=>{
    if(req.body._id=='')
        insertEmp(req,res)
    else
        updateEmp(req,res)
})

router.get('/employee/list',(req,res)=>{
    Employee.find((err,result)=>{
        if(!err){
            console.log("NVFB")
            res.render('employee/list',{
            list:result
            });
        }else{
            console.log("Error in select",err)
        }
    });
     
})

//edit employee => using findById method

router.get('/employee/:id',(req,res)=>{
    Employee.findById(req.params.id,(err,result)=>{
        res.render('employee/addorEdit',{
            viewTitle:'Update Employee',
            employee:result
        })
    })
})

// delete record

router.get('/employee/delete/:id',(req,res)=>{
    Employee.findByIdAndRemove(req.params.id,(err,record)=>{
        if(!err)
            res.redirect('/employee/list');
        else
            console.log("error occur in deleting")
    })
})


function insertEmp(req,res){
    let employee=new Employee();
    employee.fullName=req.body.fullName;
    employee.email=req.body.email;
    employee.mobile=req.body.mobile;
    employee.city=req.body.city;
    employee.save((err,result)=>{
        if(!err)
            res.redirect('employee/list');
        else
            console.log("error occur in insertion");
    })
}

//update databse
function updateEmp(req,res){
    Employee.findOneAndUpdate({_id:req.body._id},req.body,{new:true},(err,result)=>{
    if(!err)
        res.redirect('employee/list')
    else
        console.log("error occur in updating database")
    })
}

module.exports=router