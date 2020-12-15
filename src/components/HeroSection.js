import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>SOLUTIONS THAT WORK THE FIRST TIME!</h1>
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SIGN UP TO SEE A LIST OF PROJECTS THAT MIGHT INTEREST YOU
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          REQUEST A FREE CONSULTATION <i className='fas fa-wrench' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;