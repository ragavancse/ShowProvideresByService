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
import Service from './Service'
      
import Providers from './Provider'


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
    const { services,provider } = this.props;
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
      <PageBase navigation="Project / Project List">
        <Service services={services} handleChange={this.handleChange}/>
        <Providers provider={this.state.provider} />
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