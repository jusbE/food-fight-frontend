import React from 'react';
import './Arena.css';
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
      <div className="App">
        <div className='LeftFighter' >
          <FighterSelector setFighter={this.setFighter1} />
          <Fighter fighterName={this.state.fighter1Name} />
        </div>
        <div className='RightFigter'>
          <FighterSelector setFighter={this.setFighter2} />
          <Fighter fighterName={this.state.fighter2Name} />
        </div>
      </div>
    )
  }
}

export default Arena;
