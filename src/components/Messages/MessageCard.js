import React from 'react'
import { Typography, Card, List, ListItem, ListItemText } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import TextsmsIcon from '@material-ui/icons/Textsms'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'



const styles = () => ({
    card: {
        margin: '10px 50px 50px 50px',
        width: '500px'
    },
    title: {
        margin: '5px 0 -10px 5px',
        fontSize: '20px'
    }
    
})
function MessageCard(props) {
    const { classes } = props
    return (
        <div className={classes.root} style={{margin: '10px 0 0 0'}}>
            <div style={{display:'inline-flex', margin: '0 0 0 50px'}}>                    
                <AccountCircleIcon style={{ fontSize: 40 }}/>
                <Typography className={classes.title}>
                    {props.item.name}
                </Typography>
            </div>
            <Card className={classes.card}>
            <List dense={true}>
                <ListItem>
                    <ListItemText primary={"Most distinguishing words"} primaryTypographyProps={{style: {fontSize:'18px'}}}/>
                </ListItem>
            {
               props.item && props.item.monograms.map( word => (
                <ListItem>
                    <TextsmsIcon fontSize='inherit' style={{marginRight:'5px'}}/>
                    <ListItemText primary={word.word}/>
                </ListItem>
               ))
            }
            </List>
            <List dense={true}>
                <ListItem>
                <ListItemText primary={"Most distinguishing 2-word phrases"} primaryTypographyProps={{style: {fontSize:'18px'}}}/>
                </ListItem>
            {
               props.item && props.item.bigrams.map( word => (
                <ListItem>
                    <TextsmsIcon fontSize='inherit' style={{marginRight:'5px'}}/>
                    <ListItemText primary={word.word}/>
                </ListItem>
               ))
            }
            </List>
            </Card>
        </div>
    )
}

export default withStyles(styles)(MessageCard);