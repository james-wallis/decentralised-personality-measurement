// 4 Ratings for each measure (low, medium-low, medium-high, high)
const ratings = {
  'extraversion': [2.99, 4.44, 5.89],
  'agreeableness': [4.12, 5.23, 6.34],
  'conscientiousness': [4.08, 5.4, 6.72],
  'emotionalStability': [3.41, 4.83, 6.25],
  'opennessToExperiences': [4.31, 5.38, 6.45],
}

const getRating = (results) => {
  const personality = {};
  for (const key in results) {
    const result = results[key];
    const rating = ratings[key];
    let score = 'low';
    if (result >= rating[2]) {
      score = 'high';
    } else if (result >= rating[1]) {
      score = 'medium-high';
    } else if (result >= rating[0]) {
      score = 'medium-low';
    }
    // Give personality the result (int) and score (string)
    personality[key] = {
      result: result,
      score: score
    }
  }
  return personality;
}

module.exports = getRating;