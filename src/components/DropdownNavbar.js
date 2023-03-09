import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import { useLocation } from 'react-router-dom';
import Dropdown2 from './Dropdown2';


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);


  const location = useLocation();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <nav className='navbar'>
        <div className='logoContainer'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            MIRANDUS HUB
          </Link>
        </div>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>


          <li className='nav-item'>
            <Link to='/' id='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>


          <li
            className='nav-item' 
            onMouseEnter={() => {
                if (window.innerWidth < 1200) {
                  setDropdown(false);
                } else {
                  setDropdown(true);
                }
              }
            } 
            onMouseLeave={ () => {
              if (window.innerWidth < 1200) {
                setDropdown(false);
              } else {
                setDropdown(false);
              }
            }
          }          >
            <Link
              to='/explore'
              id='nav-links'
              onClick={closeMobileMenu}
            >
              Explore<i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className='nav-item'>
            <Link
              to='/monsters'
              id='nav-links'
              onClick={closeMobileMenu}
            >
              Monsters
            </Link>
          </li>
          <li
            className='nav-item' 
            onMouseEnter={() => {
                if (window.innerWidth < 1200) {
                  setDropdown2(false);
                } else {
                  setDropdown2(true);
                }
              }
            } 
            onMouseLeave={ () => {
              if (window.innerWidth < 1200) {
                setDropdown2(false);
              } else {
                setDropdown2(false);
              }
            }
          }
          >
            <Link
              to='/community'
              id='nav-links'
              onClick={closeMobileMenu}
            >
              Community <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;