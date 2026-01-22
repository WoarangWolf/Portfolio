import './footer.css';

function Footer() {
    return(
        <footer className="footer">
            <div className="resume-download">
                <p>Click the printer to download my Résumé.</p>
                <a href="resume.pdf" download="resume.pdf">
                    <img src="../assets/images/printer.gif" alt="Download Résumé"/>
                </a>
            </div>
            <div className="contact">
                <p>Contacts:</p>
                <div className="tooltip">
                    <img src="../assets/images/phone.png" alt="phone"/>
                    <span className="tooltiptext">905-531-5277</span>
                </div>
                <div className="tooltip">
                    <img src="../assets/images/email.png" alt="email"/>
                    <span className="tooltiptext">quangdoan1805@gmail.com</span>
                </div>
                <div className="tooltip">
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img src="../assets/images/linkedin.png" alt="linkedin"/>
                    </a>
                    <span className="tooltiptext">My Linkedin</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer