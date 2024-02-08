const express = require("express")
const  patientModel = require("../models/patientModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data = req.body
    let patientObj= new patientModel(data)
    let result= await patientObj.save()
    res.json({
        "status":"success"
    })
})

router.get("/view",async(req,res)=>{
    let data = await patientModel.find()
    res.json(data)
})


module.exports=router