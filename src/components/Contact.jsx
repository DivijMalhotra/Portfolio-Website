import React, { useRef , useState } from 'react'
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false)

    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs.sendForm(
            "service_69jwsbi", //EmailJS ServiceID
            "template_dt2pjqe", //EmailJS TemplateID
            form.current,
            "D0ETYsx-1VotUiE3u" //EmailJS Public Key
        ).then(() => {
            setIsSent(true)
            form.current.reset() //Reset form fields
            toast.success("Message sent successully" , {
                position:'top-right',
                theme:'dark',
                autoClose:3000,
                hideProgressBar:false,
                closeOnClick:true,
                draggable:true,
                pauseOnHover:false,
            })
        } , (error) => {
            toast.error("Error Sending Message",error)
            toast.error("Failed to send message. Please try again." , {
                position:'top-right',
                theme:'dark',
                autoClose:3000,
                hideProgressBar:false,
                closeOnClick:true,
                draggable:true,
                pauseOnHover:false,
            })
        }
        )
    }


  return (
    <section id="contact" className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]">
        <ToastContainer/>
      {/* Section title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl text-white font-bold">
          CONTACT
        </h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-2 mb-2"></div>
        <p className="text-gray-300 text-lg font-semibold">
             I'd love to hear from you reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact form */}
      <div className='mt-8 w-full max-w-md bg-[#08081f] p-6 rounded-lg shadow-lg border border-gray-300'>
        <h3 className='text-xl font-semibold text-center text-white'>
            Connect with Me
        </h3>

        <form ref={form} onSubmit={sendEmail} className='mt-4 flex flex-col space-y-4'>
            <input type="email" name='user_email' placeholder='Your Email' required 
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'/>
            <input type="text" name='user_name' placeholder='Your Name' required 
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'/>
            <input type="text" name='subject' placeholder='Subject' required 
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'/>
            <textarea type="text" name='message' placeholder='Message' required 
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'/>

            {/* Send Button */}
            <button type='submit' className='w-full text-xl bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition'>
                Send
            </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
