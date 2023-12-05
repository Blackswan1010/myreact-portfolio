const styles = {
    container: {
        display: 'flex',
        justifyContent: 'right',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        background: '#9a74db',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '1.2rem',
        color: 'white',
        padding: '0 20px',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        margin: '0 20px',
    },

}

function Navigation() {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <a href="" style={styles.link}><h2>About Me</h2></a>
                <a href="" style={styles.link}><h2>Projects</h2></a>
                <a href="" style={styles.link}><h2>Resume</h2></a>
                <a href="" style={styles.link}><h2>Contact Me</h2></a>
            </div>
        </div>
    );
}

export default Navigation;