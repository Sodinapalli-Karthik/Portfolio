import React from 'react';
import "./contact.css";
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact_container">
      <div className='contact_options'>
       <article className="contact_option">
        <MdOutlineEmail className='contact_option-icon'/>
        <h4>
          Email
        </h4>
        <h5>Email id</h5>
        <a href="mailto:dummy@gmail.com" target="_blank">Send a Message</a>
       </article>
       <article className="contact_option">
        <RiMessengerLine  className='contact_option-icon'/>
        <h4>
          Messanger
        </h4>
        <h5>Email id</h5>
        <a href="https://m.me/ernest.achiever" target="_blank">Send a Message</a>
       </article>
       <article className="contact_option">
        <BsWhatsapp className='contact_option-icon'/>
        <h4>
          Whatsapp
        </h4>
        <h5>Email id</h5>
        <a href="https://api.whatsapp.com/send?phone=9573240137" target="_blank">Send a Message</a>
       </article>
      </div>
      <form action="">
        <input type="text" name='name'placeholder='Your Full Name' required />
        <input type="email" name='email'placeholder='Your Email' required />
        <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
         <button type='submit' className='btn btn-primary' >
          Send Message
         </button>
      </form>
    </div>
   </section>
  )
}

export default Contact