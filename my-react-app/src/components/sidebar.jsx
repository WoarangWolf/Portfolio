import './sidebar.css';
import aboutMe from "../assets/images/officeboy.png";
import education from "../assets/images/education.png";
import workEXP from "../assets/images/working.png";
import skills from "../assets/images/skills.png";
import projects from "../assets/images/project.png";


const profileImages = {
    "about-me": aboutMe,
    "education": education,
    "work-experience": workEXP,
    "skills": skills,
    "projects": projects
}

function Sidebar({ page, setPage }) {
    return(
        <aside className="sidebar">
            <div className="profile-info">
                <ul className="profile-details">
                    <li><button className={page === 'about-me' ? 'active' : ''} onClick={() => setPage('about-me')}>About Me</button></li>
                    <li><button className={page === 'education' ? 'active' : ''} onClick={() => setPage('education')}>Education</button></li>
                    <li><button className={page === 'work-experience' ? 'active' : ''} onClick={() => setPage('work-experience')}>Work Experience</button></li>
                    <li><button className={page === 'skills' ? 'active' : ''} onClick={() => setPage('skills')}>Skills</button></li>
                    <li><button className={page === 'projects' ? 'active' : ''} onClick={() => setPage('projects')}>Projects</button></li>
                </ul>
                <div className="profile-picture-div">
                    <img
                        key={page}
                        src={profileImages[page]} 
                        alt={page}
                    />
                </div>
            </div>
        </aside>
    )
}

export default Sidebar