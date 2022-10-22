import React from 'react';
import './Arena.css';
import { Grid, Button, Typography } from '@mui/material'
import Fighter from './Fighter';
import FighterSelector from './FighterSelector';

class Arena extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fighter1: {
        name: '',
        link: '',
      },
      fighter2: {
        name: '',
        link: '',
      },
    }
  }

  setFighter1 = (name, link) => {
    this.setState({ ...this.state, fighter1: { ...this.state.fighter1, name, link } })
  }

  setFighter2 = (name, link) => {
    this.setState({ ...this.state, fighter2: { ...this.state.fighter2, name, link } })
  }

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant='h3' align='center'>Ruokarähinä</Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <FighterSelector setFighter={this.setFighter1} />
            </Grid>
            <Grid item xs={12}>
              <FighterSelector setFighter={this.setFighter2} />
            </Grid>
            <Grid item xs={6}>
              <Fighter fighterName={this.state.fighter1.name} fighterLink={this.state.fighter1.link} />
            </Grid>
            <Grid item xs={6}>
              <Fighter fighterName={this.state.fighter2.name} fighterLink={this.state.fighter2.link} />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>FIGHT</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          Battlelog here...
        </Grid>
      </Grid>
    )
  }
}

export default Arena;
