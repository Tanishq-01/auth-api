const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const authRouter = require('./routers/authRouter')
const postsRouter = require('./routers/postsRouter')
require('dotenv').config();

const app = express();
app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Database Connected")
}).catch(err=>{
    console.log(err)
})
app.use('/api/auth',authRouter)
app.use('/api/posts',postsRouter)
app.post('/',(req,res)=>{
    res.json({message : "Hello from the server"});
})

app.listen(process.env.PORT, () => {
    console.log('listening.....');
  })