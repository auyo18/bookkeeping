import React from 'react'
import {Icon} from 'antd'
import {render} from 'enzyme'
import toJson from 'enzyme-to-json'
import PriceList from '../PriceList'
import {items, category} from "../../data"

items.forEach(item => {
  category.forEach(cg => {
    if (item.cid === cg.id) {
      item.category = cg
    }
  })
})

const props = {
  items,
  onModifyItem: () => {
  },
  onDeleteItem: () => {
  }
}

let wrapper
describe('test PriceList component', () => {
  beforeEach(() => {
    wrapper = render(<PriceList {...props}/>)
  })
  it('should render the component to match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('should render correct price items length', () => {
    expect(wrapper.find('.ant-list-item').length).toEqual(items.length)
  })
})
