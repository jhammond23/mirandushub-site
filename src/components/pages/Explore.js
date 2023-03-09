import React from "react";
import {useState} from 'react';
import '../../mirandushub/mirandushub.css'
import { useRef } from "react";
import { setProperty } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';


export default function Explore () {
  const [index, setIndex] = useState(null);

      const menu = document.getElementById("menu");

      Array.from(document.getElementsByClassName("menu-item"))
        .forEach((item, index) => {
          item.onmouseover = () => {
            menu.dataset.activeIndex = index;
          }
        });

    return (
        <section className="fullScreen">
            <div id="menu">
                <div id="menu-items">
                    <Link to="/buildings" class='menu-item one' onMouseEnter={() => setIndex(2)}>BUILDINGS</Link>
                    <Link to="/deeds" class="menu-item two" onMouseEnter={() => setIndex(3)}>DEEDS</Link>
                    <Link class="menu-item three" to="/exemplars" onMouseEnter={() => setIndex(4)}>EXEMPLARS</Link>
                    <Link to="/others" class='menu-item four' onMouseEnter={() => setIndex(1)}>OTHERS</Link>
                </div>
                <div id="menu-background-patternExplore"></div>
                <div id="menu-background-imageExplore"></div>
            </div>
        </section>
    )
}
