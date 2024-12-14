import React, { useRef, useState } from 'react';
import classes from "./contactUs.module.scss";
import { contactUsImg } from '../../assets';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const ContactUs = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm('service_hh6z3fe', 'template_cpj0kwf', form.current, {
                publicKey: 'R12SSbCsuz_E1D3a8',
            })
            .then(
                () => {
                    setIsLoading(false);
                    toast.success('Message sent successfully!');
                    e.target.reset();
                    setTimeout(() => {
                        navigate("/"); 
                    }, 100);
                },
                (error) => {
                    setIsLoading(false);
                    toast.error(`FAILED to send message: ${error.text}`);
                    e.target.reset();
                }
            );
    };

    return (
        <div className={classes["contact-contanier"]}>
            <div className={classes["contact-img"]}>
                <img src={contactUsImg} alt='contact' />
            </div>
            <div className={classes['contact-info']}>
                <h2>Contact us</h2>
                <form ref={form} onSubmit={sendEmail} className={classes.form}>
                    <input 
                        type='text'
                        placeholder='Full name'
                        required 
                    />
                    <input 
                        type='email'
                        placeholder='Your active email'
                        required 
                    />
                    <input 
                        type='text'
                        placeholder='Your message'
                        required 
                    />
                    <button type="submit">
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
            <ToastContainer />
            
            
                    </div>
    );
}

export default ContactUs;
