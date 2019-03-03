import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {observer, inject} from 'mobx-react';
import style from '../styles/personstyle'
const styles= style;



@inject("personstore")
@observer
class TextFields extends React.Component {
  constructor(props){
  super(props);
  }
 
   render() {

    const {classes,personstore} = this.props
    return (
      <form className={classes.container} method='POST' onSubmit={personstore.saveForm}>
        <TextField
          id="standard-name"
          label="Name"
          name="name"
          className={classes.textField}
          value={personstore.name}
          onChange={personstore.updateProperty}
          margin="normal"
        />
     <TextField
          id="standard-name"
          label="Age"
          name="age"
          className={classes.textField}
          value={personstore.age}
         onChange={personstore.updateProperty}
          margin="normal"
        />

     <TextField
          id="standard-name"
          label="DOB"
          name="dob"
          className={classes.textField}
          value={personstore.dob}
         onChange={personstore.updateProperty}
          margin="normal"
        />
        
     <TextField
          id="standard-name"
          label="Education"
          name="education"
          className={classes.textField}
          value={personstore.education}
          onChange={personstore.updateProperty}
          margin="normal"
        />
        
     <TextField
          id="standard-name"
          label="date"
          name="date"
          className={classes.textField}
          value={personstore.date}
          onChange={personstore.updateProperty}
          margin="normal"
        />

   <Button variant="contained" color="primary" className={classes.button}  type='submit'>
        Submit
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        reset
      </Button>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (TextFields);