import React from 'react'
import './HeroSlideBtn.css'

const HeroSlideBtn = () => {
    const handleButtonClick = () => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth' 
        });
      };

  return (
    <div onClick={handleButtonClick} className="SlideBtn">
        <div className='Circle'></div>
    </div>
  )
}

export default HeroSlideBtn