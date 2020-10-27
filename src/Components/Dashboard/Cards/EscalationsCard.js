import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import image from "../../Images/faceShot/pic1.png";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatTypes from "../ChatTypes";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Toolbar from "@material-ui/core/Toolbar";
import close from "../../Images/close.png";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

import AWS from "aws-sdk";
require('dotenv').config();
// const config = require('config');

//
// AWS.config.update({ region: "us-east-2" });
// Set credentials
// AWS.config.update({
  // region: 'us-east-2',
  // credentials: new AWS.SharedIniFileCredentials()
// });
// const SESConfig = {
//   apiVersion: "2010-12-01",
//   accessKeyId: "AKIASC7QFGYYT4ZUGMDZ",
//   accessSecretKey: "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",
//   region: "us-east-2"
// }

const credentials = new AWS.Credentials('AKIASC7QFGYYT4ZUGMDZ'
, 'nS6oL3vHfnEesXon0Q05VTYitCP4EHCBK4OJr9BS');

console.log(credentials);

// const accessKeyId = config.get('AWS.accessKeyId');
// const secretAccessKey = config.get('AWS.secretAccessKey');
// const region = config.get('AWS.region');
const accessKeyId = 'AKIASC7QFGYYT4ZUGMDZ';
const secretAccessKey = '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';
const region = 'us-east-2';


AWS.config.update(
    {
        accessKeyId,
        secretAccessKey,
        region
    }
);


// AWS.config.loadFromPath('./config.json');

console.log(process.env);
// console.log(SESConfig);
// console.log(process.env.AWS_ACCESS_KEY_ID);
// console.log(process.env.AWS_SECRET_ACCESS_KEY);
// AWS.config.update(SESConfig);
// AWS.config.update({region:'us-east-2'});



