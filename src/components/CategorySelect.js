import React, {Component} from 'react'
import {Row, Col, Icon} from 'antd'

class CategorySelect extends Component {
  render() {
    const {categories, selectedCategory} = this.props
    return (
      <div className="category-select" style={{padding: '10px'}}>
        <Row gutter={16}>
          {
            categories.map(item => {
              const className = selectedCategory.id === item.id ? 'active' : ''
              let itemStyle = {
                textAlign: 'center',
                padding: '10px 0',
                borderRadius: '5px',
                transition: 'all .3s ease-in-out',
                cursor: 'pointer'
              }
              let iconStyle = {
                backgroundColor: '#434343',
                color: '#ffda44',
                padding: '10px',
                fontSize: '30px',
                borderRadius: '50%',
                transition: 'all .3s ease-in-out',
              }
              if (className) {
                let activeItemStyle = {
                  color: 'white',
                  backgroundColor: '#434343'
                }
                let activeIconStyle = {
                  backgroundColor: '#ffda44',
                  color: '#434343'
                }
                itemStyle = Object.assign(itemStyle, activeItemStyle)
                iconStyle = Object.assign(iconStyle, activeIconStyle)
              }
              return (
                <Col span={3} key={item.id}>
                  <div
                    className={`category-item ${className}`}
                    style={itemStyle}
                    onClick={() => {
                      this.props.selectCategory(item)
                    }}>
                    <p>{item.name}</p>
                    <Icon type="gitlab"
                          style={iconStyle}/>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </div>
    )
  }
}

export default CategorySelect
