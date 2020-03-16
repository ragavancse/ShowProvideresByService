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


export class Providers extends React.Component {

  state={allData:[]};
    constructor(props) {
        super(props);
      }
      
  render() {
        return(
            
                <Paper >
                  { this.props.provider.length >=1 && this.props.provider.map( data  => (
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase >
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
                        ))

                    }
              
                </Paper>
        )}
}

export default Providers;
