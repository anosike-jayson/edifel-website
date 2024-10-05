import React, { useRef } from 'react';
import img from '../imgs/About.jpg';
import { FaLinkedin, FaTelegramPlane, FaFacebookF, FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_u7cn8bd', //service id needs to be replaced
      'template_p51nqwt', //template id
      formRef.current, 
      'l3s_JKcSS4qGG2q3G'  // Public Key (User ID)
    )
    .then((result) => {
      toast.success('Message sent successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      e.target.reset();
    })
    .catch((error) => {
      toast.error('Error sending message. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };

  return (
    <div className="bg-gray-100 py-12 mt-16">
      <ToastContainer />
      <div className="container mx-auto flex flex-col lg:flex-row items-stretch justify-between shadow-lg overflow-hidden">
        {/* Left side with image and social media icons */}
        <div className="relative w-full lg:w-1/2 flex items-center">
          <img
            src={img}
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 flex justify-start space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition-colors duration-300">
              <FaLinkedin className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition-colors duration-300">
              <FaTelegramPlane className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition-colors duration-300">
              <FaFacebookF className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Right side with form */}
        <div className="flex-grow w-full lg:w-1/2 p-8 bg-white">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">GET IN TOUCH</h2>
          <p className="mb-8 text-gray-600">We would respond within 48Hrs.</p>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6 max-w-md">
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="relative w-full lg:w-1/2">
                <FaUser className="absolute left-3 top-2 text-gray-400" />
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
                />
              </div>
              <div className="relative w-full lg:w-1/2">
                <FaUser className="absolute left-3 top-2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
                />
              </div>
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-2 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
              />
            </div>
            <div className="relative">
              <FaPhone className="absolute left-3 top-2 text-gray-400" />
              <input
                type="tel"
                placeholder="Phone Number"
                name="phone"
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
              />
            </div>
            <textarea
              placeholder="Describe your issue"
              name="message"
              required
              className="w-full h-32 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
            ></textarea>
            <button
              type="submit"
              className="w-full lg:w-auto bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition-colors duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;