import React, {useRef, useState, useEffect} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser' 
import Linkedin from '../img/linkedin.png'
import Github from '../img/github.png'
import Email from '../img/email.png'
import Whatsapp from '../img/whatsapp.png'
import Resume from '../img/Resume_Umaid_MERN.pdf'
import LoadingBar from 'react-top-loading-bar';



function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_f5pkumu', 'template_dse951x', form.current, 'OPXDbFAEdKImiF5Pz')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  };

  const [prog, setProg] = useState(20);

  useEffect(() => {
    setTimeout(() => {
      setProg(70)
    }, 300);

    setTimeout(() => {
      setProg(100)
    }, 500);

  }, [])

  return (
    <div className='contact'>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={prog}
        />
      <div className="c_left">
        <a href={Resume} download>
          <button className='left_button'>Download Resume</button>
        </a>

        <div className="home_icons">
          <a href="https://linkedin.com/in/umaid22" target='_blank' rel='noopener noreferrer'>
            <img src={Linkedin} alt="LinkedIn" className='icons_img' />
          </a>
          <a href="https://github.com/Umaid22" target='_blank' rel='noopener noreferrer'>
            <img src={Github} alt="GitHub" className='icons_img'/>
          </a>
          <a href="mailto:m.umaid22@gmail.com" target='_blank' rel='noopener noreferrer'>
            <img src={Email} alt="Gmail" className='icons_img'/>
          </a>
          <a href="https://wa.me/923264533943" target='_blank' rel='noopener noreferrer'>
            <img src={Whatsapp} alt="WhatsApp" className='icons_img'/>
          </a>
        </div>
      </div>

      <div className="c_right">
        <div className="txt">
            <span>Get in touch</span>
            <span>Contact me</span>
        </div>

        <div className="c_form">
          <form ref={form} onSubmit={sendEmail}>
            <input required minLength={3} type="text" name="user_name" className='user' placeholder='Name' />
            <input required type="email" name="user_email" className='user' placeholder='Email' />
            <textarea required minLength='5' name="message" className='user' placeholder='Message'/>
            <input type="submit" value="Send" className='c_button' />
            <span className='sendMessage'>{done && 'Email has sent successfully. Thanks for contacting.'}</span>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact