const Admin =require('../models/Admin');
const express=require('express');
//console.log(express)
const router=express.Router();

router.get('/',async(req,res)=>{
    return res.json("Api Called")

})

router.post('/',async(req,res)=>{
    const reg=await new Admin(req.body)
    reg.save();

    return res.json("Admin Registred Successfully")
})
module.exports=router