 import {FaSignInAlt,FaSignOut,FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <header className='header'>
     <div className='logo'>
      <Link to='/'>GoalSetter</Link>
     </div>
     <ul>
      <li>
       <Link to='/login'>
        <FaSignInAlt/>Login
       </Link>
      </li>
      <li>
       <Link to='/register'>
        <FaUser/>Resgiter
       </Link>
      </li>
     </ul>
    </header>
  )
}

export default Header