import newblog from '../styles/NewBlog.module.css'
import {useState} from 'react'
import { Router } from 'next/router'
import axios from 'axios'
function addblog()
{
const [formdata,setformdata]= useState(
  {
    title:"",
    snippet:"",
    body:""
  }
)
const handleinput=(e)=>
{
 setformdata({...formdata,[e.target.name]:e.target.value})
}

const handlesubmit= ()=>
{
  var config = {
    method: 'post',
    url: 'http://localhost:3000/api/blog',
    headers: { },
    data : formdata
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    alert('New blog added')
  })
  .catch(function (error) {
    console.log(error);
    alert(error)
  });
  

}

  return (
    <div className={newblog.main}>
        <div className={newblog.newblogform}>
            <label className={newblog.labels} htmlFor="title">Blog Title</label>
            <input className={newblog.inputbox} onChange={handleinput} name="title" value={formdata.title} id="title" type='text' />
            <label className={newblog.labels} htmlFor="snippet">Blog Snippet</label>
            <input className={newblog.inputbox} onChange={handleinput} name="snippet" value={formdata.snippet} id="snippet" type='text' />
            <label className={newblog.labels} htmlFor="body">Blog Body</label>
            <input className={newblog.inputbox} onChange={handleinput} name="body" value={formdata.body} id="body" type='text' />
            <button className={newblog.submitbutton} onClick={handlesubmit} type="submit">Add new Blog</button>
        </div>
    </div>
  )
}

export default addblog