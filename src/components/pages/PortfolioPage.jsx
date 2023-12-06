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
                    <h4 style={styles.projectHead}>Horiseon Refactor <a href='https://github.com/Blackswan1010/horiseon-refactor'><img src="/img/github.png" style={styles.icon} /></a></h4>
                    <img src="/img/digital-marketing-meeting.jpg" alt="placeholder" style={styles.image} />
                </div>
                <div style={styles.card}>
                    <h4 style={styles.projectHead}>Password Generator <a href='https://github.com/Blackswan1010/password-generator'><img src="/img/github.png" style={styles.icon} /></a></h4>
                    <img src="/img/password-gen.jpg" style={styles.image} />
                </div>
                <div style={styles.card}>
                    <h4 style={styles.projectHead}>Javascript Quiz <a href='https://github.com/Blackswan1010/javascript-quiz'><img src="/img/github.png" style={styles.icon} /></a></h4>
                    <img src="/img/js-quiz.jpg" style={styles.image} />
                </div>
                <div style={styles.card}>
                    <h4 style={styles.projectHead}>Day Scheduler <a href='https://github.com/Blackswan1010/day-scheduler'><img src="/img/github.png" style={styles.icon} /></a></h4>
                    <img src="/img/day-scheduler.jpg" style={styles.image} />
                </div>
                <div style={styles.card}>
                    <h4 style={styles.projectHead}>Team Project 1 - Scenery Finder <a href='https://github.com/eviehoang/scenery-finder'><img src="/img/github.png" style={styles.icon} /></a></h4>
                    <img src="/img/scenery-finder.png" style={styles.image} />
                </div>
                <div style={styles.card}>
                    <h4 style={styles.projectHead}>Readme Generator <a href='https://github.com/Blackswan1010/readme-maker'><img src="/img/github.png" style={styles.icon} /></a></h4>
                    <img src="/img/readme-gen.jpg" style={styles.image} />
                </div>
                <div style={styles.card}>
                    <h4 style={styles.projectHead}>Employee Tracker <a href='https://github.com/Blackswan1010/employee-tracker'><img src="/img/github.png" style={styles.icon} /></a></h4>
                    <img src="/img/employee-tracker.jpg" style={styles.image} />
                </div>
                <div style={styles.card}>
                    <h4 style={styles.projectHead}>PWA Text Editor <a href='https://github.com/Blackswan1010/text-editor'><img src="/img/github.png" style={styles.icon} /></a></h4>
                    <img src="/img/jate.jpg" style={styles.image} />
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;