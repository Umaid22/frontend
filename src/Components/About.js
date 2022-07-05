import React, {useState, useEffect} from 'react'
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
        setTimeout(() => {
          setProg(70)
        }, 300);
    
        setTimeout(() => {
          setProg(100)
        }, 500);
    
      }, [])

  return (
    <div className='about'>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={prog}
        />
        <div className="about_left">
            <span className='about_first'>I am </span>
            <span className='about_second'>Umaid,</span>
            <span className='about_third'> Web developer from Lahore, Pakistan,</span>
            <span className='about_forth'>having <span className='bold'>Bachelor's degree</span> in <span className='bold'>"Civil Engineering"</span></span>
            <ul>
                <li className='about_li about_forth'><span className='bold'>Versatile, dynamic, passionate MERN stack developer.</span> Excited to be at the deployment phase of my new carrer in this field.</li>
                <li className='about_li about_forth'>Seeking a career that is <span className='bold'>challenging, interesting</span> and lets me work on the leading areas of technology - A job that gives me opportunities to <span className='bold'>learn, innovate and enhance</span> my skills and strenghts in conjunction with company goals and objectives.</li>
                <li className='about_li about_forth'>I'm an <span className='bold'>energetic, hardworking and detail oriented</span> MERN stack developer with excellent problem solving skills and attention towards details.</li>
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
                        <img src={Nodejs} alt="NodeJs"  className='node'/>
                    </div>
                    <div className="w-secCircle">
                        <img src={React1} alt="React" className='react'/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Mern} alt="MERN" className='mern'/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Express} alt="Express" className='express'/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Mongodb} alt="MongoDb" className='mongo'/>
                    </div>
                {/* </motion.div> */}
                </div>
                {/* background circles */}
                {/* <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div> */}
            </div>
        </div>
    </div>
  )
}

export default About