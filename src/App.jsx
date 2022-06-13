import { useState } from 'react'
import Editor from './components/editor' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div class="Background"></div>

      <Editor />
    </div>
  )
}

export default App
