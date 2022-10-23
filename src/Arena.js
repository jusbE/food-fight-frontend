import React from 'react';
import './Arena.css';
import { Grid, Button, Typography } from '@mui/material'
import Fighter from './Fighter';
import FighterSelector from './FighterSelector';
import Battlelog from './Battlelog';
import { getBattlelog } from './integrations/backendApi'

class Arena extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fighter1: {},
      fighter2: {},
    }
  }

  setFighter1 = (fighter) => {
    this.setState({ ...this.state, fighter1: fighter })
  }

  setFighter2 = (fighter) => {
    this.setState({ ...this.state, fighter2: fighter })
  }

  writeBattlelog = async () => {
    const { fighter1: { name: name1 }, fighter2: { name: name2 } } = this.state
    const battleLog = await getBattlelog(name1, name2)
    this.setState({ ...this.state, battleLog })
  }

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant='h3'>Ruokarähinä</Typography>
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
              <Fighter fighter={this.state.fighter1} />
            </Grid>
            <Grid item xs={6}>
              <Fighter fighter={this.state.fighter2} />
            </Grid>
            <Grid item xs={12}>
              <Button onClick={this.writeBattlelog} variant="contained" fullWidth>FIGHT</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={12}>
            <Battlelog battleLog={this.state.battleLog} />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default Arena;
