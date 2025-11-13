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
                <section>
                    <h2>Education</h2>
                    <p>Education here</p>
                </section>
            )}

            {page === 'work-experience' && (
                <section>
                    <h2>Work Experience</h2>
                    <p>Work Experience here</p>
                </section>
            )}

            {page === 'hobbies' && (
                <section>
                    <h2>Hobbies</h2>
                    <p>Hobbies here</p>
                </section>
            )}
        </div>
    )
}

export default Content