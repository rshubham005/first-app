const nc = require('next-connect')
const {blogModel} = require('../../../model/blogModel')
const handler = nc();
const connectDb = require('../../../utils/ConnectDb')
connectDb()
 
//  response to GET
handler.get( async function (req, res) {
   const blog = await blogModel.find({})
   await res.send(blog)
});
 
//  response to POST
handler.post(async function (req, res) {
    const {title,body,snippet} = req.body
    const newBlog = blogModel({title,body,snippet})
    try {
        await newBlog.save();
        res.send("New blog added successfully")
    } catch (error) {
        res.send(error)
    }
handler.put(async function(req,res){
    try {
        const selectedblog = await blogModel.find({_id:"620cd278ffa646f574eea2d8"})
       await res.send(selectedblog)
    } catch (err) {
        res.send(err)
    }
})
});
 
//  export using handler.export()
module.exports = handler