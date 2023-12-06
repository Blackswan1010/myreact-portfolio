const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap',
        background: '#9a74db',
        gap: '2% 8%',
        position: 'relative',
        width: '100%',
        height: '100%',
        listStyleType: 'none',
    },

}


function Resume() {
    return (
        <div style={styles.container}>
            <h3>Resume</h3>
            <h4>Front-end Proficiencies:</h4>
            <li>HTML</li>
            <li>CSS</li>
            <li>JaveScript</li>
            <li>jQuery</li>
            <li>Responsive design</li>
            <li>React</li>
            <li>BootStrap</li>

            <br />

            <h4>Back-end Proficiencies:</h4>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Rest</li>
            <li>GraphQL</li>
        </div>
    );
}

export default Resume;