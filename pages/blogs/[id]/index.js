import Link from 'next/link';
import blogdesign from '../../../styles/Blog.module.css'

function index({blog}) {
 
  return (
    <>
      <div className={blogdesign.blog}>
      <h3 className={blogdesign.head}>{blog[0].title}</h3>
      <p className={blogdesign.para}>{blog[0].snippet}</p>
      <p className={blogdesign.para}>{blog[0].body}</p>
      <Link href={`../../updateblog/${blog[0]._id}`}><button className={blogdesign.delete} >Update Blog</button></Link>
      </div>
    </>
  )
}

export default index;
export async function getServerSideProps(context)
{
  const res = await fetch(`http://localhost:3000/api/blog?_id=${context.params._id}`)
    const blog = await res.json()
    // console.log(blog)
    return {
        props:
        {
            blog
        }
    }

}