import React from "react";
import {useState, useEffect} from 'react';
import '../../mirandushub/mirandushub.css'
import { useRef } from "react";
import { setProperty } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';


export default function Home () {
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
        <section className="home">
            <div id="menu">
                <div id="menu-items">
                    <Link to="/assets" class='menu-item one' onMouseEnter={() => setIndex(2)}>ASSETS</Link>
                    <Link to="/community" class="menu-item two" onMouseEnter={() => setIndex(3)}>COMMUNITY</Link>
                    <Link class="menu-item three" to="/monsters" onMouseEnter={() => setIndex(4)}>MONSTERS</Link>
                    <Link to="/about" class='menu-item four' onMouseEnter={() => setIndex(1)}>ABOUT</Link>
                </div>
                <div className="menu-background-pattern"></div>
                <div id="menu-background-image"></div>
            </div>
            <div className="orb"></div>
            <div className="orb2"></div>
            <div className="orb3"></div>
            <div className="orb4"></div>
            <div className="orb5"></div>
        </section>
    )
}

/*

            <div className="homeMirandusDescriptionContainer r-background">
                <h1 className="homeHeader">What is <span>Mirandus</span>?</h1>
                <div className="homeSlideCont">
                <div className={scroll ? 'leftBoxOn' : 'leftBoxOff'}>Are you ready to step into the world of Mirandus, the most exciting medieval fantasy MMORPG on the blockchain? In this game, you'll be able to engage in epic boss battles and earn valuable loot along the way, filling your REAL pockets with cash from some of the NFT items earned in-game.</div>
                    <div className="homeVidAboutMirandus">
                      <ReactPlayer
                        url="https://youtu.be/chbT1p99ziM"
                        muted={true}
                        autoPlay={true}
                        controls
                        />
                    </div>
                    <div className={scroll ? 'rightBoxOn' : 'rightBoxOff'}>As you explore the lands of Mirandus, you'll encounter a wide range of powerful bosses, each with their own unique abilities and challenges. From towering, giant trolls to cunning, sneaky goblins, these bosses will push you to your limits. But with skill and determination, you'll be able to overcome them and earn valuable rewards.</div>
                    <div className={scroll ? 'homeDescriptionBOn' : 'homeDescriptionBOff'}>
                    One of the most challenging boss fights in Mirandus will be against the fearsome, ancient Minotaur King. This mighty beast guards a hoard of treasure, and defeating it will require all of your wits and strength. With the right strategy and a powerful team of exemplars, you might just be able to claim his treasure as your own.
                    <br/><br/>
                    In addition to thrilling boss battles, Mirandus also offers a wide range of loot to be earned. From powerful weapons and armor to rare and valuable items, there's always something new to discover. And with the game's blockchain technology, you can be sure that your loot is safe and secure.
                    <br/><br/>
                    Best of all, all notable in-game items are hosted on the blockchain as NFTs. This allows for real freedom and true ownership of your Miranuds journey!
                    <br/><br/>
                    ~~~~~
                    </div>
                    <div className="mobileHomeAboutMirandus">
                    Are you ready to step into the world of Mirandus, the most exciting medieval fantasy MMORPG on the blockchain? In this game, you'll be able to engage in epic boss battles and earn valuable loot along the way, filling your REAL pockets with cash from some of the NFT items earned in-game.
                    <br /><br />
                    As you explore the lands of Mirandus, you'll encounter a wide range of powerful bosses, each with their own unique abilities and challenges. From towering, giant trolls to cunning, sneaky goblins, these bosses will push you to your limits. But with skill and determination, you'll be able to overcome them and earn valuable rewards.
                    <br /><br />
                    One of the most challenging boss fights in Mirandus will be against the fearsome, ancient Minotaur King. This mighty beast is guards a hoard of treasure, and defeating it will require all of your wits and strength. With the right strategy and a powerful team of exemplars, you might just be able to claim his treasure as your own.
                    <br/><br/>
                    In addition to thrilling boss battles, Mirandus also offers a wide range of loot to be earned. From powerful weapons and armor to rare and valuable items, there's always something new to discover. And with the game's blockchain technology, you can be sure that your loot is safe and secure.
                    <br/><br/>
                    Best of all, all notable in-game items are hosted on the blockchain as NFTs. This allows for real freedom and true ownership of your Miranuds journey!
                    <br/><br/>
                    ~~~~~
                    </div>
                </div>
              </div>

*/