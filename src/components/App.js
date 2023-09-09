import React from "react"
import CodeEditor from "./CodeEditor";

function App() {

  const [HTML, setHTML] = React.useState('');
  const [CSS, setCSS] = React.useState('');
  const [Javascript, setJavascript] = React.useState('');

  return (
    <>
      <div className="top-pane">
        <CodeEditor 
        language = "xml"
        languageTitle = "HTML"
        value={HTML}
        onChange={setHTML}
        />

        <CodeEditor 
        language = "css"
        languageTitle = "CSS"
        value={CSS}
        onChange={setCSS}
        />

        <CodeEditor 
        language = "javascipt"
        languageTitle = "JavaScript"
        value={Javascript}
        onChange={setJavascript}
        />
        
      </div>
      <div className="pane">
        <iframe 
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
