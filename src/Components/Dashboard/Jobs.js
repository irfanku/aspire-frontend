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

class Jobs extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div>
        <div>
          <p>JOBS PAGE</p>
        </div>
      </div>
    )
  }
}

Jobs = withMyHook(Jobs);
export default Jobs;
