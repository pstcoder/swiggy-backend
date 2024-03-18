const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const { error } = require('console')
const CategoryRouter = require('./routers/category')
const DishRouter = require('./routers/dish')

const app = express()

app.use(cors())
app.use(express.json())
app.use("/category",CategoryRouter)
app.use("/dish",DishRouter)
app.use(express.static("public"))

mongoose.connect(
    "mongodb://localhost:27017",
    {
        dbName:"test3"
    }
)
.then(
    (success) => {
        console.log("db connected")
        app.listen(5000, () => { console.log("Server started") })
    }
)
.catch(
    (err) => {
        console.log(err)
    }
)