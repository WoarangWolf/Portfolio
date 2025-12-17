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
                    <li><button onClick={() => setPage('introduction')}>Introduction</button></li>
                    <li><button onClick={() => setPage('education')}>Education</button></li>
                    <li><button onClick={() => setPage('work-experience')}>Work Experience</button></li>
                    <li><button onClick={() => setPage('hobbies')}>Hobbies</button></li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar