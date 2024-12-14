import React from 'react'
import classes from "./academicLearining.module.scss"
import { academicData } from './academicLearining-data'

export const AcademicLearning = () => {
  return (
    <div className={classes.academicLearning}>
    <div className={classes["container"]}>
    {academicData.map((item, index) => (
      <div key={index} className={classes.academicItem}>
          <div  className={classes.academicImage}>
              <img src={item.img} alt={item.title} />
          </div>
        <div className={classes.academicInfo}>
          <h3 className={classes.academicTitle}>{item.title}</h3>
          <p className={classes.academicDescription}>{item.description}</p>
          {/*<button>more</button>*/}
        </div>
      </div>
    ))}
    </div>
    </div>
  )
}
