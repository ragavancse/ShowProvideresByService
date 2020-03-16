import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import globalStyles from './styles';
import { withStyles } from '@material-ui/core/styles';


export class Service extends React.Component {
    constructor(props) {
        super(props);
      }

      handleLangChange = () => {
        var lang = this.dropdown.value;
        this.props.onSelectLanguage(lang);            
    }
    
    
  render() {
        return(
            <div style={{paddingBotton:'200px'}} >
            <Paper style={globalStyles.selectBox} >
            <select onChange={this.props.handleChange}>
              <option value="All Services">All Services</option>
              { this.props.services.length >1 && this.props.services.map( data  => (
                <option  value={data.attributes.name}>{data.attributes.name}</option>
              )) }</select>
            <FormControl>
            
          </FormControl>
          </Paper>
          </div>
            )
    }
}

export default Service;
