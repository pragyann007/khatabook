const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.set("view-engine", "ejs");

app.get('/',(req,res)=>{
    try{
        res.render('index');
    }
    catch(err){
        res.send("Something went wrong",err.message)
    }
})

app.listen('3000',()=>{
    console.log("Server is running on port 3000")
})