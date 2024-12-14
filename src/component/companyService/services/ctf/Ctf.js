import React from 'react'
import classes from "./ctf.module.scss"
import { ctfData } from './ctf-data';
import { FaArrowRightLong } from 'react-icons/fa6';

const Ctf = () => {
    return (
        <div className={classes.ctf}>
        <div className={classes["container"]}>
          {ctfData.map((item, index) => (
            <div key={index} className={classes.ctfItem}>
                <div  className={classes.ctfImage}>
                    <img src={item.img} alt={item.title} />
                </div>
              <div className={classes.ctfInfo}>
                <h3 className={classes.ctfTitle}>{item.title}</h3>
                <p className={classes.ctfDescription}>{item.description}</p>
              </div>
              {/*<div className={classes.arrow}>
                    <a href=''>Read More</a>
                    <p><FaArrowRightLong color="#e2047a"/></p>
              </div>*/}
            </div>
          ))}
        </div>
        </div>
       
       
      );
    };

export default Ctf