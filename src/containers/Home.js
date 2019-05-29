import React, {Component} from 'react'
import {Layout, Row, Col, Button} from 'antd'
import MonthPicker from '../components/MonthPicker'
import TotalPrice from '../components/TotalPrice'
import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
import {LIST_VIEW, parseToYearAndMonth} from "../utils"

const {Header, Content} = Layout

const items = [
  {
    "id": 1,
    "title": "去云南旅游",
    "price": 6600,
    "date": "2019-03-12",
    "category": {
      "id": 1,
      "name": "旅游",
      "type": "outcome"
    }
  },
  {
    "id": 2,
    "title": "超市购物",
    "price": 230,
    "date": "2019-04-26",
    "category": {
      "id": 2,
      "name": "购物",
      "type": "outcome"
    }
  },
  {
    "id": 3,
    "title": "工资",
    "price": 8000,
    "date": "2019-05-15",
    "category": {
      "id": 32,
      "name": "工资",
      "type": "income"
    }
  }
]

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items,
      currentDate: parseToYearAndMonth()
    }
  }

  getListView = () => {
    return <PriceList items={items} onDeleteItem={() => {
    }} onModifyItem={() => {
    }}/>
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

  render() {
    const {currentDate} = this.state
    return (
      <Layout>
        <Header style={{height: 'auto', color: 'white'}}>
          <h2 style={{color: 'white', fontSize: '36px'}}>聚力记账</h2>
          <Row>
            <Col span={12}>
              <MonthPicker year={currentDate.year} month={currentDate.month}/>
            </Col>
            <Col span={12}>
              <TotalPrice income={this.getTotalPrice().income} outcome={this.getTotalPrice().outcome}/>
            </Col>
          </Row>
        </Header>
        <Content style={{backgroundColor: 'white', padding: '10px'}}>
          <Button type="primary" icon="plus-square">创建一条记账记录</Button>
          <ViewTab
            activeTab={LIST_VIEW}
            listView={this.getListView()}
            chartView={this.getChartView()}/>
        </Content>
      </Layout>
    )
  }
}

export default Home
