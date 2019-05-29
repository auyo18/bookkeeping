import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Cascader} from 'antd'
import {repairZero, range} from "../utils"

class MonthPicker extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {year, month} = this.props
    const monthRange = range(12, 1)
    const yearRange = range(9, year - 4)
    const monthOptions = monthRange.map(item => ({
      value: item,
      label: item
    }))
    const options = yearRange.map(item => ({
      value: item,
      label: item,
      children: monthOptions
    }))
    return (
      <Cascader
        allowClear={false}
        defaultValue={[year, month]}
        options={options}
      />
    )
  }
}

MonthPicker.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired
}

export default MonthPicker
