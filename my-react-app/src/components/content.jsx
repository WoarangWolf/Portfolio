import './content.css';
import { greeting } from './greeting.js';
import me from "../assets/images/me.png";
import python from "../assets/images/python.png";
import java from "../assets/images/java.png";
import cSharp from "../assets/images/Csharp.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import php from "../assets/images/php.png";
import react from "../assets/images/react.png";
import mySQL from "../assets/images/mysql.png";
import gitHub from "../assets/images/github.png";
import VSCode from "../assets/images/visualstudiocode.png";
import visualStudio from "../assets/images/visualstudio.png";
import intelliJ from "../assets/images/intellij.png";


function Content({page}) {
    return(
        <div key={page} className="content">
            {page === 'about-me' && (
                <section className="about-me-section">
                    <h2>{greeting()}</h2>
                    <img src={me} alt="me"/>
                    <div>
                        <p>
                            My name is Thanh Quang Doan. I am an international student from Vietnam, currently living in Hamilton and
                            studying <strong>Software Developmen</strong>  at Mohawk College. My career goal is to begin as a Front-end Developer
                            and gradually expand into a higher level such as <strong>Full-stack Development</strong>, <strong>Mobile App Development</strong>,
                            and <strong>Game Development</strong>.
                        </p>
                        <p>
                            I am currently focused on building a strong foundation in software development through formal education and
                            continuous self-learning. Alongside my college studies, I actively practice problem-solving skills by completing
                            coding challenges on <strong>LeetCode</strong> and developing personal projects.
                        </p>
                        <p>
                            Before transitioning into the IT field, I earned a Bachelor's degree in <strong>English Language</strong> in Vietnam,
                            specializing in <strong>Translation and Interpretation</strong>. I have professional experience as a Translator,
                            <strong>an Assistant to the Director of an International School</strong>, and later
                            as <strong>a Construction Project Illustrator</strong> at a Japanese company.
                            These roles helped me develop strong adaptability, communication skills, and the ability to learn new domains efficiently.
                        </p>
                        <p>
                            I am now fully committed to pursuing a career in Software Development, driven by a strong interest in technology and programming.
                            Having been familiar with computers from a very young age, learning and applying new technical knowledge
                            has always felt natural and motivating to me.
                        </p>
                        <p>
                            This portfolio was built using HTML, CSS, and React, which I learned independently through self-study so far.
                            I am always eager to learn, refine my skills, and grow as a developer through new challenges and opportunities.
                        </p>
                    </div>
                </section>
            )}

            {page === 'education' && (
                <section className="education-section">
                    <h2>Education</h2>
                    <div>
                        <p>
                            Before arriving in Canada, I completed my education in Vietnam, where I earned a degree in English Language
                            with a specialization in Translation and Interpretation. Currently, I am pursuing a diploma in Software Development
                            at Mohawk College in Canada, which I expect to complete by May 2028.
                        </p>
                        <h3>HO CHI MINH CITY UNIVERSITY OF TECHNOLOGY (HUTECH)</h3>
                        <ul className="hutech-education">
                            <li>Years of education: 2011 - 2015</li>
                            <li>Degree: Bachelor of Arts (B.A.) in English Language</li>
                            <li>Major: Translation and Interpretation</li>
                        </ul>
                        <h3>MOHAWK COLLEGE</h3>
                        <ul className="mohawk-education">
                            <li>Years of education: 2025 - 2028 (expected)</li>
                            <li>Ontario College Advanced Diploma (OCAD): Computer Systems Technology</li>
                            <li>Major: Software Development</li>
                            <li>Current GPA: 90.45%</li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            After completing my undergraduate degree, I spent several years working in professional roles
                            that helped me develop strong adaptability, responsibility, and real-world experience.
                            Over time, my long-standing interest in technology and information systems led me to pursue
                            further education in Software Development, which is why I chose Mohawk College to begin this transition.
                        </p>
                    </div>
                </section>
            )}

            {page === 'work-experience' && (
                <section className="work-experience-section">
                    <h2>Work Experience</h2>
                    <div>
                        <p>
                            After graduating with a degree in English Language, I worked in several professional roles that
                            helped me develop strong attention to detail, communication skills, and adaptability.
                            These experiences provided a solid foundation thatcontinues to support my transition into software development.
                        </p>
                        <h3>VIET UY TIN CO., LTD.</h3>
                        <ul className="vietuytin-work">
                            <li>Position: Translator</li>
                            <li>Years of work: 2015 - 2019</li>
                            <li>Translated notarized office documents between English and Vietnamese with high accuracy.</li>
                            <li>Ensured consistency, confidentiality, and attention to detail in official documentation.</li>
                        </ul>
                        <h3>THE ASIAN INTERNATIONAL SCHOOL</h3>
                        <ul className="asian-school-work">
                            <li>Position: Assistant to the Director</li>
                            <li>Years of work: 2019 - 2021</li>
                            <li>Assisted the Director with administrative tasks and communication with parents and staff.</li>
                            <li>Organized documents and supported coordination of school activities.</li>
                        </ul>
                        <h3>YDR VIETNAM CO., LTD. - A branch of Yuasa Design Room Co., Ltd.</h3>
                        <ul className="ydr-work">
                            <li>Position: Technical Illustrator for Construction Drawings</li>
                            <li>Years of work: 2021 - 2024</li>
                            <li>
                                Drew and revised detailed technical illustrations for large-scale construction projects.
                            </li>
                            <li>Ensured accuracy and compliance with industry standards through careful review and revisions</li>
                        </ul>
                    </div>
                </section>
            )}

            {page === 'skills' && (
                <section className="skills-section">
                    <h2>Personal Skills</h2>
                    <div className="skills-container">
                        <div className="development-skills">
                            <h3>DEVELOPMENT SKILLS</h3>
                            <h4>Programming languages</h4>
                            <div className="programming-languages">
                                <img src={python} alt="Python"/>
                                <img src={java} alt="Java"/>
                                <img src={cSharp} alt="C#"/>
                            </div>
                            <h4>Web Development</h4>
                            <div className="programming-languages">
                                <img src={html} alt="HTML"/>
                                <img src={css} alt="CSS"/>
                                <img src={javascript} alt="JavaScript"/>
                                <img src={php} alt="PHP"/>
                                <img src={react} alt="React"/>
                            </div>
                            <h4>Data Management</h4>
                            <div className="programming-languages">
                                <img src={mySQL} alt="MySQL"/>
                            </div>
                            <h4>Tools</h4>
                            <div className="programming-languages">
                                <img src={gitHub} alt="GitHub"/>
                                <img src={VSCode} alt="Visual Studio Code"/>
                                <img src={visualStudio} alt="Visual Studio"/>
                                <img src={intelliJ} alt="IntelliJ IDEA"/>
                            </div>
                        </div>
                        <div className="soft-skills">
                            <h3>SOFT SKILLS</h3>
                            <ul className="soft-skills-list">
                                <li>Effective time management with consistent ability to meet deadlines.</li>
                                <li>Ability to perform well under pressure in dynamic environments.</li>
                                <li>Strong problem-solving with a practical and analytical approach.</li>
                                <li>High attention to detail and accuracy in tasks and documentation.</li>
                                <li>Strong work ethic and sense of responsibility.</li>
                                <li>Quick learner with the ability to adapt and communicate effectively within teams.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            )}

            {page === 'projects' && (
                <section className="projects-section">
                    <h2>Projects</h2>
                </section>
            )}

        </div>
    )
}

export default Content