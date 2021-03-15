import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeLanguageAction } from './store/actions/language';

function App() {
  const language = useSelector(state=> state.language);
  const dispatch = useDispatch();

  const updateLanguage = () => {
    dispatch(changeLanguageAction() )
  }

  return (
    <div className="App">
      Welcome. language is {language==="en"? "English": "Persian" }
      <button onClick={updateLanguage}>change Language</button>
    </div>
  );
}

export default App;
