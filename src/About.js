import './About.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();


export const About = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rjbo5eb', 'template_0kmq5we', form.current, '-Vlmw9PbJUTrse3Ko')
      .then((result) => {
        toast.success("Email Sent Successfully!")
      }, (error) => {
        toast.error("There was a problem sending the email!")
      });
  };

    return (
        <>
        <div className="main-container">
            <div className='about-heading'>
                <h1>About</h1>
            </div>
            <div className='about-paragraph'>
                <p>This is a sample E-commerce website created by Muhammed Al Ameen. The website is created using HTML, CSS, JS, React mainly.</p>
            </div>
        </div>
        <h2>Contact Form</h2>
        <div className='form-main'>
            <form onSubmit={sendEmail} ref={form}>
                <div className='form-content'>
                    <div className='form-name-email'>
                        <div className='name-form'>
                            <label >Name: </label> 
                            <input required type='text' name='from_name'></input>
                        </div>
                        <div className='email-form'>
                            <label >Email: </label>
                            <input required type='email' name='from_email'></input>
                        </div>
                    </div>
                    <div className='form-message'>
                        <label >Message: </label> <br></br>
                        <textarea required type='text' name='message'></textarea><br></br>
                        <input type='submit'></input>
                    </div>
                </div>
            </form>
        </div>
        <ToastContainer />
        </>
    )
}

export default About;