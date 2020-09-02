import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import SeniorExec from "./SeniorExec.js";
import { makeStyles } from "@material-ui/core/styles";
import SeniorExecText from "./SeniorExecText";
import SmallSeniorExec from "./SmallSeniorExec";

import SmallSeniorExecImgHover from "../Images/senior/Latafat_Faran2.jpg";
import SmallSeniorExecImg from "../Images/senior/Jalaluddin_Uzma.jpg";
import SmallSeniorExecImg2 from "../Images/senior/Diop_Cheikh.jpeg";
import SmallSeniorExecBottom from "./SeniorExecSmallBottom";
import SeniorExecImg from "../Images/senior/Salman_Zahid (1).jpg";
import SeniorExecImgHover from "../Images/senior/Salman_Zahid2.jpg";
import SeniorExecImg2 from "../Images/senior/Hali.jpg";

const useStyles = makeStyles(() => ({
  background_lg: {
    backgroundColor: "white",
    "@media (max-width: 1000px)": { display: "None" },
  },
  background_md: {
    backgroundColor: "white",
    "@media (max-width: 550px)": { display: "None" },
    "@media (min-width: 1000px)": { display: "None" },
  },
  background_sm: {
    backgroundColor: "white",
    "@media (min-width: 550px)": { display: "None" },
  },
  seniorexec: {
    paddingTop: "10vh",
    backgroundColor: "white",
  },
  grid: {
    paddingLeft: "15%",
    paddingRight: "15%",
    justifyContent: "center",
    alignItems: "start",
    paddingBottom: "10vh",
  },
}));

let images = [
  { photo: { SmallSeniorExecImgHover } },
  { photo: { SmallSeniorExecImg } },
  { photo: { SmallSeniorExecImg2 } },
  { photo: { SmallSeniorExecBottom } },
  { photo: { SeniorExecImg } },
  { photo: { SeniorExecImgHover } },
  { photo: { SeniorExecImg2 } },
];

function shuffledImages() {
  while (images.length < 4) {
    let num = Math.floor(Math.random() * 4);
    if (num !== images) {
      images.push(num);
    }
    return images;
  }
  let execImages = [];
  for (let i in images) {
    execImages.push(execImages[i]);
    console.log(execImages)
  }
  return execImages;
}

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const classes = useStyles();
    return <Component {...props} classes={classes} />;
  };
}

class SeniorExecGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
      phone: "",
      desktop: "None",
      displayImages: [],
    };
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  componentDidMount() {
    this.setState({
      displayImages: shuffledImages(),
    });
  }

  forceUpdateHandler() {
    this.forceUpdate();
  }

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.seniorexec}>
        <div className={classes.background_lg}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justify="center"
            className={classes.grid}
          >
            <Grid
              container
              item
              xs={8}
              spacing={0}
              alignItems="center"
              justify="center"
            >
              <Grid
                container
                item
                xs={12}
                spacing={4}
                alignItems="center"
                justify="center"
              >
                <Grid
                  container
                  item
                  xs={6}
                  alignItems="center"
                  justify="center"
                >
                  <SeniorExec
                    name_text="Salman Zahid"
                    extra_text="President & CEO of Green Shield Canada"
                    id="theimage"
                  />
                </Grid>
                <Grid
                  container
                  item
                  xs={6}
                  alignItems="center"
                  justify="center"
                >
                  <SeniorExec
                    name_text="Salman Zahid"
                    extra_text="President & CEO of Green Shield Canada"
                    id="theimage"
                    image={this.state.displayImages[0]}
                  />
                </Grid>
                <SeniorExecText appContext={this.props.appContext} />
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={4}
              alignItems="flex-end"
              justify="flex-end"
            >
              <SmallSeniorExec
                name_text="Latafat Faran"
                extra_text="Executive Vice President at Core Development Group"
                id="theimage"
              />
              <SmallSeniorExecBottom
                name_text="Latafat Faran"
                extra_text="Executive Vice President at Core Development Group"
                id="theimage"
              />
            </Grid>
          </Grid>
        </div>

        <div className={classes.background_md}>
          <Grid
            container
            item
            xs={12}
            spacing={0}
            alignItems="center"
            justify="center"
            className={classes.grid}
          >
            <Grid
              container
              item
              xs={6}
              alignItems="flex-end"
              justify="flex-end"
            >
              <SmallSeniorExec
                name_text="Latafat Faran"
                extra_text="Executive Vice President at Core Development Group"
                id="theimage"
              />
            </Grid>
            <Grid
              container
              item
              xs={6}
              spacing={0}
              alignItems="center"
              justify="center"
            >
              <SmallSeniorExecBottom
                name_text="Latafat Faran"
                extra_text="Executive Vice President at Core Development Group"
                id="theimage"
              />
            </Grid>
            <SeniorExecText appContext={this.props.appContext} />
          </Grid>
        </div>

        <div className={classes.background_sm}>
          <Grid
            container
            item
            xs={12}
            spacing={0}
            alignItems="center"
            justify="center"
            className={classes.grid}
          >
            <Grid
              container
              item
              xs={12}
              alignItems="flex-end"
              justify="flex-end"
            >
              <SmallSeniorExec
                name_text="Latafat Faran"
                extra_text="Executive Vice President at Core Development Group"
                id="theimage"
              />
            </Grid>
            <SeniorExecText appContext={this.props.appContext} />
          </Grid>
        </div>
      </div>
    );
  }
}

SeniorExecGrid = withMyHook(SeniorExecGrid);
export default SeniorExecGrid;