const useStyles = makeStyles((theme) => ({
  cardEscalation: {
    width: "95%",
    maxWidth: "500px",
    marginLeft: "5px",
    marginTop: "10px",
    height: "180px",
    marginBottom: "10px",
    borderRadius: "20px",
    backgroundColor: "#455E6A",
    color: "white",
    boxShadow: "0px 6px 6px #00000029",
  },
  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    margin: "auto",
    marginTop: "30px",
    marginLeft: "10px",
    marginRight: "20px",
    display: "inline-block",
  },
  image2: {
    width: "225px",
    height: "225px",
    borderRadius: "50%",
    margin: "auto",
    marginTop: "30px",
    marginLeft: "20px",
    marginRight: "20px",
    display: "inline-block",
  },
  title: {
    fontFamily: "myriad-pro, sans-serif",
    fontWeight: "bolder",
    width: "100%",
    textAlign: "center",
    paddingTop: "5px",
    fontSize: "20px",
    color: "white",
    margin: "0px",
    marginLeft: "5px",
    marginTop: "5px",
  },
  title2: {
    fontFamily: "myriad-pro, sans-serif",
    fontSize: "30px",
    width: "100%",
    textAlign: "left",
    paddingTop: "5px",
    color: "#7D7D7D",
    margin: "0px",
    marginLeft: "5px",
    marginTop: "15px",
  },
  subtitle: {
    fontFamily: "myriad-pro, sans-serif",
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    color: "white",
    margin: "0px",
    marginLeft: "5px",
    marginTop: "5px",
    marginBottom: "10px",
  },
  subtitle2: {
    fontFamily: "myriad-pro, sans-serif",
    fontWeight: "bold",
    width: "100%",
    textAlign: "left",
    color: "black",
    margin: "0px",
    marginLeft: "5px",
    marginTop: "5px",
  },
  name: {
    fontStyle: "italic",
    paddingRight: "5px",
    margin: "0px",
    marginTop: "5px",
  },
  date: {
    fontFamily: "myriad-pro, sans-serif",
    fontWeight: "bold",
    width: "100%",
    textAlign: "left",
    fontSize: "15px",
    color: "white",
    margin: "0px",
    float: "left",
  },
  date2: {
    fontFamily: "myriad-pro, sans-serif",
    fontWeight: "bold",
    width: "100%",
    textAlign: "left",
    fontSize: "15px",
    color: "black",
    margin: "0px",
    float: "left",
  },
  button_container: {
    alignItems: "flex-end",
    justify: "flex-end",
  },
  button: {
    textTransform: 'none',
    backgroundColor: "#A9A9A9",
    marginBottom:"1vh",
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:'1.5vh',
    borderRadius: 50,
    color: "#white",
    position: 'relative',
    display: 'block',
    '&:hover': {
      backgroundColor: "#F1F1F1",
      color: '#484848'
    },
    fontSize: '15px',
    fontWeight: 'bold',
    fontFamily: 'myriad-pro, sans-serif',
    paddingLeft: '75px',
    paddingRight: '75px'
  },
  bar: {
    width: "90%",
    textAlign: "right",
    marginLeft: "0%",
    marginTop: "1%",
    marginBottom: "1%",
    height: 1,
    paddingBottom: "0",
  },
  container: {
    display: "inline-block",
    // transform: "translate(0%, -65%)",
  },
  containerCard: {
    display: "inline-block",
    alignItems: "center",
  },
  company_icon: {
    width: "18px",
    height: "18px",
    marginRight: "15px",
  },
  outer_grid: {
    height: "180px",
  },
  toolbar: {
    height: "8vh",
    backgroundColor: "#455E6A",
    boxShadow: "0px 0px 0px",
    width: "100%",
  },
  closes: {
    position: "absolute",
    right: "5%",
  },
  button2: {
    textTransform: "none",
    backgroundColor: "#000000",
    marginBottom: "2%",
    marginRight: "auto",
    marginTop: "20px",
    borderRadius: 50,
    color: "#FFFFFF",
    position: "relative",
    display: "block",
    "&:hover": {
      backgroundColor: "#F1F1F1",
      color: "#484848",
    },
    fontSize: "15px",
    fontWeight: "bold",
    fontFamily: "myriad-pro, sans-serif",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  formControl: {
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const classes = useStyles();
    return <Component {...props} classes={classes} />;
  };
}

/**
 * This function will send an email using AWS's Simple Email Service
 * @param {object} data an object holding email information to be sent
 * @return {boolean} true or false depending on if sending the email was successful 
 */
async function sendEmail(data) {
  // Create sendEmail params
  var params = {
    Destination: {
      /* required */
      CcAddresses: [
        data.ccAddress,
        /* more items */
      ],
      ToAddresses: [
        data.toAddress,
        /* more items */
      ],
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Html: {
          Charset: "UTF-8",
          Data: data.body,
        },
        Text: {
          Charset: "UTF-8",
          Data: data.body,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: data.subject,
      },
    },
    Source: data.source /* required */,
  };

  // Create the promise and SES service object
  var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

  // Handle promise's fulfilled/rejected states
  sendPromise.then(
    function(data) {
      console.log(data.MessageId);
    }).catch(
      function(err) {
      console.error(err, err.stack);
      return false;
    });
    return true;
}

class EscalationsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      type: "",
      description: "",
      title: "",
    };
  }

