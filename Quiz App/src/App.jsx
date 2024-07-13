import React, { useState } from 'react';
import data from './data';

function App() {
  //state that incease with one to change the question
  const [item, setItem] = useState(0);
  //set the result true or false
  const [res, setRes] = useState("");

  
  function checkAnswer(answer) {
    //(!res) give the user to answer only once at the question
    if(!res){
      //cheking if the answer correct or incorrect the correct one has typeof object
    if (typeof answer === 'object') {
      setRes("Correct");
    } else {
      setRes("Incorrect");
    }
  }else{
    //return error if user try to change his answer
    console.log('error')
  }}

    //moving to next question by increamnet the item
  function nextQuestion() {
    setItem(item + 1);
    setRes("");
  }

  return (
    <div>
      {/* rest the questions when the done */}
      {item > data.length - 1 ? (
        <button onClick={() => setItem(0)}>Reset</button>
      ) : (
        <>
        {/* showing the question and his options */}
          <h3>{data[item].q}</h3>
          <p>{res}</p>
          <button onClick={() => checkAnswer(data[item].a1)}>{data[item].a1}</button>
          <button onClick={() => checkAnswer(data[item].a2)}>{data[item].a2}</button>
          <button onClick={() => checkAnswer(data[item].a3)}>{data[item].a3}</button>
          {/* the next button doesn't show until the user choose an option*/}
          {res && <button onClick={nextQuestion}>Next Question</button>}
        </>
      )}
    </div>
  );
}

export default App;
