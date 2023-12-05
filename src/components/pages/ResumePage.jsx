const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        background: '#9a74db',
        gap: '2% 8%',
        position: 'relative',
        bottom: 0,
        width: '100%',
        height: '100%',
        listStyleType: 'none',
    },

}


function Resume() {
    return (
        <div style={styles.container}>
            <h1>Resume</h1>
            <h2>Front-end Proficiencies:</h2>
            <br/>
            <li>HTML,</li>
            <li>CSS,</li>
            <li>JaveScript,</li>
            <li>jQuery,</li>
            <li>Responsive design,</li>
            <li>React,</li>
            <li>BootStrap,</li>

            <br/>
            <br/>

            <h2>Back-end Proficiencies:</h2>
            <br/>
            <li>APIs,</li>
            <li>Node,</li>
            <li>Express,</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>Rest</li>
            <li>GraphQL</li>
        </div>
    );
}

export default Resume;