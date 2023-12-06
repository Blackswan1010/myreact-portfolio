const styles = {
    header: {
        background: '#B3B7EE',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '1.2rem',
        color: 'white',
        padding: '2% 20px',
        justifyContent: 'center',
        width: '100%',
        borderRadius: '0 0 50rem 50rem',
    },
    content:{
        margin: '0 0 0 20%',
        padding: '2% 0%',
        textShadow: '0px 0px 5px black',
    },
    image: {
        width: '10%',
        borderRadius: '50rem',
        justifyContent: 'right',
        boxShadow: '0px 0px 3px black',
    }
}

function Header() {
    return (
        <header style={styles.header}>
            <h1 style={styles.content}> Anthony <img src="./img/sleep-kirby.gif" style={styles.image}/></h1>
        </header>);
}

export default Header;