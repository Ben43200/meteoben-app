import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contactus.scss"
// import background from "../../compress-background.webp";
import Navbar from '../../components/NavBar';
import background from "../../compress-background.webp";

// export const ContactUs = () => {
//     const form = useRef();
//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY").then(
//             (result) => {
//                 console.log(result.text);
//             },
//             (error) => {
//                 console.log(error.text);
//             }
//         );
//     };

//     return (
//         <form ref={form} onSubmit={sendEmail}>
//             <label>Name</label>
//             <input type="text" name="user_name" />
//             <label>Email</label>
//             <input type="email" name="user_email" />
//             <label>Message</label>
//             <textarea name="message" />
//             <input type="submit" value="Send" />
//         </form>
//     );
// };

// // export default ContactUs;





// import React from 'react'
// import './App.css';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_s6muiwa", "template_ad41jxd", form.current, "BX3zRj2D7lUW5xwzS"
            )
            .then(
                (result) => {
                    alert('Merci pour votre message, il sera traité dans les plus brefs délais...');
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div>
            <Navbar />
            <main>
                <div className="title-container">
                    <h1>Meteoben</h1>
                    <h2>Développeur Web en biovallée de la Drôme</h2>
                    <img src={background} alt="background" className="fond-home" />
                </div>
                <h1>Contact Form</h1>
                <form className='cf' ref={form} onSubmit={sendEmail}>
                    <div className='half left cf'>
                        <input type='text' placeholder='Nom' name='user_name' />
                        <input type='email' placeholder='Adresse email' name='user_email' />
                    </div>
                    <div className='half right cf'>
                        <textarea name='message' type='text' placeholder='Message'></textarea>
                    </div>
                    <input type='submit' value='Submit' id='input-submit' />
                </form>
            </main>

        </div>
    );
    // }
    // );
}

export default ContactUs;