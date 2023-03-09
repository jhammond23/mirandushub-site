import React, { useRef, useState } from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter'


const DisplayLoreMonster = ({monsters}) => {

  const paragraphs = monsters.tavernTales


  return (
    <div>
      <Typewriter  words={paragraphs} deleteCharsCount={0} typeSpeed={50} />
      <Cursor cursorColor='white' />
    </div>

  )
}

export default DisplayLoreMonster