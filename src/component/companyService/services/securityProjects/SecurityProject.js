import React from 'react';

import classes from './securityProject.module.scss';
import { securityData } from './securityProjects-data';
import { FaArrowRightLong } from 'react-icons/fa6';


const SecurityProject = () => {
  return (
    <div className={classes.securityProject}>
    <div className={classes["container"]}>
      {securityData.map((item, index) => (
        <div key={index} className={classes.securityItem}>
            <div  className={classes.securityImage}>
                <img src={item.img} alt={item.title} />
            </div>
          <div className={classes.securityInfo}>
            <h3 className={classes.securityTitle}>{item.title}</h3>
            <p className={classes.securityDescription}>{item.description}</p>
          </div>
          {/*<div className={classes.arrow}>
                    <a href="">Read More</a>
                    <p><FaArrowRightLong color="#e2047a"/></p>
              </div>*/}
        </div>
      ))}
    </div>
    </div>
   
  );
};

export default SecurityProject;
