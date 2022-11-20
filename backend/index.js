import express from 'express'
import mongoose from "mongoose"
import dotenv from 'dotenv'
import cors from 'cors'
import router from './router/router.js'

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

app.use('/posts', router)

app.listen(process.env.port, () => {
    mongoose.connect(process.env.mongodb_uri, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then(console.log(`${process.env.port} ni tinglayapman`))
    .catch( err => console.log(err))
})
