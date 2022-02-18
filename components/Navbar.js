import Link from 'next/link'
import nav from '../styles/Nav.module.css'

function Navbar() {
  return (
  <nav className={nav.navbar}>
      <ul className={nav.menu}>
          <li className={nav.menuitem}><Link href='/'>Home</Link></li>
          <li className={nav.menuitem}><Link href='/about'>About</Link></li>
          <li className={nav.menuitem}><Link href='/blogs'>Blogs</Link></li>
          <li className={nav.menuitem}><Link href='/addblog'>Add new blog</Link></li>
      </ul>
  </nav>
  )
  ;
}

export default Navbar;
