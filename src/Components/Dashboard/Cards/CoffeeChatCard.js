import React, {Component} from "react";
import {makeStyles} from "@material-ui/core/styles";
import image from "../../Images/faceShot/pic1.png";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChatTypes from '../ChatTypes';

const useStyles = makeStyles(() => ({
  cardOne: {
    width: '95%',
    maxWidth: '500px',
    margin: 'auto',
    height: '180px',
    marginBottom: '10px',
    borderRadius: '20px',
    textAlign: 'left',
    backgroundColor: '#B5A165',
    color: 'white',
  },
  cardFour: {
    width: '95%',
    maxWidth: '500px',
    margin: 'auto',
    height: '180px',
    marginBottom: '10px',
    borderRadius: '20px',
    textAlign: 'left',
    backgroundColor: '#455E6A',
    color: 'white',
  },
  cardInterview: {
    width: '95%',
    maxWidth: '500px',
    margin: 'auto',
    height: '180px',
    marginBottom: '10px',
    borderRadius: '20px',
    textAlign: 'left',
    // need designs for mock interview card
    backgroundColor: 'red',
    color: 'white',
  },
  cardBooked: {
    width: '95%',
    maxWidth: '500px',
    margin: 'auto',
    height: '180px',
    marginBottom: '10px',
    borderRadius: '20px',
    textAlign: 'left',
    backgroundColor: '#9D9D9D',
    color: 'white',
  },
  image:{
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    margin: 'auto',
    marginTop: '30px',
    marginLeft: '10px',
    marginRight: '20px',
    display: 'inline-block'
  },
  title: {
    fontFamily: 'myriad-pro, sans-serif',
    fontWeight: 'bolder',
    width: '100%',
    textAlign: 'left',
    paddingTop: '5px',
    fontSize: '20px',
    color: 'white',
    margin: '0px',
    marginLeft: '5px',
    marginTop: '5px'
  },
  subtitle: {
    fontFamily: 'myriad-pro, sans-serif',
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'left',
    color: 'white',
    margin: '0px',
    marginLeft: '5px',
    marginTop: '5px'
  },
  name: {
    fontStyle: 'italic',
    paddingRight: '5px',
    margin: '0px',
    marginTop: '5px'
  },
  company: {
    fontFamily: 'myriad-pro, sans-serif',
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'left',
    margin: '5px',
    color: 'white'
  },
  date: {
    fontFamily: 'myriad-pro, sans-serif',
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'left',
    fontSize: '10px',
    color: 'white',
    margin: '0px',
    float: 'left'
  },
  booked: {
    fontFamily: 'myriad-pro, sans-serif',
    fontWeight: 'bold',
    textAlign: 'right',
    margin: '5px',
    paddingTop: '5px',
    fontSize: '8px',
    color: 'white',
    float: 'right'
  },
  button_container: {
    alignItems: 'flex-end',
    justify: 'flex-end',
  },
  button: {
    fontSize: '8px',
    fontWeight: '400',
    borderRadius: 50,
    backgroundColor :'white',
    color: '#58595B',
    '&:hover': {
      backgroundColor: "#F1F1F1",
      color: '#484848'
    }
  },
  tag_container: {
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: '0.5px',
    borderRadius: 50,
    borderColor: 'white',
    margin: '5px',
    marginLeft: '0px'
  },
  tag: {
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingTop: '3px',
    paddingBottom: '3px',
    left: '15px',
    right: '15px',
    float: 'left',
    fontSize: '8px',
    fontWeight: '100',
    color: 'white',
    display: 'flex',
  },
  bar: {
    width: '90%',
    textAlign:'right',
    marginLeft: '0%',
    marginTop: '1%',
    marginBottom: '1%',
    height: 1,
    paddingBottom:'0'
  },
  container: {
    width: 'calc(95% - 140px)',
    display: 'inline-block',
    transform: 'translate(0%, -65%)'
  },
  company_icon: {
    width: '18px',
    height: '18px',
    marginRight: '15px'
  },
  outer_grid: {
    height: '180px'
  }
}));

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const classes = useStyles();
    return <Component {...props} classes={classes}/>
  }
}

class CoffeeChatCard extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className={this.props.data.booked ? classes.cardBooked : this.props.data.type === ChatTypes.oneOnOne ? classes.cardOne : this.props.data.type === ChatTypes.fourOnOne ? classes.cardFour : classes.cardInterview}>
        <img className={classes.image} src={image} alt={"Coffee Chat Card"}/>
        <div className={classes.container}>
          <Grid
            container
            item xs={12}
            spacing={0}
            alignItems="center"
            justify="flex-start"
            className={classes.outer_grid}
          >
            <Grid
              container
              item xs={12}
              spacing={0}
              alignItems="flex-start"
              justify="flex-start"
            >
              <h1 className={classes.title}>
                {this.props.data.type === ChatTypes.oneOnOne ? "One-on-One" : this.props.data.type === ChatTypes.fourOnOne ? "Four-on-One" : "Mock Interview"}
                {this.props.data.booked ? <span className={classes.booked}>booked</span> : ''}
              </h1>
              <p className={classes.subtitle}><span className={classes.name}>{this.props.data.name}</span> {this.props.data.title}</p>
              <span className={classes.subtitle}><span><FontAwesomeIcon icon={faBuilding} className={classes.company_icon}/></span>{this.props.data.company}</span>
              {this.props.data.tags.map((tag, key) => (
                <span key={key} className={classes.tag_container}><span className={classes.tag}>{tag}</span></span>
              ))}
            </Grid>
            <Grid
              container
              item xs={8}
              spacing={0}
              alignItems="flex-start"
              justify="flex-start"
            >
              <hr className={classes.bar}></hr>
              <span className={classes.date}>Available: {this.props.data.available}</span>
            </Grid>
            <Grid
              container
              item xs={4}
              spacing={0}
              alignItems="flex-start"
              justify="flex-start"
            >
              <span className={classes.button_container}><Button className={classes.button} variant="contained" color="primary" >View Booking</Button></span>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

CoffeeChatCard = withMyHook(CoffeeChatCard);
export default CoffeeChatCard;
