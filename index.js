const express =require('express');
const app = express();
const dotenv = require('dotenv');
//router
const authRoute = require('./routes/auth');




dotenv.config();
const mongoose = require('mongoose');

//connect to DB 
mongoose.connect('mongodb+srv://python4:python4.0@cluster0.bmer2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true,}, ()=>{

console.log('connect to DB');
});


//midedleware


app.use(express.json());



//route middlewares

app.use('/api/user', authRoute);




app.listen(3000,()=>console.log('server up running'));