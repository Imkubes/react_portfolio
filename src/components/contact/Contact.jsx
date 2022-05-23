import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f3thfwo', 'template_24z3d31', form.current, 'TL89SI_wERg_4zlj9')

    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
        <article className='contact__option'>
          <HiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>Imkubes1@gmail.com</h5>
          <a href='mailto:Imkubes1@gmail.com' target='_blank'>Send a Message</a>
        </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type = 'text' name = 'name' placeholder='Your Full Name' required />
          <input type = 'email' name = 'email' placeholder='Your Email' required />
          <textarea name = 'message' rows = '7' placeholder = 'Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact