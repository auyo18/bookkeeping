import React, {Component} from 'react'
import {Layout, Row, Col, Button} from 'antd'
import MonthPicker from '../components/MonthPicker'
import TotalPrice from '../components/TotalPrice'
import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
import {LIST_VIEW, parseToYearAndMonth, repairZero} from "../utils"
import {items,category} from "../data"

const {Header, Content} = Layout

const item = {
  "id": 4,
  "title": "工资",
  "price": 8000,
  "date": "2019-05-15",
  "category": {
    "id": 32,
    "name": "工资",
    "type": "income"
  }
}

items.forEach(item => {
  category.forEach(cg => {
    if (item.cid === cg.id) {
      item.category = cg
    }
  })
})

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items,
      currentDate: parseToYearAndMonth()
    }
  }

  getListView = (items) => {
    return <PriceList items={items} onModifyItem={id => {
      this.onModifyItem(id)
    }} onDeleteItem={id => {
      this.onDeleteItem(id)
    }}/>
  }

  onModifyItem = id => {
    let items = this.state.items.slice()
    items.forEach(item => {
      item.id === id && (item.title = `${item.title}（改）`)
    })
    this.setState(() => ({
      items
    }))
  }

  onDeleteItem = id => {
    let items = this.state.items.filter(item => item.id !== id)
    this.setState(() => ({
      items
    }))
  }

  getChartView = () => {
    return <p>chart</p>
  }

  getTotalPrice = () => {
    let income = 0, outcome = 0
    this.state.items.forEach(item => {
      item.category.type === 'income' ? income += item.price : outcome += item.price
    })
    return {income, outcome}
  }

  createItem = () => {
    item.id = Math.round(Math.random() * 100)
    this.setState(() => ({
      items: [...this.state.items, Object.assign({}, item)]
    }))
    console.log(item)
  }

  changeMonth = value => {
    this.setState(() => ({
      currentDate: {
        year: value[0],
        month: value[1]
      }
    }))
  }

  render() {
    const {currentDate} = this.state
    let items = this.state.items.filter(item => item.date.includes(`${currentDate.year}-${repairZero(currentDate.month)}`))
    return (
      <Layout>
        <Header style={{height: 'auto', color: 'white'}}>
          <h2 style={{color: 'white', fontSize: '36px'}}>聚力记账</h2>
          <Row>
            <Col span={12}>
              <MonthPicker year={currentDate.year} month={currentDate.month} changeMonth={value => {
                this.changeMonth(value)
              }}/>
            </Col>
            <Col span={12}>
              <TotalPrice income={this.getTotalPrice().income} outcome={this.getTotalPrice().outcome}/>
            </Col>
          </Row>
        </Header>
        <Content style={{backgroundColor: 'white', padding: '10px'}}>
          <Button type="primary" icon="plus-square" onClick={this.createItem}>创建一条记账记录</Button>
          <ViewTab
            activeTab={LIST_VIEW}
            listView={this.getListView(items)}
            chartView={this.getChartView()}/>
        </Content>
      </Layout>
    )
  }
}

export default Home
