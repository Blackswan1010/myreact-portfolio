const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        background: '#9a74db',
        gap: '2% 8%',
        position: 'relative',
        bottom: 0,
        width: '100%',
        height: '100%',
    },
    card: {
        width: '4px',
        height: '50px',
    },
    image: {
        width: '50px',
        height: '50px',
    },

}

function PortfolioPage() {
    return (
        <div style={styles.container}>
            <h3>Portfolio Page</h3>
        </div>
    );
}

export default PortfolioPage;