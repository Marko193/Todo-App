import { useState } from 'react'
import './App.css'
import Header from "./components/header/index.jsx";
import Sidebar from "./components/sidebar/index.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
        <Header/>

      <div className="main_layout">
          <Sidebar/>
          <div className="content">
              <div>Content</div>
          </div>
      </div>
      {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
      {/*    count is {count}*/}
      {/*  </button>*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.jsx</code> and save to test HMR*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<p className="read-the-docs">*/}
      {/*  Click on the Vite and React logos to learn more*/}
      {/*</p>*/}
    </div>
  )
}

export default App
