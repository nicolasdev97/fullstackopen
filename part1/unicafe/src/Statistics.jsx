const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {(good - bad) / (good + neutral + bad)}</p>
      <p>positive {(good / (good + neutral + bad)) * 100}%</p>
    </div>
  );
};

export default Statistics;
