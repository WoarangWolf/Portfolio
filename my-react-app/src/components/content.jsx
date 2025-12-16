import './content.css';
import { greeting } from './greeting.js';


function Content({page}) {
    return(
        <div className="content">
            {page === 'introduction' && (
                <section className="introduction-section">
                    <h2>{greeting()}</h2>
                    <img src="/images/officeboy.png" alt="greeting"/>
                    <div>
                        <p>
                            Welcome to my portfolio! I'm excited to share my journey, skills, and passions with you.
                        </p>
                        <p>
                            My name is Thanh Quang Doan, and I am an international student from Vietnam, currently living and studying in Canada.
                            I am pursuing a major in <strong>Software Development</strong>, with the goal of becoming a <strong>Front-end Developer</strong> first,
                            and later expanding into <strong>Full-stack Developer</strong>, <strong>Mobile APp Development</strong>,
                            <strong>Web Application Development</strong>, or even <strong>Game Development</strong>.
                        </p>
                        <p>
                            Although I do not yet have practical experience in IT or Software Development, I am actively studying in college
                            and continuously exploring additional knowledge on my own. I also practice problem-solving by
                            completing coding challenges on <strong>LeetCode</strong> whenever I have free time.
                        </p>
                        <p>
                            Before studying IT, I had no background in programming. I graduated with a degree in <strong>English Language</strong> in
                            my home country, specializing in <strong>Translation and Interpretation</strong>, mainly translating notarized office documents.
                            There was also a short period of time that I was working as an assistant for a Director of an International School.
                            Later on, I switched to working as an illustrator for construction projects at a Japanese Company,
                            as I wanted to challenge myself in a new field and I had basic Japanese language skills as well by self-studying at that time.
                        </p>
                        <p>
                            Now, I am fully committed to pursuing Software Development because I have a strong interest in technology and programming.
                            I have been familiar with computers since I was young, so learning, exploring, and applying new IT knowledge
                            has always felt natural and enjoyable for me.
                        </p>
                        <p>
                            To learn more about me, please have a look at my portfolio, which I built using HTML, CSS, React, and Tailwind CSS.
                            Both React and Tailwind CSS are technologies I learned independently without any formal training,
                            so I hope you will kindly understand if there are any imperfections. I am always eager to improve,
                            correct mistakes, and continue learning.
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
                        </ul>
                    </div>
                    <div>
                        <p>
                            There is a ten-year gap between my academic programs because, after completing my undergraduate degree in my home country,
                            I entered the workforce to support myself and my family. During this period, I gained experience
                            both in roles related to my major and in new fields where I received on-the-job training. After a decade of working,
                            I developed a strong desire to continue my education in a different discipline. My long-standing interest in
                            technology and information systems led me to pursue further studies abroad, and I chose Mohawk College to begin this transition.
                        </p>
                        <p>
                            I am committed to developing the skills and knowledge necessary to succeed in the IT industry.
                            My dedication to continuous learning, combined with my passion for technology and programming, drives me to overcome challenges
                            and adapt quickly. Further details about my professional background can be found in the Work Experience section.
                        </p>
                        <p>
                            Additionally, I previously studied Japanese independently for over six months and attained the JLPT N4 certificate.
                            This self-directed learning enabled me to secure a position at a Japanese company despite not having prior experience
                            in technical illustration for construction drawings. Due to financial responsibilities,
                            I had to set aside my Japanese studies and focus entirely on learning and performing in a new field—technical illustration
                            for construction drawings. Through on-the-job training and self-directed learning, I was able to adapt quickly and
                            carry out the role effectively. This experience reinforces my confidence that I can learn, adapt,
                            and excel in the IT field as well.
                        </p>
                    </div>
                </section>
            )}

            {page === 'work-experience' && (
                <section  className="work-experience-section">
                    <h2>Work Experience</h2>
                    <div>
                        <p>
                            After graduating with a degree in English Language, I worked in various roles that allowed me to develop a diverse skill set.
                            My first role was as a translator, where I honed my language skills and attention to detail because I mainly worked on paper documents, and it required high accuracy.
                            I then transitioned to an assistant role at an international school, where I gained organizational and communication skills.
                            Later, I took on a position as a technical illustrator for construction drawings at a Japanese company.
                        </p>
                        <p>
                            Here are some details about my work experience:
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

            {page === 'hobbies' && (
                <section className="hobbies-section">
                    <h2>Hobbies</h2>
                    <div>
                        <p>
                            In my free time, I enjoy a variety of hobbies that help me relax and stay creative. Some of my favorite activities include:
                        </p>
                        <ul className="hobbies-list">
                            <li>Singing, and, sometimes, playing guitar</li>
                            <li>Learning some interesting random knowledge/articles</li>
                            <li>Reviewing & practicing programming languages that I have learned</li>
                            <li>Playing some games to relax and have fun</li>
                        </ul>
                    </div>
                    <div>

                    </div>
                </section>
            )}
        </div>
    )
}

export default Content