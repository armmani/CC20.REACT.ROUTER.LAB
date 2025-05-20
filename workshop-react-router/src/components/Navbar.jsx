import { NavLink } from 'react-router'

export default function Navbar() {
  const styles = {
    liLink: "hover:text-[#826047] active:font-[200]"
  }

  return (
    <nav className='mb-10'>
      <ul className='flex justify-center gap-2 font-light text-black pb-8 bg-gray-300'>
        <li className={styles.liLink}><NavLink to="/">Home</NavLink> / </li>
        <li className={styles.liLink}><NavLink to="/lifestyle">LIFESTYLE</NavLink> / </li>
        <li className={styles.liLink}><NavLink to="/journey">JOURNEY</NavLink> / </li>
        <li className={styles.liLink}><NavLink to="/inspiration">INSPIRATION</NavLink> / </li>
        <li className={styles.liLink}><NavLink to="/about">ABOUT</NavLink> / </li>
        <li className={styles.liLink}><NavLink to="/contact">CONTACT</NavLink></li>
      </ul>
    </nav>
  )
}