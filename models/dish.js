const mongoose = require('mongoose')

const DishSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        slug:{
            type:String,
            required:true
        },
        category:{
            type:mongoose.Schema.ObjectId,
            ref:"Category"
        },
        image:{
            type:String,
            default:null
        },
        rating:{
            type:Number,
        },
        price:{
            type:Number,
        },
        cooking_time:{
            type:Number,
            default:0
        },
        stock:{
            type:Boolean,
            default:true
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

const Dish = mongoose.model("Dish",DishSchema)

module.exports = Dish;