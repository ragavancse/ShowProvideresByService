import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


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
