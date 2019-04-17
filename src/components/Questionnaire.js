import React, { Component } from 'react';
import * as Survey from "survey-react";
import './Questionnaire.css';
import "survey-react/survey.css";



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
  onComplete(survey) {
    // Only one key in the survey
    const key = Object.keys(survey.data)[0];
    const results = survey.data[key];
    // Format results - Reverse even question's answer, take average of pairs (1 & 2, 3 & 4, etc)
    // Q 1,2 = Extraversion
    // Q 3,4 = Agreeableness
    // Q 5,6 = Conscientiousness
    // Q 7,8 = Emotional Stablity
    // Q 9,10 = Openness to Experiences
    const personality = {
      'extraversion': 0,
      'agreeableness': 0,
      'conscientiousness': 0,
      'emotionalStability': 0,
      'opennessToExperiences': 0,
    }
    const reverse = [7,6,5,4,3,2,1];
    let i = 1;
    for (const key in personality) {
      // Reverse even question, take average of preceding odd and even number
      const resultReversed = reverse[(results[i + 1] - 1)];
      personality[key] = (parseInt(results[i]) + resultReversed) / 2;
      i+=2;
    }
    // Combine results to get personality information
    console.log(personality);
  }
  render() {
    var model = new Survey.Model(this.json);
    return (<Survey.Survey model={model} onComplete={this.onComplete} />);
  }
}

export default Questionnaire;