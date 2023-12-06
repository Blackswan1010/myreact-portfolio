import projects from './ProjectsInfo';


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        background: '#9a74db',
        gap: '2% 8%',
        position: 'relative',
        bottom: 0,
        width: '100%',
        height: '100%',
    },
    card: {
        backgroundSize: '100%',
        backgroundPosition: 'center',
        backgroundClip: 'content-box',
        border: '6px solid white',
        height: '30%',
        width: '25%',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16) 0 3px 6px rgba(0, 0, 0, 0.23)',
        position: 'relative',
        margin: '0 auto',
        marginTop: '30px',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    icon: {
        width: '10%',
        height: '10%',
    },
    pageHead: {
        display: 'flex',
        marginLeft: '10%',
        textAlign: 'left',
    },
    projectHead: {
        textAlign: 'center',
    },

}


function PortfolioPage() {
    return (
        <div>
            <h3 style={styles.pageHead}>My Projects</h3>
            <div style={styles.container}>
                <div style={styles.card}>
                    <h4 style={styles.projectHead}>{projects.horiseon.title}
                        <a href={projects.horiseon.github}>
                            <img src="/img/github.png" style={styles.icon} />
                        </a>
                    </h4>
                    <img src={projects.horiseon.image} style={styles.image} />
                </div>
                <div style={styles.card}>
                    <h4 style={styles.projectHead}>{projects.pwGen.title}
                        <a href={projects.pwGen.github}>
                            <img src="/img/github.png" style={styles.icon} />
                        </a>
                    </h4>
                    <img src={projects.pwGen.image} style={styles.image} />
                </div>
                <div style={styles.card}>
                    <h4 style={styles.projectHead}>{projects.jsQuiz.title}
                        <a href={projects.jsQuiz.github}>
                            <img src="/img/github.png" style={styles.icon} />
                        </a>
                    </h4>
                    <img src={projects.jsQuiz.image} style={styles.image} />
                </div>
                <div style={styles.card}>
                    <h4 style={styles.projectHead}>{projects.dayScheduler.title}
                        <a href={projects.dayScheduler.github}>
                            <img src="/img/github.png" style={styles.icon} />
                        </a>
                    </h4>
                    <img src={projects.dayScheduler.image} style={styles.image} />
                </div>
                <div style={styles.card}>
                    <h4 style={styles.projectHead}>{projects.sceneryFinder.title}
                        <a href={projects.sceneryFinder.github}>
                            <img src="/img/github.png" style={styles.icon} />
                        </a>
                    </h4>
                    <img src={projects.sceneryFinder.image} style={styles.image} />
                </div>
                <div style={styles.card}>
                    <h4 style={styles.projectHead}>{projects.readmeGen.title}
                        <a href={projects.readmeGen.github}>
                            <img src="/img/github.png" style={styles.icon} />
                        </a>
                    </h4>
                    <img src={projects.readmeGen.image} style={styles.image} />
                </div>
                <div style={styles.card}>
                    <h4 style={styles.projectHead}>{projects.employeeTracker.title}
                        <a href={projects.employeeTracker.github}>
                            <img src="/img/github.png" style={styles.icon} />
                        </a>
                    </h4>
                    <img src={projects.employeeTracker.image} style={styles.image} />
                </div>
                <div style={styles.card}>
                    <h4 style={styles.projectHead}>{projects.textEditor.title}
                        <a href={projects.textEditor.github}>
                            <img src="/img/github.png" style={styles.icon} />
                        </a>
                    </h4>
                    <img src={projects.textEditor.image} style={styles.image} />
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;