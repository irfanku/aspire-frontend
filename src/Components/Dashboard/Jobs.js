import React, {Component} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import JobApplicationCard from "./Cards/JobApplicationCard";
import Filter from "./Cards/FilterCard";

const useStyles = makeStyles(() => ({

  mainPage: { 
    paddingLeft: '8%',
    paddingRight: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  JobBoard: {
    fontFamily: 'myriad-pro, sans-serif',
    fontSize: '25px',
    textAlign: 'left',
    color: '#58595B',
    fontWeight: 'bold',
    marginTop: '40px',
  },

  padding:{
    marginLeft:'20px',
  },

  grid: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  section_title: {
    fontFamily: 'myriad-pro, sans-serif',
    fontSize: '15px',
    margin: '5px',
    marginBottom: '10px',
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
  },

  select:{
    background:'#EAEAEA',
    borderColor:'#EAEAEA',
    outline: 'none',
    color:'#6EA0B5',
    fontWeight: '800',
  },

  sort:{
    alignItems: 'flex-start',
    textAlign: 'left',
    marginBottom:'40px',
    marginLeft:'20px',
  },

  date:{
    fontFamily: 'myriad-pro, sans-serif',
    fontSize: '15px',
    fontWeight: 'bold',
  }

}));

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const classes = useStyles();
    return <Component {...props} classes={classes} />
  }
}

class JobBoard extends Component {

  fetchJobs = async () => {
    const existingJobsData = await httpGet("jobs");
    console.log(existingJobsData);

    const jobsdata = {
      "title": "Software Developer",
      "company": "My-Company",
      "region": "ON",
      "city": "Waterloo",
      "country": "Canada",
      "job_type": "BOARD_POSITION",
      "description": "XYZ",
      "requirements": "XYZ",
      "job_tags": ["SOFTWARE", "FINANCE"],
      "salary": 40,
      "deadline": 1593718782
    }
    const response = await httpPost("jobs", config.REACT_APP_ACCESS_TOKEN, JSON.stringify(jobsdata));
  }

  render() {
    this.fetchJobs();
    const classes = this.props.classes;
    return (
      <div>
        <div className={classes.mainPage}>
          <div className={classes.padding}>
            <h1 className={classes.JobBoard}>Job Board</h1>
          </div>

          <Grid
            container
            item xs={12}
            spacing={1}
          >
            <Grid
              container
              item xs={12} sm={12} md={8}
              spacing={1}
              alignItems="flex-end"
              justify="flex-end"
            >
              <Grid
                container
                item xs={12} sm={6} md={4}
                spacing={1}
                alignItems="flex-start"
                justify="flex-start"
              >
                <Grid
                  container
                  item xs={12}
                  spacing={1}
                  alignItems="flex-start"
                  justify="flex-start"
                >
                  <p className={classes.section_title}>Job Title</p>
                </Grid>
                <Grid
                  container
                  item xs={12}
                  spacing={1}
                  alignItems="flex-start"
                  justify="flex-start"
                >
                  <Filter/>
                </Grid>
              </Grid>

              <Grid
                container
                item xs={12} sm={6} md={4}
                spacing={1}
                alignItems="flex-start"
                justify="flex-start"
              >
                <Grid
                  container
                  item xs={12}
                  spacing={1}
                  alignItems="flex-start"
                  justify="flex-start"
                >
                  <p className={classes.section_title}>Location</p>
                </Grid>
                <Grid
                  container
                  item xs={12}
                  spacing={1}
                  alignItems="flex-start"
                  justify="flex-start"
                >
                  <Filter/>
                </Grid>
              </Grid>

              <Grid
                container
                item xs={12} sm={12} md={4}
                spacing={1}
                alignItems="flex-start"
                justify="flex-start"
              >
                <Grid
                  container
                  item xs={12}
                  spacing={1}
                  alignItems="flex-start"
                  justify="flex-start"
                >
                  <p className={classes.section_title}>Job Type</p>
                </Grid>
                <Grid
                  container
                  item xs={12}
                  spacing={1}
                  alignItems="flex-end"
                  justify="flex-end"
                >
                  <Filter/>
                </Grid>
              </Grid>
              </Grid>

              <Grid
                container
                item xs={12} sm={12} md={4}
                spacing={1}
                alignItems="flex-start"
                justify="flex-start"
              >
                <Grid
                  container
                  item xs={12} sm={12} md={12}
                  spacing={1}
                  alignItems="flex-start"
                  justify="flex-start"
                >
                  <Grid
                    container
                    item xs={12}
                    spacing={1}
                    alignItems="flex-start"
                    justify="flex-start"
                  >
                    <p className={classes.section_title}>Additional Filters</p>
                  </Grid>
                  <Grid
                    container
                    item xs={12}
                    spacing={1}
                    alignItems="flex-start"
                    justify="flex-start"
                  >
                    <Filter/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

          <div className={classes.sort}>
            <p className={classes.date}> Sort date posted by:
            <select className={classes.select}>
              <option  value="Ascending">Ascending</option>
              <option  value="descending">Descending</option>
            </select>
            </p>
          </div>

          <Grid
            container
            item xs={12}
            spacing={1}
            alignItems="flex-end"
            justify="flex-end"
          >
            
            <Grid
              container
              item xs={12} sm={9} md={4}
              spacing={1}
              alignItems="flex-start"
              justify="flex-start"
            >
              <JobApplicationCard/>
            </Grid>
            <Grid
              container
              item xs={12} sm={9} md={4}
              spacing={1}
              alignItems="flex-start"
              justify="flex-start"
            >
              <JobApplicationCard/>
            </Grid>
            <Grid
              container
              item xs={12} sm={9} md={4}
              spacing={1}
              alignItems="flex-start"
              justify="flex-start"
            >
              <JobApplicationCard/>
            </Grid>

            <Grid
              container
              item xs={12} sm={9} md={4}
              spacing={1}
              alignItems="flex-start"
              justify="flex-start"
            >
              <JobApplicationCard/>
            </Grid>
            <Grid
              container
              item xs={12} sm={9} md={4}
              spacing={1}
              alignItems="flex-start"
              justify="flex-start"
            >
              <JobApplicationCard/>
            </Grid>
            <Grid
              container
              item xs={12} sm={9} md={4}
              spacing={1}
              alignItems="flex-start"
              justify="flex-start"
            >
              <JobApplicationCard/>
            </Grid>
            <Grid
              container
              item xs={12} sm={9} md={4}
              spacing={1}
              alignItems="flex-start"
              justify="flex-start"
            >
              <JobApplicationCard/>
            </Grid>
            <Grid
              container
              item xs={12} sm={9} md={4}
              spacing={1}
              alignItems="flex-start"
              justify="flex-start"
            >
              <JobApplicationCard/>
            </Grid>
            <Grid
              container
              item xs={12} sm={9} md={4}
              spacing={1}
              alignItems="flex-start"
              justify="flex-start"
            >
              <JobApplicationCard/>
            </Grid>

            <Grid
              container
              item xs={12} sm={9} md={4}
              spacing={1}
              alignItems="flex-start"
              justify="flex-start"
            >
              <JobApplicationCard/>
            </Grid>
            <Grid
              container
              item xs={12} sm={9} md={4}
              spacing={1}
              alignItems="flex-start"
              justify="flex-start"
            >
              <JobApplicationCard/>
            </Grid>
            <Grid
              container
              item xs={12} sm={9} md={4}
              spacing={1}
              alignItems="flex-start"
              justify="flex-start"
            >
              <JobApplicationCard/>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

JobBoard = withMyHook(JobBoard);
export default JobBoard;
