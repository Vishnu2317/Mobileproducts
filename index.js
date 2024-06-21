const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()


const mobilerouter = require("./src/router")
const databaseConnect = require("./src/db")

const app2 = express()

app2.use(express.json())
app2.use(cors())
app2.use('/',mobilerouter)

databaseConnect()

app2.get('/',(req,res)=>{
    res.send("Hello Mobile app")
})

const port = process.env.PORT
app2.listen(port,()=>{
    console.log(`Server running : http://localhost:${port}`);
})