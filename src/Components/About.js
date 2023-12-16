import React, { useState, useEffect } from 'react'
import './About.css'
import Mern from '../img/mern.png'
import React1 from '../img/react.jpg'
import Nodejs from '../img/nodejs.png'
import Express from '../img/expressjs.jpg'
import Mongodb from '../img/mongodb.jpg'
import LoadingBar from 'react-top-loading-bar';


function About() {

    const [prog, setProg] = useState(20);

    useEffect(() => {
        document.title = "About | Umaid | Portfolio";
        setTimeout(() => {
            setProg(70)
        }, 300);

        setTimeout(() => {
            setProg(100)
        }, 500);

    }, [])

    return (
        <>
            <LoadingBar
                height={3}
                color='#af08dd'
                progress={prog}
            />
            <div className='about'>
                <div className="about_left">
                    <span className='about_first'>I am </span>
                    <span className='about_second'>Umaid,</span>
                    <span className='about_third'> MERN Stack developer</span>

                    <ul>
                        <li className='about_li about_forth'><span className='bold'>Full stack JavaScript developer </span>certified from TechLift (Contour Software).</li>

                        <li className='about_li about_forth'>Having <span className='bold'>good skills </span>in MERN
                            stack technologies.</li>

                        <li className='about_li about_forth'>And knowledge of state management tools<span className='bold'> like Redux.</span></li>

                        <li className='about_li about_forth'>And version control tools like <span className='bold'>git
                            and GitHub.</span></li>

                        <li className='about_li about_forth'>Also works with different styling tools like <span className='bold'>TailwindCSS, Bootstrap and SASS.</span></li>
                    </ul>
                </div>

                <div className="about_right">
                    <div className="w-right">
                        <div className="w-mainCircle App_logo">
                            {/* <motion.div */}
                            {/* initial={{rotate:45}}
                whileInView={{rotate:0}}
                viewport={{margin:'-40px'}}
                transition={{duration:4, type: 'spring'}}
                
                className="w-mainCircle"> */}
                            <div className="w-secCircle">
                                <img src={Nodejs} alt="NodeJs" className='node' />
                            </div>
                            <div className="w-secCircle">
                                <img src={React1} alt="React" className='react' />
                            </div>
                            <div className="w-secCircle">
                                <img src={Mern} alt="MERN" className='mern' />
                            </div>
                            <div className="w-secCircle">
                                <img src={Express} alt="Express" className='express' />
                            </div>
                            <div className="w-secCircle">
                                <img src={Mongodb} alt="MongoDb" className='mongo' />
                            </div>
                            {/* </motion.div> */}
                        </div>
                        {/* background circles */}
                        {/* <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About