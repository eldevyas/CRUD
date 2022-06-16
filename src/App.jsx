import { useState } from 'react'
import $ from 'jquery';
import Editor from './components/editor' 
import './javascript/main'

import { ToastContainer, toast } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="Background"></div>
      <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={true}
      pauseOnHover
      transition= {Flip}
      />
      <Editor />
    </div>
  )
}

export default App
