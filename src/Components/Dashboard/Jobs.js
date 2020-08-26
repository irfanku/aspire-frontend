import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import JobApplicationCard from "./Cards/JobApplicationCard";
import EmptyCard from "./Cards/EmptyCard";
import Filter from "./Cards/FilterCard";
import { httpGet } from "../../lib/dataAccess";
import PerfectScrollbar from "@opuscapita/react-perfect-scrollbar";
import CardTypes from "./CardTypes";
import { config } from "../../config";

const useStyles = makeStyles(() => ({

  mainPage: {
    paddingLeft: '8%',
    paddingRight: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
  },

  JobBoard: {
    fontFamily: 'myriad-pro, sans-serif',
    fontSize: '25px',
    textAlign: 'left',
    color: '#58595B',
    fontWeight: 'bold',
    marginTop: '40px',
  },

  padding: {
    marginLeft: '20px',
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
    marginLeft: '15px',
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
  },

  select: {
    background: '#EAEAEA',
    borderColor: '#EAEAEA',
    outline: 'none',
    color: '#6EA0B5',
    fontWeight: '800',
  },

  sort: {
    alignItems: 'flex-start',
    textAlign: 'left',
    marginBottom: '40px',
    marginLeft: '20px',
  },

  date: {
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

  constructor(props){
    super(props);
    this.state = {
      jobs: []
    }
  }

  fetchJobs = async () => {
    const existingJobsData = await httpGet("jobs", config.REACT_APP_ACCESS_TOKEN);
    this.setState({
      jobs: existingJobsData.data.jobs
    })

    // const jobsdata = {
    //   "title": "Software Developer",
    //   "company": "My-Company",
    //   "region": "ON",
    //   "city": "Waterloo",
    //   "country": "Canada",
    //   "job_type": "BOARD_POSITION",
    //   "description": "XYZ",
    //   "requirements": "XYZ",
    //   "job_tags": ["SOFTWARE", "FINANCE"],
    //   "salary": 40,
    //   "deadline": 1593718782
    // }
    // const response = await httpPost("jobs", config.REACT_APP_ACCESS_TOKEN, JSON.stringify(jobsdata));
  }

  componentDidMount() {
    this.fetchJobs();
  }

  render() {
    const classes = this.props.classes;
    return (

      <div>
        <PerfectScrollbar>
          <div className={classes.mainPage}>
            <div className={classes.padding}>
              <h1 className={classes.JobBoard}>Job Board</h1>
            </div>

            <Grid
              container
              item xs={12}
              spacing={1}
              alignItems="center"
              justify="center"
            >
              <Grid
                container
                item xs={12} sm={6} md={6} lg={3}
                spacing={1}
                alignItems="flex-end"
                justify="flex-end"
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
                  alignItems="flex-end"
                  justify="flex-end"
                >
                  <Filter />
                </Grid>
              </Grid>
              <Grid
                container
                item xs={12} sm={6} md={6} lg={3}
                spacing={1}
                alignItems="flex-end"
                justify="flex-end"
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
                  alignItems="flex-end"
                  justify="flex-end"
                >
                  <Filter />
                </Grid>
              </Grid>

              <Grid
                container
                item xs={12} sm={6} md={6} lg={3}
                spacing={1}
                alignItems="flex-end"
                justify="flex-end"
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
                  <Filter />
                </Grid>
              </Grid>
              <Grid
                container
                item xs={12} sm={6} md={6} lg={3}
                spacing={1}
                alignItems="flex-end"
                justify="flex-end"
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
                  alignItems="flex-end"
                  justify="flex-end"
                >
                  <Filter />
                </Grid>
              </Grid>
            </Grid>

            <div className={classes.sort}>
              <p className={classes.date}> Sort date posted by:
                <select className={classes.select}>
                  <option value="Ascending">Ascending</option>
                  <option value="descending">Descending</option>
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
              {this.state.jobs && this.state.jobs.length > 0 ?
                this.state.jobs.map((jobData, key) => (
                  <Grid
                    key={jobData.job_id}
                    container
                    item xs={6} sm={6} md={6} lg={4}
                    spacing={1}
                    alignItems="center"
                    justify="center"
                  >
                    <JobApplicationCard data={jobData}/>
                  </Grid>
                ))
              :
                <Grid
                  container
                  item xs={12}
                  spacing={1}
                  alignItems="center"
                  justify="center"
                >
                  <EmptyCard type={CardTypes.jobApplication}/>
                </Grid>
              }
            </Grid>
          </div>
        </PerfectScrollbar>
      </div>


    )
  }
}

JobBoard = withMyHook(JobBoard);
export default JobBoard;
