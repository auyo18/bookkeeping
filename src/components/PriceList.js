import React from 'react'
import PropTypes from 'prop-types'
import {List, Row, Col, Button, Icon} from 'antd'

const PriceList = ({items, onModifyItem, onDeleteItem}) => (
  <List
    bordered
    itemLayout="vertical"
    dataSource={items}
    renderItem={item => (
      <List.Item>
        <Row type="flex" justify="space-between" align="middle">
          <Col className="gutter-row" span={4}>
            <div className="gutter-box">
              <Icon type="gitlab"
                    style={{backgroundColor: '#ffda44', padding: '10px', fontSize: '30px', borderRadius: '50%'}}/>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">
              {item.title}
            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div className="gutter-box">
              <span>{item.category.type === 'income' ? '' : '-'}{item.price}</span>
            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div className="gutter-box">
              <span>{item.date}</span>
            </div>
          </Col>
          <Col className="gutter-row" span={3}>
            <div className="gutter-box">
              <Button type="primary" shape="circle" icon="edit" size="large" onClick={() => {
                onModifyItem(item.id)
              }}/>
            </div>
          </Col>
          <Col className="gutter-row" span={3}>
            <div className="gutter-box">
              <Button type="danger" shape="circle" icon="delete" size="large" onClick={() => {
                onDeleteItem(item.id)
              }}/>
            </div>
          </Col>
        </Row>
      </List.Item>
    )}
  />
)

PriceList.propTypes = {
  items: PropTypes.array.isRequired,
  onModifyItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired
}

export default PriceList
