
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        background: '#9a74db',
        gap: '2%',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '100px',
    },
    image: {
        width: '50px',
        height: '50px',
    },
}

function Footer() {
    return (
        <footer style={styles.container}>
            <a href="https://github.com/Blackswan1010"><img style={styles.image} src="/img/github.png" alt="icon of github"/></a>
            <a href="https://www.linkedin.com/in/anthony-nguyen-32261526a/"><img style={styles.image} src="/img/linkedIn.png" alt="icon of linkedin"/></a>
        </footer>
    );
}

export default Footer;