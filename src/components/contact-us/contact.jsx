import { useState } from "react";
import sendIcon from "../../icons/send.svg";
import location from "../../icons/location.svg";
import call from "../../icons/call.svg";
import mail from "../../icons/message.svg";
import facebook from "../../icons/facebook-blue.svg";
import twitter from "../../icons/twitter-blue.svg";
import instagram from "../../icons/instagram-blue.svg";
import DRMap from "./map";


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [msgCount, setMsgCount] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name + email + message);
    }


    return (
        <div className="contact-back">
            <div className="contact-body">
                <h2>Leave us a message</h2>
                <div className="form-information">
                    <div className="message-form">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="txtName">NAME</label><br />
                            <input type="text" id="txtName" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
                            <label htmlFor="txtEmail">EMAIL</label><br />
                            <input type="email" id="txtEmail" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" />
                            <label htmlFor="txtMessage">MESSAGE</label><br />
                            <div className="textarea-wrapper">
                                <textarea id="txtMessage" value={message} onChange={(e) => {
                                    setMessage(e.target.value);
                                    setMsgCount(e.target.value.length)
                                }} placeholder="Your Message" maxLength="255"></textarea>
                                <p className="message-count">{`${msgCount}/255`}</p>
                            </div>
                            <button type="submit">SEND
                                <img src={sendIcon} alt="" /></button>
                        </form>
                    </div>
                    <div className="contact-information">
                        <div className="information-item">
                            <img src={location} alt="location" />
                            <span className="text">Del Rosario Compound Neighborhood Association,
                                Brgy. Coloong, Valenzuela City</span>
                        </div>
                        <div className="information-item">
                            <img src={call} alt="call" />
                            <span className="text">(+63) 932 932 6611</span>
                        </div>
                        <div className="information-item">
                            <img src={mail} alt="message" />
                            <a href="mailto:delrosariocompound@gmail.com">
                                <span className="text">delrosariocompound@gmail.com</span>
                            </a>
                        </div>
                        <div className="contact-socials">
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" /></a>
                            <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><img src={twitter} alt="facebook" /></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><img src={instagram} alt="facebook" /></a>
                        </div>

                        <div className="dr-map">
                                <DRMap center={[14.729633, 120.942985]} zoom={18}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;