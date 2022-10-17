import React from 'react';
import { Autocomplete, TextField } from '@mui/material'
import { listFighters } from './integrations/backendApi'

class FighterSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = { fighters: [] }
  }

  handleInputChange = async (event) => {
    const fighterOptions = []
    const fighterNames = await listFighters(event.target.value)
    let i = 1
    for (const name of fighterNames) {
      fighterOptions.push({ label: name, id: i })
      i++
    }
    this.setState({
      fighters: fighterOptions
    })
  };

  handleValueChange = async (event, value) => {
    this.props.setFighter(value.label)
  };

  render() {
    return (
      <Autocomplete
        fullWidth
        disablePortal
        options={this.state.fighters}
        onInputChange={this.handleInputChange}
        onChange={this.handleValueChange}
        renderInput={(params) => <TextField {...params} label="Choose fighter" />}
      />
    )
  }
}

export default FighterSelector;
