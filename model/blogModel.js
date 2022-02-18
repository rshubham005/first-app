const mongoose = require('mongoose')
const connectDb = require('../utils/ConnectDb')
connectDb()

const blogSchema= mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        body:{
            type:String,
            required:true
        },
        snippet:{
            type:String,
            required:true
        }
    },
    {timestamps:true}
)

export const blogModel = mongoose.models.Blog || mongoose.model("Blog",blogSchema)