const express=require('express')
const exphbs=require('express-handlebars') 
const Handlebars=require('handlebars')
const routes=require('./controllers/EmpController')
const {allowInsecurePrototypeAccess}=require('@handlebars/allow-prototype-access')

const app=express()

app.engine('handlebars',exphbs.engine({
    handlebars:allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine','handlebars');
// app.set("views","./views")
require('./model/db')
app.use(express.urlencoded({extended:true}))

app.use(routes)

const PORT=process.env.PORT || 3000
app.listen(PORT,()=>console.log(`Server running at ${PORT}`))