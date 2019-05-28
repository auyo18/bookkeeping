import React from 'react'
import {Button} from 'antd'
// import 'antd/dist/antd.css'

const items = [
  {
    "id": 1,
    "title": "去云南旅游",
    "price": 200,
    "data": "2019-05-28",
    "category": {
      "id": 1,
      "name": "旅游",
      "type": "outcome"
    }
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>提交</Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default App
