import React, {useState, useEffect} from 'react'
import './Projects.css'
import Amazon1 from '../img/Amazon_clone_1.png'
import Amazon2 from '../img/Amazon_clone_2.png'
import Amazon3 from '../img/Amazon_clone_3.png'
import Amazon4 from '../img/Amazon_clone_4.png'
import News1 from '../img/news_1.png'
import News2 from '../img/news_2.png'
import News3 from '../img/news_3.png'
import Notepad from '../img/notepad.png'
import {Swiper, SwiperSlide} from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css'
import  SwiperCore, {Pagination, Navigation, Autoplay } from 'swiper'
import LoadingBar from 'react-top-loading-bar';


function Projects() {

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
    <div className='projects'>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={prog}
        />
        <div className="project1">
            <div className="project_left">
                <h1>Amazon Clone</h1>
                <span><a href="https://clone-d00db.web.app" target={'_blank'} className='link'>Link</a></span>
                <h2>Tools used :</h2>
                <ul>
                    <li><span className='first'>React : </span><span className='second'>Frontend</span></li>
                    <li><span className='first'>Firebase Authenticatioon : </span><span className='second'> Used for full login functionality (Login & SignUp)</span></li>
                    <li><span className='first'>Firebase : </span><span className='second'>Also used for deployment</span></li>
                    <li><span className='first'>Material UI : </span><span className='second'>For Icons</span></li>
                </ul>
            </div>

            <div className="project_right">
                {/* slider */}
                <Swiper
                modules={[Pagination, Navigation]}
                pagination={{type:'progressbar'}}
                navigation={true}
                
                // data-swiper-autoplay={2000}
                autoplay={{delay:3500,disableOnInteraction:false,
                pauseOnMouseEnter:true,
                waitForTransition:true
                }}
    
                slidesPerView={1}
                grabCursor={true}
                className='project_swiper'>

                <SwiperSlide className='project_swipers'>
                    <img src={Amazon1} alt="Amazon Mian Page" className='project_img'/>
                </SwiperSlide>
                <SwiperSlide className='project_swipers'>
                    <img src={Amazon2} alt="Amazon Items" className='project_img'/>
                </SwiperSlide>
                <SwiperSlide className='project_swipers'>
                    <img src={Amazon3} alt="Amazon Login" className='project_img'/>
                </SwiperSlide>
                <SwiperSlide className='project_swipers'>
                    <img src={Amazon4} alt="Amazon Cart" className='project_img'/>
                </SwiperSlide>
                </Swiper>

            </div>
        </div>

        <div className="project1">
            <div className="project_left">
                <h1>News website</h1>
                <h2>Tools used :</h2>
                <ul>
                    <li><span className='first'>React : </span><span className='second'>Frontend</span></li>
                    <li><span className='first'>News API : </span><span className='second'>It is used to fetch the data in JSON form.</span></li>
                    <li><span className='first'>Infinite scroll : </span><span className='second'>This package is added to display all the available news from the News API.</span></li>
                    <li><span className='first'>Top loading bar : </span><span className='second'>It is added to show the transition when switched to other page.</span></li>
                </ul>
            </div>

            <div className="project_right">
                {/* slider */}
                <Swiper
                modules={[Pagination, Navigation]}
                pagination={{type:'progressbar'}}
                navigation={true}
                
                autoplay={{delay:3500,disableOnInteraction:false,
                pauseOnMouseEnter:true,
                waitForTransition:true
                }}
    
                slidesPerView={1}
                grabCursor={true}
                className='project_swiper'>

                <SwiperSlide className='project_swipers'>
                    <img src={News1} alt="News website" className='project_img'/>
                </SwiperSlide>
                <SwiperSlide className='project_swipers'>
                    <img src={News2} alt="News website" className='project_img'/>
                </SwiperSlide>
                <SwiperSlide className='project_swipers'>
                    <img src={News3} alt="News website" className='project_img'/>
                </SwiperSlide>
                </Swiper>
            </div>
        </div>

        <div className="project1">
            <div className="project_left">
                <h1 style={{margin:'12px 35px'}}>Notes taking website</h1>
                <h2>Tools used :</h2>
                <ul>
                    <li><span className='first'>React : </span><span className='second'>Frontend</span></li>
                    <li><span className='first'>NodeJS and Express : </span><span className='second'>are used as backend </span></li>
                    <li><span className='first'>MongoDB : </span><span className='second'>is used as database and all the CRUD operations are performed for accessing data from the database.</span></li>
                </ul>
            </div>

            <div className="project_right">
                {/* slider */}
                <Swiper
                // modules={[Pagination, Navigation]}
                // pagination={{type:'progressbar'}}
                // navigation={true}
                
                // data-swiper-autoplay={2000}
                // autoplay={{delay:3500,disableOnInteraction:false,
                // pauseOnMouseEnter:true,
                // waitForTransition:true
                // }}
                // slidesPerView={1}
                // grabCursor={true}
                className='project_swiper'>

                <SwiperSlide className='project_swipers'>
                    <img src={Notepad} alt="Notes taking website" className='project_img'/>
                </SwiperSlide>
                </Swiper>

            </div>
        </div>
    </div>
  )
}

export default Projects