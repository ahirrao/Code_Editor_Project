import React, { useState } from 'react';
import Prism from 'prismjs';
import "prismjs/themes/prism.css";  // Import PrismJS theme
import './CodeEditor.css';  // Import custom CSS for the editor
// Optionally, import specific language support if needed
const CodeEditor = () => {
    
// Predefined initial code to display
  const initialCode = `
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
  `;

   // State to hold the code input
  const [code, setCode] = useState(initialCode);

  // Function to handle changes in the textarea
  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };



  const highlightCode = (code) => {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  };

  return (
    <div className="code-editor">

   
      <textarea
        className="code-input"
        value={code}
        onChange={handleCodeChange}
      />
      <pre className="code-output" dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
    </div>
  );
};

export default CodeEditor;
