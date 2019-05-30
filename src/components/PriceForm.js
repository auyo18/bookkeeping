import React, {Component} from 'react'
import {Form, Input} from 'antd'

const {Item} = Form

class PriceForm extends Component {
  render() {
    return (
      <div className="price">
        <Form labelCol={{sm: {span: 1}}} wrapperCol={{sm: {span: 23}}}>
          <Item label="标题">
            <Input placeholder="标题"/>
          </Item>
          <Item label="金额">
            <Input placeholder="金额" type="number"/>
          </Item>
          <Item label="日期">
            <Input placeholder="日期" type="date"/>
          </Item>
        </Form>
      </div>
    )
  }
}

export default PriceForm
