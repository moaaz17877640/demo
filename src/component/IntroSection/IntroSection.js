
import React from 'react';
import classes from "./intro-section.module.scss"
import { introBackgroundImg } from '../../assets';

const IntroSection = () => {
  return (
    <>
    <div className={classes["intro-section"]}>
        <div className={classes["intro-section-item"]}>
      <h3 >WELCOME TO SPIDER FOR</h3>
      <h1 >Cybersecurity</h1>
      <p >
        At Spiders, we specialize in innovative technology solutions that empower organizations 
        to enhance their security and streamline their operations.
      </p>
    </div>
    <div className={classes["intro-img"]}>
        <img src={introBackgroundImg} alt=''></img>
      </div>
    </div>

    </>
  );
};

export default IntroSection;