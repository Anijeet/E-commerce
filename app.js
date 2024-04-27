const express = require('express')
const app = express();
const path = require('path')
const userModel = require('./models/user')

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,  'public')));


app.get('/',(req,res)=>{
    res.render("index");
})
app.get('/register',async(req,res)=>{
    let users = await userModel.find();
    res.render("register", {users});
})
app.get('/service',async(req,res)=>{
    let users = await userModel.find();
    res.render("service", {users});
})
app.get('/about',async(req,res)=>{
    let users = await userModel.find();
    res.render("about", {users});
})
app.get('/casual',async(req,res)=>{
    let users = await userModel.find();
    res.render("casual", {users});
})
app.get('/contact',async(req,res)=>{
    let users = await userModel.find();
    res.render("contact", {users});
})
app.get('/DHH',async(req,res)=>{
    let users = await userModel.find();
    res.render("DHH", {users});
})
app.get('/fullseleve',async(req,res)=>{
    let users = await userModel.find();
    res.render("fullseleve", {users});
})
app.get('/jeans',async(req,res)=>{
    let users = await userModel.find();
    res.render("jeans", {users});
})
app.get('/marvel',async(req,res)=>{
    let users = await userModel.find();
    res.render("marvel", {users});
})
app.get('/oversizedtshirts',async(req,res)=>{
    let users = await userModel.find();
    res.render("oversizedtshirts", {users});
})
app.get('/polos',async(req,res)=>{
    let users = await userModel.find();
    res.render("polos", {users});
})
app.get('/shirts',async(req,res)=>{
    let users = await userModel.find();
    res.render("shirts", {users});
})
app.get('/sneakers',async(req,res)=>{
    let users = await userModel.find();
    res.render("sneakers", {users});
})
app.get('/sweatshirt',async(req,res)=>{
    let users = await userModel.find();
    res.render("sweatshirt", {users});
})
app.get('/read',async(req,res)=>{
    let users = await userModel.find();
    res.render("read", {users});
})
app.get('/edit/:userid',async(req,res)=>{
    let user = await userModel.findOne({_id: req.params.userid});
    res.render("edit", {user})
})
app.post('/update/:userid',async(req,res)=>{
    let {name,password,email} = req.body;
    let user = await userModel.findOneAndUpdate({_id: req.params.userid},{name,email,password},{new:true});
    res.redirect("/read");
})
app.get('/delete/:id',async(req,res)=>{
    let users = await userModel.findOneAndDelete({_id: req.params.id });
    res.redirect("/read");
})
app.post('/create', async(req,res)=>{
    let {name,email,password} = req.body;

    let createdUser= await userModel.create({
        name : name ,
        email :  email ,
        password :  password
    })
    res.redirect("/read")
})

app.listen(3000)