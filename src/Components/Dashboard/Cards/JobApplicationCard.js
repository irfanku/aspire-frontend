import React, {Component} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  card: {
    width: '80%',
    maxWidth: '300px',
    height: '140px',
    borderStyle: 'solid',
    marginBottom: '20px',
    borderRadius: '20px'
  }
}));

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const classes = useStyles();
    return <Component {...props} classes={classes}/>
  }
}

class JobApplicationCard extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.card}>
        <p>JOB APPLICATION CARD</p>
      </div>
    )
  }
}

JobApplicationCard = withMyHook(JobApplicationCard);
export default JobApplicationCard;