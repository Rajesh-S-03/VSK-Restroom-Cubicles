import React from 'react'   
import { FaWhatsapp } from "react-icons/fa";
import './Whatsappbutton.css'

const Whatsappbutton = () => {

  const phoneNumber = "9791128296"; 
  const message = "Hello VSK Enterprises, I would like to know more about your products and services, especially restroom cubicles, modular furniture, and interior and exterior cladding. from vsk website Could you please share more details?";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
     <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}

export default Whatsappbutton