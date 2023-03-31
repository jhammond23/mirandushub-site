import './mirandushub/mirandushub.css';
import TopNavBar from './components/TopNavBar';
import { BubblesIn, BubblesOut, Humans, humans } from './components/Humans';
import { Dwarves, dwarves } from './components/Dwarves';
import DisplayBubbles from './components/DisplayBubbles';
import DisplayRace from './components/DisplayRace';
import Navbar from './components/ReactNavBar';
import DisplayBuildings from './components/pages/DisplayBuildings';
import DisplayDeeds from './components/pages/DisplayDeeds';
import { Route, Routes, useLocation, useNavigate  } from 'react-router-dom'
import Home from './components/pages/Home';
import DropdownNavbar from './components/DropdownNavbar';
import Dropdown from './components/Dropdown';
import { useEffect, useState } from 'react';
import About from './components/pages/About';
import Others from './components/pages/Others';
import Guilds from './components/pages/Guilds';
import Community from './components/pages/Community';
import Creators from './components/pages/Creators';
import Displaymonsters from './components/DisplayMonsters';
import Footer from './components/Footer';
import TestFooter from './components/TestFooter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GuildApp from './components/pages/GuildApp';
import Assets from './components/pages/Assets';

function App() {

  const [showButton, setShowButton] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted) {
      if (location.pathname === '/') {
        toast.info(`03/21/2023 UPDATE: Added a page for guild recruitment!`, {
          position: toast.POSITION.BOTTOM_RIGHT,
          style : {
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: '4px',
          },
          onClick: () => {
            navigate('/guilds');
          }
        });
      } else if (location.pathname === '/exemplars') {
        toast.info('Choose a race, scroll to an exemplar, unmute, then play the tavern tales!', {
          position: toast.POSITION.BOTTOM_CENTER,
          style : {
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: '4px',
            marginBottom: '10vh',
          },
        });
      }
    }
  }, [location.pathname, navigate, hasMounted]);

  return (
    <div id='parent'>
      <ToastContainer />
      <DropdownNavbar />
      <div className='down80'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route className='r-background' path='/exemplars' element={<DisplayRace />} />
          <Route path='/deeds' element={<DisplayDeeds />} />
          <Route path='/buildings' element={<DisplayBuildings />} />
          <Route path='/about' element={<About />} />
          <Route path='/assets' element={<Assets /> } />
          <Route path='/monsters' element={<Displaymonsters /> } />
          <Route path='/others' element={<Others /> } />
          <Route path='/community' element={<Guilds /> } />
          <Route path='/guilds' element={<Guilds /> } />
          <Route path='/creators' element={<Creators /> } />
          <Route path='/guild-application' element={<GuildApp /> } />
        </Routes>
      </div>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </div>
  );
}

export default App;
