import React from 'react';
import Header from './Header.js'
import Messages from './Messages/Messages'
import Dropzone from './Dropzone.js'
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  absolute: {
    position: 'absolute',
  }
  
})

function App() {
  return (
    <React.Fragment>
      <Header title="Hello World" className="absolute"/>
      <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: '#f0f3f6'}}>
            <div style={{
              margin: '50px 0 0 0'
            }}>
                <Dropzone className="absolute" />
                <Messages className="absolute"/>
              </div>        
      </div>
    </React.Fragment>

  )
}

export default withStyles(styles)(App);
