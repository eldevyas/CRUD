import { useState } from 'react'
import $ from 'jquery';
import Editor from './components/editor' 
import './javascript/main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="Background"></div>

      <Editor />
    </div>
  )
}

export default App
