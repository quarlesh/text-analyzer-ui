import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MessageCard from './MessageCard'
import data from '../../data.js'
const styles = () => ({
    
    
})

function Messages(props) {
    const { classes } = props
    
    return (
        <div className={classes.root} style={{display:'inline-flex',
            justifyContent: "center",
            alignItems: "center",
            flexWrap:'wrap'}}>
           {
               data.items.map( item => (
                   <MessageCard item={item} />
               ))
           }
        </div>
    )
}

export default withStyles(styles)(Messages);