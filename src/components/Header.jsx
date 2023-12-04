const styles = {
    header: {
        background: '#9a74db',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '1.2rem',
        color: 'white',
        padding: '0 20px',
        alignItems: 'left',
    },
}

function Header() {
    return (
        <header style={styles.header}>
            <h1>Anthony</h1>
        </header>);
}

export default Header;