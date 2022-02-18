const mongoose = require('mongoose')

async function connectDb()
{
    try {
        await mongoose.connect('mongodb+srv://shubham:Shubham%401234@nextjsblog.v0fcy.mongodb.net/Blogs?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true})
    console.log('MongoDb Connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports= connectDb