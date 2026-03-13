import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId)
        if (section){
            section.scrollIntoView({behavior:"smooth"})
        }
    }
  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
        <div className='container mx-auto text-center'>
            {/* Name or Logo */}
            <h2 className='text-xl font-semibold text-purple-500'>Divij Malhotra</h2>
            {/* Navigation Link */}
            <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
                {[
                    {id: "about", label: "About"},
                    {id: "skills", label: "Skills"},
                    {id: "work", label: "Projects"},
                    {id: "education", label: "Education"},
                    {id: "certifications", label: "Certifications"},
                ].map((item,index) => {
                return <button key={index} onClick={() => handleScroll(item.id)} className='hover:text-purple-500 text-sm sm:text-base my-1'>
                            {item.label}
                        </button>
  })}
            </nav>

            {/* Social Media Icons */}
            <div className='flex flex-wrap justify-center mt-4 space-x-4'>
                <a href="https://www.linkedin.com/in/divij-malhotra-331039347/" target='_blank' rel="noopener noreferrer" className='text-gray-300 hover:text-[#8245ec]'>
                    <FaLinkedin size={24}/>
                </a>
                <a href="https://www.instagram.com/divij_malhotra_12/" target='_blank' rel="noopener noreferrer" className='text-gray-300 hover:text-[#8245ec]'>
                    <FaInstagram size={24}/>
                </a>
                <a href="https://x.com/divij_malhotra" target='_blank' rel="noopener noreferrer" className='text-gray-300 hover:text-[#8245ec]'>
                    <FaTwitter size={24}/>
                </a>
            </div>
             {/* Copyright Text */}
            <p className="text-sm text-gray-400 mt-4">
                © 2026 Divij Malhotra. All rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer
