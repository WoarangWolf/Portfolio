import './sidebar.css';

function Sidebar({ setPage }) {
    return(
        <aside className="sidebar">
            <div className="profile-picture">
                <img src="/images/avatar.png" alt="that's me"/>
            </div>
            <div className="profile-info">
                <p>Thanh Quang, Doan</p>
                <ul className="profile-details">
                    <li><a href="#intro" onClick={() => setPage('introduction')}>Introduction</a></li>
                    <li><a href="#edu" onClick={() => setPage('education')}>Education</a></li>
                    <li><a href="#workexp" onClick={() => setPage('work-experience')}>Work Experience</a></li>
                    <li><a href="#hobbies" onClick={() => setPage('hobbies')}>Hobbies</a></li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar