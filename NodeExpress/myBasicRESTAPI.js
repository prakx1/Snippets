var express =require('express');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var router =express.Router();
var path =require('path');
var Blog = require('../models/blog');
const { findById } = require('../models/blog');
router.use(bodyParser.json())

router.route('')
.delete((req,res,next)=>{
    Blog.findByIdAndRemove(req.params.id)
    //console.log(req.params.id)
    .then((blog)=>{
        console.log(blog)
        res.statusCode=200;
        res.setHeader('content-Type','application/json');
        res.json(blog);
       //
    })
    .catch((err)=>
    
    {console.log(err)});
})
// .delete((req,res,next)=>{
//     Blog.findByIdAndRemove(req.params.id)
//     //console.log(req.params.id)
//     .then((blog)=>{
//         console.log(blog)
//         res.statusCode=200;
//         res.setHeader('content-Type','application/json');
//         res.json(blog);
//        //
//     })
//     .catch((err)=>
    
//     {console.log(err)});
// })
// .post((req,res,next)=>{
//     Blog.findOneAndUpdate(req.params.id,{author:"PrakashSingh"})
    
//     .then((blog)=>{
//         blog.save()
//         res.statusCode=200;
//         res.setHeader('content-type','application/json')
//         res.json(blog)
//     })
// })
    


module.exports = router;
