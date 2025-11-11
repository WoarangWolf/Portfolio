import './content.css';

function Content({page}) {
    return(
        <div className="content">
            {page === 'introduction' && (
                <section>
                    <h2>Introduction</h2>
                    <p>Introduction here</p>
                    <p>Here is my content.</p>
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