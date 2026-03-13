import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import { TypeAnimation } from 'react-type-animation'
import Tilt from 'react-parallax-tilt'
import profile from "../assets/Prof.jpeg"

const About = () => {
  return (
    <section id='about' className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-18 lg:mt-19'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-20'>
        {/* Left side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* Greeting */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Divij Malhotra
          </h2>
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] mb-4 leading-tight'>
            <span className='text-white'>I am </span>
            <TypeAnimation  
            sequence={[
              'Full Stack Developer',
              1000,
              'UI/UX Designer',
              1000,
              'AI Enthusiast',
              1000,
              'Problem Solver',
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            />
          </h3>

          {/* About Me paragraph */}
          <p className='text-base sm:text-lg md:text-base text-gray-400 mb-10 leading-relaxed mt-8'>
            I am a full-stack developer passionate about
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1VMc4McOz9cn7JwLJq8rAQjoBWKURF7Mj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-40 h-40 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profile}
              alt="Divij Malhotra"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            /></Tilt>
        </div>
      </div>
    </section>
  )
}

export default About
