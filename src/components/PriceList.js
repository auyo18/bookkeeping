import React from 'react'
import PropTypes from 'prop-types'
import {List, Row, Col} from 'antd'
import IosCreate from 'react-ionicons/lib/IosCreate'
import IosTrash from 'react-ionicons/lib/IosTrash'

const getIcon = name => {
  const Icon = require(`react-ionicons/lib/${name}.js`)
  return <Icon onClick={() => alert('Hi!')} fontSize="40px" color="#434343"
               style={{backgroundColor: '#ffda44', borderRadius: '50%', padding: '5px'}}/>
}

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
              {
                getIcon(item.category.iconName)
              }
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
              <span>{item.data}</span>
            </div>
          </Col>
          <Col className="gutter-row" span={3}>
            <div className="gutter-box">
              <IosCreate onClick={() => onModifyItem(item)} fontSize="40px" color="white"
                         style={{backgroundColor: '#434343', borderRadius: '50%', padding: '5px'}}/>
            </div>
          </Col>
          <Col className="gutter-row" span={3}>
            <div className="gutter-box">
              <IosTrash onClick={() => onDeleteItem(item)} fontSize="40px" color="white"
                        style={{backgroundColor: '#f5222d', borderRadius: '50%', padding: '5px'}}/>
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
