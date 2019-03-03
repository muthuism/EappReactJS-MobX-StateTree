import React, {Component} from 'react';
import PropTypes  from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListDividers from './DividerView';


const styles = {
  root: {
    flexGrow: 1,
   
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
class Header  extends Component{
constructor(){

super();
 
this.callListDiv=this.callListDiv.bind(this)
this.listdivide=null;

} 

 callListDiv(){

  this.setState({ listdivide: <ListDividers /> });
console.log("CLick called")
  return listdivide;
  }
render (){
   
  //const { classes } = styles;
  return (  <React.Fragment>
   
      <AppBar position="static" className={this.props.root}>
        <Toolbar>
          <IconButton className={this.props.classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon onClick={this.callListDiv} />
          </IconButton >
          <Typography variant="h6" color="inherit" className={this.props.classes.grow}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      </React.Fragment>
  );




}

}Header.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Header)


