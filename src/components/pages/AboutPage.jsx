const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        background: '#9a74db',
        height: '100%',
    },
    image: {
        width: '100px',
        height: '100px',
        borderRadius: 100,
    },
    content: {
        margin: '0px 5%',
    },
    article:{
        margin: '0px 5%',
    }

}

function AboutPage() {
    return (
        <div style={styles.container}>
            <div>
                <img style={styles.image} src="/public/img/my-pic.jpg" />
            </div>
           
            <div style={styles.content}>
                <h1>About Me</h1>
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