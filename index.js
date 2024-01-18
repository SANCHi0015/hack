const path =require('path')
const port = 8080;
const express = require('express')
app = express();

app.use(express.urlencoded({extended : true }));

app.set('views engine' , 'ejs');
app.set("views" , path.join(__dirname , "views"));

app.use(express.static(path.join(__dirname , "public")));

let  posts = [
    {
        username : "savya",
        password : "hi i am web developer"
    },


];

app.get("/" , (req,res) => {
    res.render('login.ejs');
})

app.get('/posts' , (req,res) => {
    res.render('index.ejs');
})

app.post('/posts' , (req,res) => {
    let {username , password} = req.body;
    res.redirect('/posts/geotagging')
})

app.get('/posts/geotagging' , (req,res) => {
    res.render('index.ejs');
})

app.listen(port , () => {
    console.log(`listening to port ${port}`);
})