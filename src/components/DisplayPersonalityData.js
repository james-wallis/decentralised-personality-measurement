import React, { Component } from 'react';

class DisplayPersonalityData extends Component {
  render() {
    const obj = this.props.personality;
    return (
      <div>
        <h1>Your Personality</h1>
        <p>The Big Five traits of your personality have been measured and these are your results.</p>
        {Object.keys(obj).map((key, i) => (
          <div className="personalityTraitDivs" key={i}>
            <p><strong>{key}</strong></p>
            <p>Score = {obj[key].score}</p>
            <p>Value = {obj[key].result}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default DisplayPersonalityData;
