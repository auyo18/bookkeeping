import React from 'react'
import PropTypes from "prop-types"
import ViewTab from "./ViewTab"

const TotalPrice = props => {
  const {income, outcome} = props
  return (
    <p>
      <span style={{marginRight: '20px'}}>收入：{income}</span>
      <span>支出：{outcome}</span>
    </p>
  )
}

TotalPrice.propTypes = {
  income: PropTypes.number.isRequired,
  outcome: PropTypes.number.isRequired
}

export default TotalPrice
