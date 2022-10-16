import React from 'react';
import './Arena.css';

class FighterSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectedFighter: '' }
  }

  handleChange = event => {
    this.setState({
      selectedFighter: event.target.value
    })
  };

  render() {
    return (
      <div className="FighterSelector" >
        <div className="Search">
          <input type="text" onChange={this.handleChange} placeholder="Choose fighter..." />
          <button onClick={() => this.props.setFighter(this.state.selectedFighter)}>Search</button>
        </div>
      </div>
    )
  }
}

export default FighterSelector;
