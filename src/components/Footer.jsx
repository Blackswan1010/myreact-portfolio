
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        background: '#9a74db',
        gap: '2%',
        position: 'absolute',
        bottom: 0,
    },
    image: {
        width: '50px',
        height: '50px',
    },
}

function Footer() {
    return (
        <footer style={styles.container}>
            <a href="https://github.com/Blackswan1010"><img style={styles.image} src="./public/img/github.png" alt="icon of github"/></a>
            <a href="https://www.linkedin.com/in/anthony-nguyen-32261526a/"><img style={styles.image} src="./public/img/linkedIn.png" alt="icon of linkedin"/></a>
        </footer>
    );
}

export default Footer;