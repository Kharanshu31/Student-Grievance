import React from 'react';
import image from '../images/contact-us.jpg';
import "../css/contact.css";

const ContactUs = () => {

    return (
        <section style={{ minHeight: "100vh" }}>
            <div className="contact">
                <div className="Home-svg">
                    <img src={image} alt="" />
                </div>
            </div>
        </section>

    );
}

export default ContactUs;
