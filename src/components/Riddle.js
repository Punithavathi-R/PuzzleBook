import React, { useState } from 'react';

function Riddle({ question, answer, explanation }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="riddle">
      <p>{question}</p>
      {showAnswer && (
        <>
          <p className="answer">Answer: {answer}</p>
          <p className="explanation">{explanation}</p>
        </>
      )}
      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </button>
    </div>
  );
}

export default Riddle;
