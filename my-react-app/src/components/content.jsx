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
import tailwindCSS from "../assets/images/tailwindcss.png";
import mySQL from "../assets/images/mysql.png";
import gitHub from "../assets/images/github.png";
import VSCode from "../assets/images/visualstudiocode.png";
import visualStudio from "../assets/images/visualstudio.png";


function Content({page}) {
    return(
        <div key={page} className="content">
            {page === 'about-me' && (
                <section className="about-me-section">
                    <h2>{greeting()}</h2>
                    <img src={me} alt="me"/>
                    <div>
                        <p>
                            My name is Thanh Quang Doan. I am an international student from Vietnam, currently living in Hamilton
                            and studying <strong>Software Development</strong> at Mohawk College. My career goal is to begin as a <strong>Front-end Developer</strong> and
                            gradually expand into <strong>Full-stack Development</strong>, <strong>Mobile App Development</strong>, <strong>Web Application Development</strong>,
                            or <strong>Game Development</strong>.
                        </p>
                        <p>
                            Although I do not yet have practical experience in IT or Software Development, I am actively studying in college
                            and continuously improving my skills through self-learning. In my free time, I also practice problem-solving by
                            completing coding challenges on <strong>LeetCode</strong>.
                        </p>
                        <p>
                            Before entering the IT field, I had no programming background. I earned a degree in <strong>English Language</strong> in Vietnam,
                            specializing in <strong>Translation and Interpretation</strong>, with experience translating notarized documents.
                            I also worked briefly as <strong>An Assistant to the Director of An International School</strong>. Later, I transitioned into a role
                            as a <strong>Construction Project Illustrator</strong> at a Japanese company, where I challenged myself in a new field
                            while applying my self-studied Japanese language skills.
                        </p>
                        <p>
                            Now, I am fully committed to pursuing Software Development, driven by a strong interest in technology and programming.
                            I have been familiar with computers since I was young, so, learning and applying new IT knowledge
                            has always felt natural and enjoyable for me.
                        </p>
                        <p>
                            To learn more about me, please have a look at my portfolio, which I built using HTML, CSS, React, and Tailwind CSS.
                            Both React and Tailwind CSS are technologies that I learned independently without any formal training,
                            I hope you will kindly understand if there are any imperfections, and I really appreciate if there is any
                            feedback and opportunities to improve. I am always eager to learn, refine my skills, and grow as a developer.
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
                            There is a ten-year gap between my academic programs because, after completing my undergraduate degree in my home country,
                            I entered the workforce to support myself and my family. After a decade of working,
                            I developed a strong desire to continue my education in a different discipline. My long-standing interest in
                            technology and information systems led me to pursue further studies abroad, and I chose Mohawk College to begin this transition.
                        </p>
                    </div>
                </section>
            )}

            {page === 'work-experience' && (
                <section className="work-experience-section">
                    <h2>Work Experience</h2>
                    <div>
                        <p>
                            After graduating with a degree in English Language, I worked in various roles that allowed me to develop a diverse skill set.
                            My first role was as a translator, where I honed my language skills and attention to detail because I mainly worked on paper documents, and it required high accuracy.
                            I then transitioned to an assistant role at an international school, where I gained organizational and communication skills.
                            Later, I took on a position as a technical illustrator for construction drawings at a Japanese company.
                        </p>
                        <h3>VIET UY TIN CO., LTD.</h3>
                        <ul className="vietuytin-work">
                            <li>Position: Translator</li>
                            <li>Years of work: 2015 - 2019</li>
                            <li>Responsibilities: Translating notarized office documents between English and Vietnamese with high accuracy.</li>
                        </ul>
                        <h3>THE ASIAN INTERNATIONAL SCHOOL</h3>
                        <ul className="asian-school-work">
                            <li>Position: Assistant to the Director</li>
                            <li>Years of work: 2019 - 2021</li>
                            <li>Responsibilities: Assisting the Director with administrative tasks and communication with parents and staffs.</li>
                        </ul>
                        <h3>YDR VIETNAM CO., LTD. - A branch of Yuasa Design Room Co., Ltd.</h3>
                        <ul className="ydr-work">
                            <li>Position: Technical Illustrator for Construction Drawings</li>
                            <li>Years of work: 2021 - 2024</li>
                            <li>Responsibilities: Drawing the detailed technical illustrations for construction projects, ensuring accuracy and compliance with industry standards.</li>
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
                                <img src={tailwindCSS} alt="Tailwind CSS"/>
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
                            </div>
                        </div>
                        <div className="soft-skills">
                            <h3>SOFT SKILLS</h3>
                            <ul className="soft-skills-list">
                                <li>Effective time management and ability to meet deadlines</li>
                                <li>Proven ability to work under pressure</li>
                                <li>Adaptable and quick learner across different fields</li>
                                <li>Problem-solving with fast response in dynamic situations</li>
                                <li>High attention to detail and accuracy</li>
                                <li>Strong work ethic and sense of responsibility</li>
                                <li>Quick to adapt and communicate effectively within new teams and environments</li>
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