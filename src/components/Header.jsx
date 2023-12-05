const styles = {
    header: {
        background: '#9a74db',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '1.2rem',
        color: 'white',
        padding: '0 20px',
        alignItems: 'left',
        justifyContent: 'left',
        width: '100%',
    },
    content:{
        margin: '0px 5%',
        padding: '1% 0%',
    },
}

function Header() {
    return (
        <header style={styles.header}>
            <h1 style={styles.content}> Anthony</h1>
        </header>);
}

export default Header;