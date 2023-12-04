
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        background: '#9a74db',
    },
    image: {
        width: '50px',
        height: '50px',
    },
}

function Footer() {
    return (
        <footer style={styles.container}>
            <a href=""><img style={styles.image} src="../public/img/github.png" alt=""/></a>
            <a href=""><img style={styles.image} src="../public/img/linkedIn.png" alt=""/></a>
        </footer>
    );
}

export default Footer;