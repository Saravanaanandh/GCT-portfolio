import { Link } from 'react-router'
import { motion, spring } from 'framer-motion'
// import ParticleBackground from '../components/ParticleComponent.jsx'
import React from 'react' 
import './../App.css'
import spacemanImg from './../assets/spaceman.png'
import styled, { keyframes } from 'styled-components'

const Float = keyframes`
  0%{
    transform: translateY(-25px);
  }50%{
    transform: translateY(25px);
  }100%{
    transform: translateY(-25px);
  }
`

const Spaceman = styled(motion.div)`
  animation: ${Float} 2s infinite ;
`
const Home = () => {
  return (
    <div id='home' className='relative'> 
        <Spaceman 
          className='size-20 sm:size-30 absolute right-10 top-10'
          initial={{y:'-200px', scale:0, opacity:0}}
          animate={{y:0, scale:1, opacity:1}}
          transition={{type:'spring', duration: 1.6, delay:0.4}}
        >
          <img src={spacemanImg} alt="" />
        </Spaceman>
        <div className='w-full flex items-center justify-between px-5 py-3 sm:px-10 sm:py-5'>
          <motion.div
            initial={{x:-100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{type:'spring', stiffness:300, duration:1.2,delay:0.4}}
          >
            <span className='sm:text-2xl'>SK</span>
          </motion.div>
          <motion.ul 
            className='flex gap-10 mr-20 sm:text-[1.5rem] max-sm:hidden'
            initial={{y:-100, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{type:'spring', stiffness:300, duration:1.2,delay:0.4}}
          >
            <Link className='cursor-pointer hover:scale-105' to='/'><li>Home</li></Link>
            <Link className='cursor-pointer hover:scale-105' to='/about'><li>About</li></Link>
            <Link className='cursor-pointer hover:scale-105' to='/projects'><li>Projects</li></Link>
            <Link className='cursor-pointer hover:scale-105' to='/contact'><li>Contact</li></Link>
          </motion.ul>
        </div>
        <motion.div 
          className='absolute top-80 left-10 sm:text-[2rem]'
          initial={{y:100,opacity:0,scale:0}}
          animate={{y:0,opacity:1,scale:1}}
          transition={{type:'spring', stiffness:300, duration:1.2,delay:0.4}}
        >
          <div className='flex flex-col sm:gap-5 gap-3'>
            <h1 className='sm:text-3xl'><span className='sm:text-[5.2rem]'>Hello, I am</span> </h1>
            <h1><span className='sm:text-[2rem]'>Saravana</span> Junior WebDev</h1>
            <p>Interested in develop more websites!!</p>
          </div>
        </motion.div>
    </div>
  )
}

export default Home