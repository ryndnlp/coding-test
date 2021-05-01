import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {


  return(
    <nav className="navbar">
      <ul className="nav__items">
        <li className="nav__item">
          <NavLink
            exact
            to='/'
            className='nav__link'
          >
            <div className='nav__text'>
              <span className="nav__text--bold">GitHub </span>
              Jobs
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;