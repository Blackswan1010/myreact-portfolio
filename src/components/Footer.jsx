import './Footer.css';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        background: '#9395D3',
        gap: '2%',
        position: 'fixed',
        bottom: 0,
        width: '25%',
        height: '50px',
        borderRadius: '4rem 4rem 0 0',
        margin: '0 0 0 37%',
    },
    image: {
        width: '40px',
        height: '40px',
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