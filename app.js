const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const  patientRouter=require("./contollers/patientRouter")

//alias
const app = express()

//middleware
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://jobydb:joby123@cluster0.czhpkmp.mongodb.net/patientDB?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

//routing
app.use("/api/patient",patientRouter)


app.listen(3001,()=>{
    console.log("server running")
})