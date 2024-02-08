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



module.exports=router