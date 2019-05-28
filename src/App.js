import React from 'react'
import PriceList from './components/PriceList'
import ViewTab from './components/ViewTab'
import MonthPicker from './components/MonthPicker'
import {LIST_VIEW} from "./utils"

const items = [
  {
    "id": 1,
    "title": "去云南旅游",
    "price": 6600,
    "data": "2019-05-23",
    "category": {
      "id": 1,
      "name": "旅游",
      "type": "outcome",
      "iconName": "IosPlane"
    }
  },
  {
    "id": 2,
    "title": "超市购物",
    "price": 200,
    "data": "2019-05-28",
    "category": {
      "id": 1,
      "name": "购物",
      "type": "outcome",
      "iconName": "IosBasket"
    }
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MonthPicker year="2019" month="5"/>
        <ViewTab activeTab={LIST_VIEW} onTabChange={view => {
          console.log(view)
        }}/>
        <PriceList items={items} onModifyItem={item => {
          console.log(item.id)
        }} onDeleteItem={item => {
          console.log(item.id)
        }}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default App
