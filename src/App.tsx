import React from 'react';
import { useSelector } from "react-redux";

function App() {
  const language = useSelector(state=> state.language);
  return (
    <div className="App">
      Welcome. language is {language==="en"? "English": "Persian" }
    </div>
  );
}

export default App;
