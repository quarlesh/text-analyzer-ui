import React from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {useDropzone} from 'react-dropzone';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = {
    container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: '0 0 50px 0'
    }
}
function Dropzone(props) {
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        acceptedFiles
      } = useDropzone({
        accept: '.xml'
      });
    const {classes} = props
      return (
        <div className={classes.container}>
          <div {...getRootProps({className: "dropzone"})} style={{
            border: 'dashed grey 1px',
            width: '50%',
            height: '200px',
            }}>
            <input {...getInputProps()}/>
              {!isDragActive && (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: '50px 0 0 0'
                    }}>
                  <CloudUploadIcon style={{fontSize:'50px'}}/>
                  <Typography variant="body1">Click or drag to upload files</Typography>
                </div>)}
          </div>
        </div>
      )
  }
export default withStyles(styles)(Dropzone);
