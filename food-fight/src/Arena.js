import React from 'react';
import './Arena.css';
import { Grid, Button, Typography } from '@mui/material'
import Fighter from './Fighter';
import FighterSelector from './FighterSelector';

class Arena extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fighter1Name: '',
      fighter2Name: ''
    }
  }

  setFighter1 = (name) => {
    this.setState({ ...this.state, fighter1Name: name })
  }

  setFighter2 = (name) => {
    this.setState({ ...this.state, fighter2Name: name })
  }

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h3' align='center'>Ruokarähinä</Typography>
        </Grid>
        <Grid item xs>
          <FighterSelector setFighter={this.setFighter1} />
          <Fighter fighterName={this.state.fighter1Name} />
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" fullWidth>FIGHT</Button>
        </Grid>
        <Grid item xs>
          <FighterSelector setFighter={this.setFighter2} />
          <Fighter fighterName={this.state.fighter2Name} />
        </Grid>
      </Grid>
    )
  }
}

export default Arena;
