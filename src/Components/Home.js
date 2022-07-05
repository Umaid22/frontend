import React, {useState, useEffect} from 'react'
import './Home.css'
import Linkedin from '../img/linkedin.png'
import Github from '../img/github.png'
import Email from '../img/email.png'
import Whatsapp from '../img/whatsapp.png'
import Resume from '../img/Resume_Umaid_MERN.pdf'
import Amazon1 from '../img/Amazon_clone_1.png'
import News1 from '../img/news_1.png'
import Notepad from '../img/notepad.png'
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
// import 'swiper/swiper.min.scss/autoplay'
import SwiperCore, { Autoplay } from 'swiper'
import LoadingBar from 'react-top-loading-bar';


function Home() {
  
  SwiperCore.use([Autoplay])

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
    
    <div className='home'>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={prog}
        />
      <div className="home_left">
        <h2>Hy! I am</h2>
        <span>Umaid</span>
        <p>MERN Stack Developer</p>
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

      <div className="home_right">
        <h2>Recent Projects</h2>

        {/* slider */}
        <Swiper
        modules={Autoplay}
        
        // data-swiper-autoplay={2000}
        autoplay={{delay:2300,disableOnInteraction:false,
          pauseOnMouseEnter:true,
          waitForTransition:true
        }}
        
        spaceBetween={5}
        slidesPerView={1}
        grabCursor={true}
        className='home_right-slider'>

          <SwiperSlide className='swipers'>
            <img src={Amazon1} alt="Amazon" className='swiper_img'/>
            <span>Amazon Clone</span>
          </SwiperSlide>
          <SwiperSlide className='swipers'>
            <img src={News1} alt="NewsAPI" className='swiper_img'/>
            <span>News fetching from NewsAPI</span>
          </SwiperSlide>
          <SwiperSlide className='swipers'>
            <img src={Notepad} alt="NotePad" className='swiper_img'/>
            <span>Notes taking website</span>
          </SwiperSlide>
        </Swiper>

      </div>

    </div>
  )
}

export default Home