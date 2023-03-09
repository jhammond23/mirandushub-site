import React from 'react'
import Tilt from 'react-parallax-tilt';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import { useState } from 'react';




const Deed = ({deed}) => {

  let slides = [
    {
      key : 'photo1',
      content: <div className='carousel-img-background'>
                  <img className='carousel-img main-img' src={deed.threeDImg} alt="1" />
                </div>,
    },
    {
      key : 'photo2',
      content : <div className='carousel-img-background'>
                  <img className='carousel-img main-img' src={deed.Img} alt="2" />
                </div>,

    },
    {
      key : 'photo3',
      content : <InnerImageZoom className='carousel-img' src={deed.flatImg}  zoomSrc={deed.flatImg} alt='3'/>

    }
  ]

  return (
    <div className='r-deedOuterCont'>
      <div className='r-deedInfoCont'>
        <section id={deed.name} key={deed.id}>
          <div className='r-deedNameBanner'>
            <div className='r-deedName'>{deed.name}</div>
            <div className='r-deedDescription'>{deed.description} The {deed.name} includes the plot information below, along with a {deed.houseSize} main house.</div>

          </div>
            <div className='r-deedInnerCont'>
              <div className='r-deedInfoCont'>
                  <div className='r-deedStats'><span>{deed.name} Stats:</span>
                    <ul><span>Building Plots:</span> 
                      <li><span>{deed.BP5x5}x</span> 5x5 building plots</li>
                      <li><span>{deed.BP10x10}x</span> 10x10 building plots</li>
                      <li><span>{deed.BP10x20}x</span> 10x20 building plots</li>
                      <li><span>{deed.BP20x20}x</span> 20x20 building plots</li>
                      <li><span>{deed.BP20x40}x</span> 20x40 building plots</li>
                    </ul>
                    <ul><span>Farming Plots:</span>
                      <li><span>{deed.FP5x5}x</span> 5x5 farming plots</li>
                    </ul>
                    <ul><span>Ranching Plots:</span>
                      <li><span>{deed.RP5x5}x</span> 5x5 ranching plots</li>
                    </ul>
                    <ul><span>Decoration Plots:</span>
                      <li><span>{deed.sDeco}x</span> small decorations</li>
                      <li><span>{deed.mDeco}x</span> medium decorations</li>
                      <li><span>{deed.lDeco}x</span> large decorations</li>
                    </ul>
                  </div>
              </div>
            </div>
          </section>
          <div className='carouselCont'>
            <InnerImageZoom className='carousel-img' src={deed.flatImg}  zoomScale={.7} zoomSrc={deed.flatImg} alt='1'/>
            <InnerImageZoom className='carousel-img' src={deed.Img}  zoomScale={.8} zoomSrc={deed.Img} alt='2'/>
            <InnerImageZoom className='carousel-img' src={deed.threeDImg}  zoomScale={1} zoomSrc={deed.threeDImg} alt='3'/>
            <p className='credMobile'>The above 3D rendering of each deed is the work of a talented community memeber, TheInkKnight.
          </p>
        </div>
        <p className='cred'>The above 3D rendering of each deed is the work of a talented community memeber, TheInkKnight.</p>

      </div>
    </div>
  )
}

export default Deed