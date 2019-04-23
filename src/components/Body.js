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
    this.saveFile(p);
    this.setState({
      personality: p
    })
  }

  saveFile = async (p) => {
    const { fileUrl, linkedDataUrl } = await saveToSolid(p);
    if (fileUrl) this.setState({
      url: fileUrl,
      linkedDataUrl: linkedDataUrl
    })
  }

  render() {
    const content = (this.state.personality) 
      ? <DisplayPersonality personality={this.state.personality} url={this.state.url} linkedData={this.state.linkedDataUrl} />
    : <Questionnaire setPersonality={this.setPersonality} />;
    return (
      <div className="bodySection">
        {content}
      </div>
    );
  }
}

export default Body;
