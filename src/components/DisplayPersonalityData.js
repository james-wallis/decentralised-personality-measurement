import React, { Component } from 'react';

class DisplayPersonalityData extends Component {
  render() {
    const obj = this.props.personality;
    const fileUrl = this.props.url;
    const linkedDataUrl = this.props.linkedData;
    console.log('fileUrl', fileUrl);
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
        {(fileUrl && linkedDataUrl) ? 
          <div>
            <h2>The created files are located at:</h2>
            <a href={fileUrl} target='_blank' rel='noopener noreferrer'>Linked Data file (public): {linkedDataUrl}</a>
            <a href={fileUrl} target='_blank' rel='noopener noreferrer'>Personality file (private): {fileUrl}</a>
          </div>
          : null}
      </div>
    );
  }
}

export default DisplayPersonalityData;
