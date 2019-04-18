const formatResults = (results) => {
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
  const reverse = [7, 6, 5, 4, 3, 2, 1];
  let i = 1;
  for (const key in personality) {
    // Reverse even question, take average of preceding odd and even number
    const resultReversed = reverse[(results[i + 1] - 1)];
    personality[key] = (parseInt(results[i]) + resultReversed) / 2;
    i += 2;
  }
  return personality;
}

module.exports = formatResults;