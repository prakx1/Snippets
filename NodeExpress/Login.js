var express=require('express');
var router=express.Router();
var bodyParser=require('body-parser');
var bcrypt=require('bcrypt')
var User=require('../models/users');
router.use(bodyParser.json())

router.get('/',(req,res,next)=>{
    res.render('login.ejs',{
        title:"Login"
    })
})
router.post('/',(req,res,next)=>{
    console.log(req.body)
    User.findOne({email:req.body.email})
        .then((user)=>{
            console.log(user)

            if (user==null){
                console.log("user Doesn't exixt")
                res.render('login',{
                    title:"login"
                })
                
            }
            else{
                bcrypt.compare(req.body.password, user.password,(error,same)=>{
                    if (same){
                        req.session.user='authenticated'
                        req.session.currentUser = user._id;
                        console.log('loggedin')
                        res.redirect('/admin')
 
                    
                    } 
                    else{
                        res.redirect('/login')
                        console.log("password wrong")
                    }
                })
            }
        })
        .catch((err)=>{next(err)})
})
module.exports=router;
