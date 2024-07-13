import { useState } from "react";
import data from "./data";

function App() {
  // Initialize the state to keep track of which answers are shown
  const [show, setShow] = useState({});

  // Function to toggle the visibility of the answer for a specific question
  function expendText(id) {
    setShow(prev => ({
      // Spread the previous state
      ...prev,
      // Toggle the visibility of the answer for the given id
      [id]: !prev[id]
    }));
  }

  return (
    <>
      <h2>Here are 10 questions about animals you might not know</h2>
      {
        // Iterate over the data array and render each question and answer
        data.map(item => (
          // Each item needs a unique key, using item.id
          <div key={item.id}>
            <h4>{item.question}</h4>
            {/* Conditionally render the answer if the show state for the current item.id is true */}
            {show[item.id] && <p>{item.answer}</p>}
            {/* Button to toggle the visibility of the answer */}
            <button onClick={() => expendText(item.id)}>
              {show[item.id] ? "-" : "+"}
            </button>
          </div>
        ))
      }
    </>
  );
}

export default App;
