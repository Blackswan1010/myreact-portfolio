const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    card: {
        width: '30%',
        height: '30%',
        background: '#9a74db',
        color: 'white',
        padding: '0 20px',
        alignItems: 'left',
    },
}

function Project(){
    return (
        <div style= {styles.container}>
            <div style= {styles.card}>
                <h1>Project</h1>
            </div>
            <div style= {styles.card}>
                <h1>Project</h1>
            </div>
            <div style= {styles.card}>
                <h1>Project</h1>
            </div>
            <div style= {styles.card}>
                <h1>Project</h1>
            </div>
        </div>
    );
}

export default Project;