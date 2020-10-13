import React from 'react';
import './App.css';
import JSCodeSnippet from './components/JSCodeSnippet';
import WithNightMode from './HOC/WithNightMode';
function App() {
  const codeSample = 'while (r = re.exec("123 456")) console.log(r, "AND re.lastIndex", re.lastIndex);'
  const JSCodeSnippetWithNightMode = 
  WithNightMode(
    JSCodeSnippet
  );
  return (
    <div className="App">
      <JSCodeSnippet 
      codeSample={codeSample}
      />
      <JSCodeSnippetWithNightMode 
      codeSample={codeSample}
      />
    </div>
  );
}

export default App;
