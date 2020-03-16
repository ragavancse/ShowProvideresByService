import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchServices, fetchProvider }  from '../actions/ajaxStatusActions';
import Service from './Service'
      
import Providers from './Provider'


export class ProjectInfiList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { provider:{} }
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

    return (
      <div>
        <Service services={services} handleChange={this.handleChange}/>
        <Providers provider={this.state.provider} />
        </div>
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