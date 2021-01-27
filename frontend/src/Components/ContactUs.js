import React from 'react';
import image from '../images/contact-us.jpg';
import "../css/contact.css";

const ContactUs = () => {

    return (
        <section style={{ minHeight: "100vh" }}>
            <script src="https://kit.fontawesome.com/384ff20d77.js" crossorigin="anonymous"></script>
            <div className="contact">
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                <i class="fas fa-phone-square"></i>
                
                </div>
            </div>
        </section>

    );
}

export default ContactUs;
