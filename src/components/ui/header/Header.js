import React from 'react';
import Radium from 'radium';

const styles = {
    head: {
        textTransform: 'uppercase',
        fontFamily: 'Roboto, sans-serif'
    },

    title: {
        fontSize: '480%',
        fontWeight: 100,

        ':hover' : {
            color: '#aa66cc'
        }
    },

    tagline: {
        fontSize: '120%',
        ':hover' : {
            color: '#aa66cc'
        }
    },

    headerRule: {
        borderRadius: '50px',
        width: '80%',
        height: '1em',
        backgroundColor: '#aa66cc'
    }
}

const Header = () => {
    return(
        <div style={styles.head}>
            <h2 key="title" style={styles.title}><em>JavaScript Now</em></h2>
            <h4 key="tagline" style={styles.tagline}><em>Yummy JavaScript for You!</em></h4>
            <hr style={styles.headerRule} />
        </div>
    )
}

export default Radium(Header);