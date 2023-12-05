import { Link, useLocation } from 'react-router-dom';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'right',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'right',
        background: '#9a74db',
        minHeight: 50,
        lineHeight: 3.5,
        color: 'white',
        padding: '0 3%',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '2rem',
    },
    list: {
        listStyle: 'none',
        margin: '0 20px',
    }

}

function Navigation() {

    const currentPage = useLocation().pathname;

    return (
        <div style={styles.container}>
            <ul style={styles.content}>
                <li style={styles.list}>
                    <Link to="/about" style={styles.link}>
                        <h2 className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}>About Me</h2>
                    </Link>
                </li>
                <li style={styles.list}>
                    <Link to="/portfolio" style={styles.link}> 
                        <h2 className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</h2>
                    </Link>
                </li>
                <li style={styles.list}>
                    <Link to="/contact" style={styles.link}>
                        <h2 className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>Contact Me</h2>
                    </Link>
                </li>
                <li style={styles.list}>
                    <Link to="/resume" style={styles.link}>
                        <h2 className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>Resume</h2>
                    </Link>
                </li>
            </ul>
        </div>

    );
}

export default Navigation;
