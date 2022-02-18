import homestyle from '../styles/Home.module.css'
export default function Home() {
  return (
    <>
    <div className={homestyle.banner}>
      <h1 className={homestyle.head}>NextJs <span className={homestyle.headspan}>First App</span></h1>
      <p className={homestyle.para1}>Now you will be reading articles about tomorrow</p>
      <p className={homestyle.para2}>Latest tech innovation blogs</p>
    </div>
      <hr />
    </>
  )
}
