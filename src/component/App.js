import React, { useRef } from 'react';
// import ReactDOM from 'react-dom';

const App = () => {
  const submitText = { text: 'Click me!!' };
  const labelName = 'Enter Name:';
  const style = { backgroundColor: 'blue', color: 'white' };
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelName}
      </label>
      <input></input>
      <button style={style}>
        {submitText.text}
      </button>
    </div>

  );
};

export default App;
