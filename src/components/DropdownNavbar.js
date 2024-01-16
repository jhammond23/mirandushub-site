import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import { useLocation } from 'react-router-dom';
import Dropdown2 from './Dropdown2';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [navItemAnimation, setNavItemAnimation] = useState('');
  const location = useLocation();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [letterRotations, setLetterRotations] = useState({});

  const handleResize = () => {
    if (window.innerWidth >= 1200) {
      setNavItemAnimation('nav-item-animation');
    } else {
      setNavItemAnimation('');
    }
  };

  // random letter rotation
  function getRandomRotation(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function handleNavLinkHover(e, navLinkId) {
    if (navLinkId !== 'logo' && e.target !== e.currentTarget) return;
  
    const linkText = e.target.textContent;
    const rotations = {};
  
    for (let i = 0; i < linkText.length; i++) {
      rotations[i] = getRandomRotation(-15, 15);
    }
  
    setLetterRotations({ ...letterRotations, [navLinkId]: rotations });
  }

  function handleNavLinkMouseLeave(navLinkId, clearAll = false) {
    setLetterRotations((prevState) => {
      const newState = { ...prevState };
  
      if (clearAll) {
        for (let i = 0; i < 'MIRANDUS HUB'.length; i++) {
          newState[`logo${i}`] = {};
        }
      } else {
        newState[navLinkId] = {};
      }
  
      return newState;
    });
  }

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <>
      <nav className='navbar'>
      <div className='logoContainer'>
          <Link
            to='/'
            className='navbar-logo'
            onClick={closeMobileMenu}
            onMouseLeave={() => handleNavLinkMouseLeave(null, true)}
          >
            {Array.from('MIRANDUS HUB').map((letter, index) => {
              if (letter === ' ') {
                return ' ';
              }

              const navLinkId = `logo${index}`;

              return (
                <span
                  key={index}
                  className="rotated-letter logoLetter"
                  style={{
                    transform: `rotate(${(letterRotations[navLinkId] && letterRotations[navLinkId][0]) || 0}deg)`
                  }}
                  onMouseEnter={(e) => handleNavLinkHover(e, navLinkId)}
                  onMouseLeave={() => handleNavLinkMouseLeave(navLinkId)}
                >
                  {letter}
                </span>
              );
            })}
          </Link>
        </div>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className={`nav-item ${navItemAnimation}`}>
            <Link
              to='/'
              id='nav-links'
              onMouseEnter={(e) => handleNavLinkHover(e, 'home')}
              onMouseLeave={() => handleNavLinkMouseLeave('home')}
              onClick={closeMobileMenu}
            >
            {Array.from('Home').map((letter, index) => (
              <span
                key={index}
                className="rotated-letter"
                style={{
                  transform: `rotate(${(letterRotations['home'] && letterRotations['home'][index]) || 0}deg)`
                }}
              >
                {letter}
              </span>
            ))}
          </Link>
          </li>


          <li
            className={`nav-item ${navItemAnimation}`}
            onMouseEnter={() => {
              if (window.innerWidth < 1200) {
                setDropdown(false);
              } else {
                setDropdown(true);
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth < 1200) {
                setDropdown(false);
              } else {
                setDropdown(false);
              }
            }}
          >
            <Link
              to='/assets'
              id='nav-links'
              onMouseEnter={(e) => handleNavLinkHover(e, 'assets')}
              onMouseLeave={() => handleNavLinkMouseLeave('assets')}
              onClick={closeMobileMenu}
            >
              {Array.from('assets').map((letter, index) => (
                <span
                  key={index}
                  className="rotated-letter"
                  style={{
                    transform: `rotate(${(letterRotations['assets'] && letterRotations['assets'][index]) || 0}deg)`
                  }}
                >
                  {letter}
                </span>
              ))}
              <i className='fas fa-caret-down' />
            </Link>
            {dropdown && (
              <Dropdown
                handleNavLinkHover={(e) => handleNavLinkHover(e, 'assets')}
                handleNavLinkMouseLeave={() => handleNavLinkMouseLeave('assets')}
              />
            )}
          </li>

          <li className={`nav-item ${navItemAnimation}`}>
            <Link
              to='/monsters'
              id='nav-links'
              onMouseEnter={(e) => handleNavLinkHover(e, 'monsters')}
              onMouseLeave={() => handleNavLinkMouseLeave('monsters')}
              onClick={closeMobileMenu}
            >
              {Array.from('monsters').map((letter, index) => (
                <span
                  key={index}
                  className="rotated-letter"
                  style={{
                    transform: `rotate(${(letterRotations['monsters'] && letterRotations['monsters'][index]) || 0}deg)`
                  }}
                >
                  {letter}
                </span>
              ))}
            </Link>
          </li>
          <li className={`nav-item ${navItemAnimation}`}>
            <Link
              to='/community'
              id='nav-links'
              onMouseEnter={(e) => handleNavLinkHover(e, 'community')}
              onMouseLeave={() => handleNavLinkMouseLeave('community')}
              onClick={closeMobileMenu}
            >
            {Array.from('Community').map((letter, index) => (
              <span
                key={index}
                className="rotated-letter"
                style={{
                  transform: `rotate(${(letterRotations['community'] && letterRotations['community'][index]) || 0}deg)`
                }}
              >
                {letter}
              </span>
            ))}
            </Link>
            {dropdown2 && (
              <Dropdown2
                handleNavLinkHover={(e) => handleNavLinkHover(e, 'community')}
                handleNavLinkMouseLeave={() => handleNavLinkMouseLeave('community')}
              />
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;