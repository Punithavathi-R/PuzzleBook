import React from 'react';
import Riddle from './Riddle';
import riddles from '../data/riddles.json'; 

function RiddleList() {
  return (
    <div className="riddles">
      {riddles.map((riddle, index) => (
        <Riddle
          key={index}
          question={riddle.question}
          answer={riddle.answer}
          explanation={riddle.explanation}
        />
      ))}
    </div>
  );
}

export default RiddleList;
