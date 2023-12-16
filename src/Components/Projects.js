import React, { useState, useEffect } from 'react'
import './Projects.css'
import Amazon1 from '../img/Amazon_clone_1.png'
import Amazon2 from '../img/Amazon_clone_2.png'
import Amazon3 from '../img/Amazon_clone_3.png'
import Amazon4 from '../img/Amazon_clone_4.png'
import News1 from '../img/news_1.png'
import News2 from '../img/news_2.png'
import News3 from '../img/news_3.png'
import Notepad from '../img/notepad.png'
import techlift1 from '../img/techlift-1.png'
import techlift2 from '../img/techlift-2.png'
import techlift3 from '../img/techlift-3.png'
import techlift4 from '../img/techlift-4.png'
import techlift5 from '../img/techlift-5.png'
import techlift6 from '../img/techlift-6.png'
import eb1 from '../img/ecommerce-1.png'
import eb2 from '../img/ecommerce-2.png'
import eb3 from '../img/ecommerce-3.png'
import eb4 from '../img/ecommerce-4.png'
import eb5 from '../img/ecommerce-5.png'
import eb6 from '../img/ecommerce-6.png'
import eb7 from '../img/ecommerce-7.png'
// import {Swiper, SwiperSlide} from 'swiper/react/swiper-react'
// import 'swiper/swiper.min.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
// import 'swiper/swiper-bundle.css'
// import 'swiper/swiper'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper'
import LoadingBar from 'react-top-loading-bar';


function Projects() {

    SwiperCore.use([Autoplay])

    const [prog, setProg] = useState(20);

    useEffect(() => {
        document.title = "Projects | Umaid | Portfolio";
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
                color='#08dd17'
                progress={prog}
            />

            <div className="project1">
                <div className="project_left">
                    <h1>E-commerce Website</h1>
                    <span><a href="https://dreamy-fox-52c615.netlify.app/" target={'_blank'} className='link' rel='noreferrer'>Link</a></span>
                    <h2>Tools used :</h2>
                    <ul>
                        <li><span className='first'>Frontend : </span><span className='second'>React, TypeScript, TailwindCSS, Redux, Yarn, Axios, Formik, Yup</span></li>
                        <li><span className='first'>Backend : </span><span className='second'>TypeScript, Express.js, Mongoose, bcryptjs, joi, jsonwebtoken</span></li>

                    </ul>
                </div>

                <div className="project_right">
                    {/* slider */}
                    <Swiper
                        modules={[Pagination, Navigation]}
                        pagination={{ type: 'progressbar' }}
                        navigation={true}

                        // data-swiper-autoplay={2000}
                        autoplay={{
                            delay: 3500, disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                            waitForTransition: true
                        }}

                        slidesPerView={1}
                        grabCursor={true}
                        className='project_swiper'>

                        <SwiperSlide className='project_swipers'>
                            <img src={eb1} alt="E-commerce Website" className='project_img' />
                        </SwiperSlide>
                        <SwiperSlide className='project_swipers'>
                            <img src={eb2} alt="E-commerce Website" className='project_img' />
                        </SwiperSlide>
                        <SwiperSlide className='project_swipers'>
                            <img src={eb3} alt="E-commerce Website" className='project_img' />
                        </SwiperSlide>
                        <SwiperSlide className='project_swipers'>
                            <img src={eb4} alt="E-commerce Website" className='project_img' />
                        </SwiperSlide>
                        <SwiperSlide className='project_swipers'>
                            <img src={eb5} alt="E-commerce Website" className='project_img' />
                        </SwiperSlide>
                        <SwiperSlide className='project_swipers'>
                            <img src={eb6} alt="E-commerce Website" className='project_img' />
                        </SwiperSlide>
                        <SwiperSlide className='project_swipers'>
                            <img src={eb7} alt="E-commerce Website" className='project_img' />
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>

            <div className="project1">
                <div className="project_left">
                    <h1>Exercise Tracker Web App</h1>
                    <h2>Tools used :</h2>
                    <ul>
                        <li><span className='first'>Frontend : </span><span className='second'>React, react-bootstrap</span></li>
                        <li><span className='first'>Backend : </span><span className='second'>Node.js, Express.js, mongoose, joi</span></li>
                    </ul>
                </div>

                <div className="project_right">
                    {/* slider */}
                    <Swiper
                        modules={[Pagination, Navigation]}
                        pagination={{ type: 'progressbar' }}
                        navigation={true}

                        // data-swiper-autoplay={2000}
                        autoplay={{
                            delay: 3500, disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                            waitForTransition: true
                        }}

                        slidesPerView={1}
                        grabCursor={true}
                        className='project_swiper'>

                        <SwiperSlide className='project_swipers'>
                            <img src={techlift1} alt="Exercise Tracker Web App" className='project_img' />
                        </SwiperSlide>
                        <SwiperSlide className='project_swipers'>
                            <img src={techlift2} alt="Exercise Tracker Web App" className='project_img' />
                        </SwiperSlide>
                        <SwiperSlide className='project_swipers'>
                            <img src={techlift3} alt="Exercise Tracker Web App" className='project_img' />
                        </SwiperSlide>
                        <SwiperSlide className='project_swipers'>
                            <img src={techlift4} alt="Exercise Tracker Web App" className='project_img' />
                        </SwiperSlide>
                        <SwiperSlide className='project_swipers'>
                            <img src={techlift5} alt="Exercise Tracker Web App" className='project_img' />
                        </SwiperSlide>
                        <SwiperSlide className='project_swipers'>
                            <img src={techlift6} alt="Exercise Tracker Web App" className='project_img' />
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>

            <div className="project1">
                <div className="project_left">
                    <h1>Amazon Clone</h1>
                    <span><a href="https://clone-d00db.web.app" target={'_blank'} className='link' rel='noreferrer'>Link</a></span>
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
                        pagination={{ type: 'progressbar' }}
                        navigation={true}

                        // data-swiper-autoplay={2000}
                        autoplay={{
                            delay: 3500, disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                            waitForTransition: true
                        }}

                        slidesPerView={1}
                        grabCursor={true}
                        className='project_swiper'>

                        <SwiperSlide className='project_swipers'>
                            <img src={Amazon1} alt="Amazon Mian Page" className='project_img' />
                        </SwiperSlide>
                        <SwiperSlide className='project_swipers'>
                            <img src={Amazon2} alt="Amazon Items" className='project_img' />
                        </SwiperSlide>
                        <SwiperSlide className='project_swipers'>
                            <img src={Amazon3} alt="Amazon Login" className='project_img' />
                        </SwiperSlide>
                        <SwiperSlide className='project_swipers'>
                            <img src={Amazon4} alt="Amazon Cart" className='project_img' />
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
                        pagination={{ type: 'progressbar' }}
                        navigation={true}

                        autoplay={{
                            delay: 3500, disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                            waitForTransition: true
                        }}

                        slidesPerView={1}
                        grabCursor={true}
                        className='project_swiper'>

                        <SwiperSlide className='project_swipers'>
                            <img src={News1} alt="News website" className='project_img' />
                        </SwiperSlide>
                        <SwiperSlide className='project_swipers'>
                            <img src={News2} alt="News website" className='project_img' />
                        </SwiperSlide>
                        <SwiperSlide className='project_swipers'>
                            <img src={News3} alt="News website" className='project_img' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className="project1">
                <div className="project_left">
                    <h1 style={{ margin: '12px 35px' }}>Notes taking website</h1>
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
                            <img src={Notepad} alt="Notes taking website" className='project_img' />
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </div>
    )
}

export default Projects