import React, { Component } from 'react';
import Questionnaire from './Questionnaire';
import DisplayPersonality from './DisplayPersonalityData';
import saveToSolid from '../modules/saveToSolid';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personality: null
    }
  }

  setPersonality = (p) => {
    this.setState({
      personality: p
    })
  }

  componentDidUpdate() {
    console.log('component updated');
    console.log(this.state.personality);
    if (this.state.personality) saveToSolid();
  }

  render() {
    const content = (this.state.personality) 
    ? <DisplayPersonality personality={this.state.personality} />
    : <Questionnaire setPersonality={this.setPersonality} />;
    return (
      <div className="bodySection">
        {content}
      </div>
    );
  }
}

export default Body;
