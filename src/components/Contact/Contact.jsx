import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import location_icon from '../../assets/location_icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
      
      formData.append("access_key", "95161d18-0ce9-48b0-b519-426af7955c81");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
        setResult(res.message);
        event.target.reset();
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };


  return (
    <div>
    <h1 id='contact-h1'>Feel free to Contact us.</h1>
    <div className='contact' id='contact'>    
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@Jeru_butterfly.com</li>
            <li><img src={phone_icon} alt="" />+91 9876543210</li>
            <li><img src={location_icon} alt="" />No.7 Fusha Ave, East Blue<br/> 626117, India</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btnn dark-btn'>Submit now </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
    </div>
  )
}

export default Contact
