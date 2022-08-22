const express = require('express')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 5000

const uri = process.env.MONGO_URI
mongoose.connect(uri).then(() => {
    console.log('Database is now connected')
}).catch((err) => {
    console.log(err)
})

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Hello from FCC</h1>')
})

const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

app.listen(port, () => console.log(`Server listning on port ${port}`))