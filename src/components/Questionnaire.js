import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";
import formatResults from '../modules/formatSurveyResults'
import getRating from '../modules/getRatingFromSurveyResults'



class Questionnaire extends Component {
  json = {
    elements: [
      {
        type: "matrix",
        name: "I see myself as:",
        isRequired: true,
        isAllRowRequired: true,
        cssClasses: "survey",
        columns: [
          {
            value: 1,
            text: "Disagree Strongly"
          }, {
            value: 2,
            text: "Disagree moderately"
          }, {
            value: 3,
            text: "Disagree a little"
          }, {
            value: 4,
            text: "Neither agree nor disagree"
          }, {
            value: 5,
            text: "Agree a little"
          }, {
            value: 6,
            text: "Agree moderately"
          }, {
            value: 7,
            text: "Agree strongly"
          }
        ],
        rows: [
          {
            value: 1,
            text: "Extraverted, enthusiastic"
          }, {
            value: 4,
            text: "Critical, quarrelsome"
          }, {
            value: 5,
            text: "Dependable, self-disciplined"
          }, {
            value: 8,
            text: "Anxious, easily upset"
          }, {
            value: 9,
            text: "Open to new experiences, complex"
          }, {
            value: 2,
            text: "Reserved, quiet"
          }, {
            value: 3,
            text: "Sympathetic, warm"
          }, {
            value: 6,
            text: "Disorganized, careless"
          }, {
            value: 7,
            text: "Calm, emotionally stable"
          }, {
            value: 10,
            text: "Conventional, uncreative"
          }
        ]
      },
    ]
  };
  //Define a callback methods on survey complete
  onComplete = async (survey) => {
    // Only one key in the survey
    const key = Object.keys(survey.data)[0];
    // Format results into the format specified by the Ten Item Personality Measure
    const results = await formatResults(survey.data[key]);
    // Add rating to results by comparing against the norms in the Ten Item Personality Paper
    const personality = await getRating(results);
    // Pass personality up a component
    this.props.setPersonality(personality);
  }
  render() {
    var model = new Survey.Model(this.json);
    return (<Survey.Survey model={model} onComplete={this.onComplete} />);
  }
}

export default Questionnaire;