import React from 'react'
import Tilt from 'react-parallax-tilt';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook


const Deed = ({deed}) => {
  const navigate = useNavigate();  // Initialize the navigate function

  const goToInteractivePage = () => {
    navigate(`/deeds/${deed.name}/interactive`, { state: { flatImg: deed.flatImg } });
};

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
                  <div className='r-deedStats'>
                    <span>{deed.name} Stats:</span>
                    <ul className='deedStatCont'>
                      {deed.BP5x5 > 0 && (
                        <li className={`deedStatCol ${deed.BP5x5 > 0 ? '' : 'hidden'}`}>
                          <span className='spotType'>Building Plots:</span> 
                          <div className='deedStatRow'>

                          <span className='amount'>{deed.BP5x5}x</span> 5x5 building plot

                          </div>
                        </li>
                      )}
                      {deed.BP10x10 > 0 && (
                        <li className={`deedStatCol ${deed.BP10x10 > 0 ? '' : 'hidden'}`}>
                          <div className='deedStatRow'>

                          <span className='amount'>{deed.BP10x10}x</span> 10x10 building plot

                          </div>
                        </li>
                      )}
                      {deed.BP10x20 > 0 && (
                        <li className={`deedStatCol ${deed.BP10x20 > 0 ? '' : 'hidden'}`}>
                          <div className='deedStatRow'>

                          <span className='amount'>{deed.BP10x20}x</span> 10x20 building plot

                          </div>
                        </li>
                      )}
                      {deed.BP20x20 > 0 && (
                        <li className={`deedStatCol ${deed.BP20x20 > 0 ? '' : 'hidden'}`}>
                          <div className='deedStatRow'>

                          <span className='amount'>{deed.BP20x20}x</span> 20x20 building plot

                          </div>
                        </li>
                      )}
                      {deed.BP20x40 > 0 && (
                        <li className={`deedStatCol ${deed.BP20x40 > 0 ? '' : 'hidden'}`}>
                          <div className='deedStatRow'>

                          <span className='amount'>{deed.BP20x40}x</span> 20x40 building plot

                          </div>
                        </li>
                      )}
                    </ul>
                    {deed.FP5x5 > 0 && (
                      <li className={`deedStatCol ${deed.FP5x5 > 0 ? '' : 'hidden'}`}>
                        <span className='spotType'>Farming Plots:</span> 
                        <div className='deedStatRow'>

                        <span className='amount'>{deed.FP5x5}x</span> 5x5 farming plot

                        </div>
                      </li>
                    )}
                    {deed.RP5x5 > 0 && (
                      <li className={`deedStatCol ${deed.RP5x5 > 0 ? '' : 'hidden'}`}>
                        <span className='spotType'>Ranching Plots:</span> 
                        <div className='deedStatRow'>

                        <span className='amount'>{deed.RP5x5}x</span> 5x5 ranching plot

                        </div>
                      </li>
                    )}
                    {(deed.sDeco > 0 || deed.mDeco > 0 || deed.lDeco > 0) && (
                      <ul className='deedStatCont'>
                        <li className='deedStatCol'>
                          <span className='spotType'>Decoration Plots:</span> 
                            {deed.sDeco > 0 &&
                              <div className='deedStatRow'>
                                <span className='amount'>{deed.sDeco}x</span> small decoration
                              </div>
                            }
                            
                            {deed.mDeco > 0 &&
                              <div className='deedStatRow'>
                                <span className='amount'>{deed.mDeco}x </span> medium decoration
                              </div>
                            }
                            
                            {deed.lDeco > 0 &&
                            <div className='deedStatRow'>
                              <span className='amount'>{deed.lDeco}x</span> large decoration
                            </div>
                            }
                        </li>
                      </ul>
                      )}
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
        <button className='interactiveButton' onClick={goToInteractivePage}>Place Buildings on {deed.name}</button>

      </div>
    </div>
  )
}

export default Deed