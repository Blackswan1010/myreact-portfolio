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
        fontSize: '1.2rem',
        color: 'white',
        padding: '0 4%',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        margin: '0 20px',
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



// <div style={styles.container}>
//     <div style={styles.content}>
//         <a href="" style={styles.link}><h2>About Me</h2></a>
//         <a href="" style={styles.link}><h2>Projects</h2></a>
//         <a href="" style={styles.link}><h2>Resume</h2></a>
//         <a href="" style={styles.link}><h2>Contact Me</h2></a>
//     </div>
// </div>