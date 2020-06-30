import React, {Component} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
}));

function withMyHook(Component) {
    return function WrappedComponent(props) {
        const classes = useStyles();
        return <Component {...props} classes={classes}/>
    }
}

class JobPostingCard extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div>
        <div style={{width: '300px', height: '140px', borderStyle: 'solid', marginBottom: '20px'}}>
          <p>JOB POSTING CARD</p>
        </div>
      </div>
    )
  }
}

JobPostingCard = withMyHook(JobPostingCard);
export default JobPostingCard;
