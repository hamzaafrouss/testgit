import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData((prevData) => [...prevData, { name, text }]);
    setName('');
    setText('');
  };

  return (
    <div className="container" style={{ textAlign:'center',color:'red' }}>
    <div style={{ textAlign:'center',textColor:'red' }}>
    <h1>the Article 1</h1>
    <p>THE FERST ARTICLE IN YOUR BLOGE</p>
    </div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Text:
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {submittedData.length > 0 && (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          {submittedData.map((data, index) => (
            <div key={index}>
              <p>Name: {data.name}</p>
              <p>Text: {data.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;