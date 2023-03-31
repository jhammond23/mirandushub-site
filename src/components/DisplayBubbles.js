import { useState, useEffect, useRef } from 'react';
import { BubblesIn, BubblesOut } from './Bubbles';

function fitTextToBubble(textElement, bubbleElement) {
  const maxWidth = bubbleElement.clientWidth * 0.9; // 90% of the bubble width
  let fontSize = parseInt(window.getComputedStyle(textElement).getPropertyValue("font-size"));
  let textWidth;

  do {
    fontSize -= 1;
    textElement.style.fontSize = fontSize + "px";
    textWidth = textElement.clientWidth;
  } while (textWidth > maxWidth);
}

export default function DisplayBubbles({race, myRace, deed, myDeed, Building, myBuilding, monsters, myMonster}) {
  const [isShown, setIsShown] = useState(false);
  const textRef = useRef(null);
  const bubbleRef = useRef(null);
  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  useEffect(() => {
    if (textRef.current && bubbleRef.current) {
      fitTextToBubble(textRef.current, bubbleRef.current);
    }
  }, [myRace, myDeed, myBuilding, myMonster]);

  return (
    <div>
        <button ref={bubbleRef} className={isShown ? 'bubbleDisplayerOn' : 'bubbleDisplayerOff'} onClick={handleClick}>
          <span ref={textRef}>{myRace}{myDeed}{myBuilding}{myMonster}</span>
        </button>
    
        {/* 👇️ show elements on click */}

        <div
          style={{
            left: "0",
            transition: "all 1s",
            visibility: !isShown ? "hidden" : "visible",
          }}
        >
        { !isShown && <BubblesOut race={race} deed={deed} Building={Building} monsters={monsters}/> }

        </div>
        { isShown && <BubblesIn race={race} deed={deed} Building={Building} monsters={monsters}/>}

        
    </div>
  );
}
