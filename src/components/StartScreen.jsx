function StartScreen({ numQuestions }) {
  return (
    <div>
      <h2>Welcome to The React Quiz</h2>
      <h3>{numQuestions} question to test your React Mastery</h3>
      <button>Lets Start</button>
    </div>
  );
}

export default StartScreen;