/**
 * This function will handle the create escalation event.
 * 
 */
 handleEscalation = (event) => {
  // Build the email information object from state.
  let emailData = {};
  if(this.state.title !== null) {
    emailData.subject = "[ESCALATIONS] " + this.state.title; 
  } else {
    emailData.subject = "[ESCALATIONS] TITLE N/A"
  }

  if(this.state.type !== null){
    emailData.body = "Type:" + this.state.type;
  }

  if(this.state.description != null){
    emailData.body += "<br>Description<br>" + this.state.description;
  }

  // For now we're just going to hard code the address to mine
  emailData.ccAddress = 'ammarhaq13@gmail.com';
  emailData.toAddress = 'ammarhaq13@gmail.com';
  emailData.source = 'ammarhaq13@gmail.com';

  // Get and store data from where the escalation is being created.
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  let emailFrom = `${userProfile.given_name} ${userProfile.family_name} ${userProfile.email}`;
  
  if(emailFrom !== null){
    emailData.body += "<br><br>From:" + emailFrom;

  }
  // Keep track of current context of this for nested function
  const self = this;

  sendEmail(emailData).then( function(emailSendSuccess) {
    console.log(emailSendSuccess);
    // If we sent the email successfully, hide the modal.
    if(emailSendSuccess){
      // this.updateCloseNested();
      self.handleClose();
      } else {
    // Otherwise display an error
        
    }
  });
}
  openEscalation = (event) => {
    this.setState({
      open: true,
    });
  };

  handleClose = (event) => {
    this.setState({
      open: false,
    });
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          onClick={this.openEscalation}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Create Escalation
        </Button>

        <Dialog
          className={classes.translate}
          open={this.state.open}
          onClose={this.handleClose}
          scroll={"paper"}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          fullWidth={true}
          maxWidth={"md"}
          PaperProps={{
            style: { borderRadius: 12 },
          }}
        >
          <Toolbar className={classes.toolbar}>
            <div>
              <h2 style={{ margin: "0px", marginTop: "10px", color: "white" }}>
                Create Escalation
              </h2>
            </div>
            <img
              onClick={this.handleClose}
              className={classes.closes}
              style={{ width: "14px", height: "14px", cursor: "pointer" }}
              src={close}
              alt="Close button"
            />
          </Toolbar>

          <DialogContent>
            <DialogContentText
              id="scroll-dialog-description"
              component={"span"}
            >
              <Grid
                container
                item
                xs={3}
                spacing={0}
                alignItems="flex-start"
                justify="flex-start"
                style={{ marginBottom: "15px", marginTop: "10px" }}
              >
                <TextField
                  id="titleTextField"
                  variant="outlined"
                  label="Title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "title",
                    id: "titleTextField",
                  }}
                />
              </Grid>
              <Grid
                container
                item
                xs={3}
                spacing={0}
                alignItems="flex-start"
                justify="flex-start"
                style={{ marginBottom: "15px", marginTop: "10px" }}
              >
                {/* <span className={classes.subtitle2}>Type</span> */}

                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="typeLabel">Type</InputLabel>
                  <Select
                    labelId="typeLabel"
                    label="Type"
                    value={this.state.type}
                    onChange={this.handleChange}
                    id="typeSelect"
                    inputProps={{
                      name: "type",
                      id: "typeLabel",
                    }}
                  >
                    <MenuItem aria-label="None" value="" />
                    <MenuItem value={"abuse"}>Abuse</MenuItem>
                    <MenuItem value={"payment"}>Payment</MenuItem>
                    <MenuItem value={"query"}>Query</MenuItem>
                    <MenuItem value={"other"}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid
                container
                item
                xs={12}
                spacing={0}
                alignItems="flex-start"
                justify="flex-start"
                style={{ marginBottom: "15px", marginTop: "10px" }}
              >
                <TextField
                  fullWidth={true}
                  multiline
                  id="descriptionTextField"
                  variant="outlined"
                  label="Description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  inputProps={{
                    maxLength: 500,
                    style: { height: 200 },
                    name: "description",
                    id: "titleTdescriptionTextFieldextField",
                  }}
                />
              </Grid>
              <Grid
                container
                item
                xs={12}
                spacing={0}
                alignItems="flex-end"
                justify="flex-end"
              >
                <DialogActions style={{ marginRight: "5%" }}>
                  <Button
                    className={classes.button2}
                    variant="contained"
                    onClick={this.handleEscalation}
                  >
                    Create
                  </Button>
                </DialogActions>
              </Grid>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

EscalationsCard = withMyHook(EscalationsCard);
export default EscalationsCard;
