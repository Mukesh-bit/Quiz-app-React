import React, { useState } from "react";
import questionData from "./constants/questions.json";
import Questions from "./components/Questions";
import Result from "./components/Result";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer([...userAnswer, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswer([]);
  };

  

  return (
    <div className="container">
      <h1>Quiz App</h1>

      {currentQuestion < questionData.length && (
        <Questions
          question={questionData[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}

      {currentQuestion === questionData.length && (
        <Result
          userAnswer={userAnswer}
          question={questionData}
          reset={resetQuiz}
        />
      )}
    </div>
  );
};

export default App;
