import React, { useState } from 'react';
import classes from "./company-service.module.scss";
import SecurityProject from './services/securityProjects/SecurityProject';
import { AcademicLearning } from './services/acdemicLearining/AcademicLearning';
import Ctf from './services/ctf/Ctf';

const CompanyService = () => {
    return (
        <div className={classes["service-container"]}>
            <div className={classes["service-items"]}>
                <div className={classes["services-title"]} >
                    <h2> <span>OUR </span>services</h2>
                    <span></span>
                    <p>we specialize in innovative technology solutions that empower organizations to enhance their security and streamline their operations. Our mission is to provide top-notch services that not only meet the needs of our clients but also contribute to a safer digital environment.
                    </p>
                </div>
                <div>
                <h2 className={classes["main-heading"]}>Security Projects</h2>
                <SecurityProject/>
                </div>
                <div>
                <h2 className={classes["main-heading"]}>Academic Learning</h2>
                <div className={classes.spikes}></div>
                <AcademicLearning/>
                </div>

                <div>
                <h2     onClick={() => window.open("http://ec2-13-61-100-41.eu-north-1.compute.amazonaws.com/", "_blank")}n className={classes["main-heading"]}>CTF Challenges</h2>
                <Ctf/>
                </div>
            </div> 
        </div>
    );
};

export default CompanyService;
