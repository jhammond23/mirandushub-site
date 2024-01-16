import React from "react";
import {useState, useEffect} from 'react';
import '../../mirandushub/mirandushub.css'
import { useRef } from "react";
import { setProperty } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';


export default function Assets () {
  const [index, setIndex] = useState(null);
  const [scroll, setScroll] = useState(false);
  
  const menu = document.getElementById("menu");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 400);
    });
  }, []);

      Array.from(document.getElementsByClassName("menu-item"))
        .forEach((item, index) => {
          item.onmouseover = () => {
            menu.dataset.activeIndex = index;
          }
        });

    return (
        <main>
          <div id="menu">
              <ul id="menu-items"  style={{listStyleType: 'none'}}>
                  <li><Link to="/buildings" class='menu-item one' onMouseEnter={() => setIndex(1)}>BUILDINGS</Link></li>
                  <li><Link to="/deeds" class="menu-item two" onMouseEnter={() => setIndex(2)}>DEEDS</Link></li>
                  <li><Link class="menu-item three" to="/exemplars" onMouseEnter={() => setIndex(3)}>EXEMPLARS</Link></li>
                  <li><Link to="/others" class='menu-item four' onMouseEnter={() => setIndex(4)}>OTHERS</Link></li>
              </ul>
              <div className="menu-background-pattern"></div>
              <div id="menu-background-imageAssets"></div>
            </div>
        </main>
    )
}
