import Blog from '../components/Blog';
import blogstyle from '../styles/Blogs.module.css'
function blogs({data}) {
  return (
      <div className={blogstyle.container}>
      <h2 className={blogstyle.head}>All Blogs</h2>
      <ul className={blogstyle.list}>
          {
              data.map((blog)=>
              {
                  return (
                        <Blog blog={blog} />
                  )
              })
          }
      </ul>
      </div>
  )
}

export default blogs;
export async function getServerSideProps(context)
{
    const res = await fetch('http://localhost:3000/api/blog')
    const data = await res.json()
    // console.log(data)
    return {
        props:
        {
            data
        }
    }
}