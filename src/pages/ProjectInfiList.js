import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import PageBase from './PageBase';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { fetchServices, fetchProvider }  from '../actions/ajaxStatusActions';
import globalStyles from './styles';



export class ProjectInfiList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { provider:{}, open: false, deleteRecord: false, id: 'All Services', pgNo: 1, pageSize: 10, notify: false, message: '', error: false, age:'All Services' }
  }
  componentWillReceiveProps(nextProps){
 if(this.props.provider !== nextProps.provider){

  this.setState({provider:nextProps.provider})
 }
  }
  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleOpen = () => {
    this.setState({
      open: true
    });
  };
  handleChange = event => {
    console.log("event.target.value",event.target.value)
    this.setState({age:event.target.value});
    let filterData = {};
    if(event.target.value == 'All Services'){
      filterData = this.props.provider;

    }else{
      filterData = this.props.provider.filter(data => data.service == event.target.value);
    }
    this.setState({provider:filterData})

  };
  componentWillMount(){
    const {fetchProvider, fetchServices} = this.props;
    fetchProvider();
    fetchServices();
  }

  render() {
    const { services } = this.props;
    const { provider } = this.state;
    console.log("age",this.state.age)
    const classes = withStyles(theme => ({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
      },
      image: {
        width: 128,
        height: 128,
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
    }));

    return (
      <PageBase title="List of Project" navigation="Project / Project List">
        <div style={{paddingBotton:'200px'}} className={classes.root}>
        <Paper style={globalStyles.selectBox} className={classes.selectBox}>
        <select onChange={this.handleChange}>
          <option value="All Services">All Services</option>
          { services.length >1 && services.map( data  => (
            <option  value={data.attributes.name}>{data.attributes.name}</option>
          )) }</select>
        <FormControl>
        
      </FormControl>
      </Paper>
      </div>
      { provider.length >=1 && provider.map( data  => (
        <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img height="150" width="150" hspace="10" vspace="10" alt="complex" src={data.attributes['card-image']} />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm container >
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography  gutterBottom variant="subtitle1"> 
                 Name: {data.attributes.name}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                Specialties: {data.service}  {data.attributes.subspecialties.toString()}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
      ))

      }
      
      </PageBase>
    );
  }
}

ProjectInfiList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  services: state.storeData.services,
  provider:state.storeData.provider
})


const mapDispatchToProps = dispatch => bindActionCreators({
  fetchServices: fetchServices,
  fetchProvider: fetchProvider
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectInfiList );