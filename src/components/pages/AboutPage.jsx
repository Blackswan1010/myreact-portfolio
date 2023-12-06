const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        background: '#9a74db',
        height: '100%',
        padding: '0 0 15% 0',
    },
    image: {
        display: 'flex',
        width: '150px',
        height: '150px',
        borderRadius: 100,
        margin: '10% 0 0 0',
    },
    header: {
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        margin: '0 10%',
        padding: '2%',
    },
    article:{
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        margin: '0px 10%',
    }

}

function AboutPage() {
    return (
        <div style={styles.container}>
            <div>
                <img style={styles.image} src="./img/my-pic.jpg" alt="Picture of Anthony" />
            </div>
            <div>
                <h3 style={styles.header}>About Me</h3>
                <p style={styles.article}> My passion for technology began at a young age, which made me the go-to person for computer-related
                    issues for family and friends. This interest led me to explore building computers, and understanding
                    their inner workings.
                    As my journey into technology began with curiousity, it has led me to realize that my passion lay in
                    coding & web development. </p>
            </div>
        </div>
    )
}

export default AboutPage;