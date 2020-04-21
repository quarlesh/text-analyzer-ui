import React from 'react';
import { AppBar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    appBar: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontSize: '26px',
        padding: '15px 0 10px 20px'
    },
    card: {
        margin: '10px 50px 50px 50px',
        width: '500px'
    },
    
})
function Header(props) {
    const { classes } = props
    return (
        <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
            Text Analyzer
        </AppBar>
        </div>
    )
}

export default withStyles(styles)(Header);