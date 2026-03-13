import React, {useEffect, useState} from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaGithub,FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSession, setActiveSession] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  //Check Scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

      window.addEventListener("scroll" , handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
  }, [])  

  
  const menuItems = [
    {id: "about", label: "About"},
    {id: "skills", label: "Skills"},
    {id: "work", label: "Projects"},
    {id: "education", label: "Education"},
    {id: "certifications", label: "Certifications"},
  ]

  //Smooth Scroll Function
  const handleMenuItemClick = (sectionId) => {
    setActiveSession(sectionId)
    setIsOpen(false)

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }



  return (
    <nav className={`fixed top-0 w-full z-50 tansition duration-300 px-[7vw] md:px-[7vw] lg:[20vw] ${
      isScrolled? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className='text-white py-5 flex justify-between items-center'>
        <div className='text-lg cursor-pointer font-semibold'>
        <span className='text-[#8245ec]'>&lt;</span>
        <span className='text-white'>Divij</span>
        <span className='text-[#8245ec]'>/</span>
        <span className='text-white'>Malhotra</span>
        <span className='text-[#8245ec]'>&gt;</span>
        </div>

        {/* Deskstop items */}
        <ul className='hidden md:flex space-x-8 text-gray-400'>
          {menuItems.map((item) => (
            <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSession===item.id? "text-[#8245ec]": ""}`}>
              <button onClick={() => {handleMenuItemClick(item.id)}}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className='hidden md:flex space-x-4'>
          <a href="https://github.com/DivijMalhotra" target='_blank' rel="noopener noreferrer" className='text-gray-300 hover:text-[#8245ec]'>
            <FaGithub size={24}/>
          </a>
          <a href="https://www.linkedin.com/in/divij-malhotra-331039347/" target='_blank' rel="noopener noreferrer" className='text-gray-300 hover:text-[#8245ec]'>
            <FaLinkedin size={24}/>
          </a>
        </div>

        {/* For Mobile Menu icons */}
        <div className='md:hidden'>
          { isOpen? (
            <FiX className='text-3xl cursor-pointer text-[#8245ec]' onClick={() => setIsOpen(false)}/> 
          ) : <FiMenu className='text-3xl text-[#8245ec] cursor-pointer' onClick={() => setIsOpen(true)}/>
        }
        </div>

        {/* Mobile Menu items */}
          {isOpen && (
            <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden'>
              <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
                {menuItems.map((item) => (
                  <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSession===item.id? "text-[#8245ec]": ""}`}>
                    <button onClick={() => {handleMenuItemClick(item.id)}}>
                      {item.label}
                    </button>
                  </li>
                ))}
                <div className='flex space-x-4'>
                  <a href="" target='_blank' rel="noopener noreferrer" className='text-gray-300 hover:text-white'>
                    <FaGithub size={24}/>
                  </a>
                  <a href="" target='_blank' rel="noopener noreferrer" className='text-gray-300 hover:text-white'>
                    <FaLinkedin size={24}/>
                  </a>
                </div>
              </ul>
            </div>
          )}
      </div>
    </nav>
  )
}

export default Navbar
