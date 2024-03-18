const mongoose = require('mongoose')


const CategorySchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        slug:{
            type:String,
            required:true
        },
        status:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true
    }
)
const Category = mongoose.model("Category",CategorySchema)

module.exports = Category;