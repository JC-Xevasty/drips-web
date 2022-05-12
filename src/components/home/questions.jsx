import { useState } from "react";
import sendIcon from "../../icons/send.svg";

const Questions = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [msgCount, setMsgCount] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name + email + message);
    }

    return (
        <div className="section-dark">
            <div className="content">
                <div className="questions">
                    <div className="question-form">
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
                    <div className="question-text">
                        <div>
                        <h3>Have questions or inquiries?</h3>
                        <p>Filll out this form to message us or reach us thru our contact details.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Questions;