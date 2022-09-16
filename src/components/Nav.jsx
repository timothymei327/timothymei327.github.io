import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <Link to='/'>
        <img className='nav-logo' src='https://i.imgur.com/jRCXJYQ.png' alt='profile-logo' />
      </Link>
      <div className='links'>
        <Link to='/projects'>Projects</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </header>
  )
}

export default Nav