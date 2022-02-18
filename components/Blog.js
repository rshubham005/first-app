import Link from "next/link";
import blogstyle from '../styles/Blogs.module.css'
function Blog({blog}) {
  return (
  <div>
    <Link href={`/blogs/${blog._id}`}>
    <li className={blogstyle.listitem} key={blog._id}>
    <h3 className={blogstyle.title}>{blog.title}</h3>
    <p className={blogstyle.body}>{blog.snippet}</p>
    </li>
  </Link>
  </div>
  )
}

export default Blog;
