import React, { useRef, useState } from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter'


const DisplayLore = ({exemplar, monsters}) => {

  const paragraphs = exemplar.tavernTales


  return (
    <div>
      <Typewriter  words={paragraphs} deleteCharsCount={0} typeSpeed={45} />
      <Cursor cursorColor='white' />
    </div>

  )
}

export default DisplayLore