import './footer.css';

import printer from "../assets/images/printer.gif";
import phone from "../assets/images/phone.png";
import email from "../assets/images/email.png";
import linkedin from "../assets/images/linkedin.png";

function Footer() {
    return(
        <footer className="footer">
            <div className="resume-download">
                <p>Click the printer to download my Résumé.</p>
                <a href="resume.pdf" download="resume.pdf">
                    <img src={printer} alt="Download Résumé"/>
                </a>
            </div>
            <div className="contact">
                <p>Contacts:</p>
                <div className="tooltip">
                    <img src={phone} alt="phone"/>
                    <span className="tooltiptext">905-531-5277</span>
                </div>
                <div className="tooltip">
                    <img src={email} alt="email"/>
                    <span className="tooltiptext">quang.doan1@mohawkcollege.ca</span>
                </div>
                <div className="tooltip">
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="linkedin"/>
                    </a>
                    <span className="tooltiptext">My Linkedin</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer