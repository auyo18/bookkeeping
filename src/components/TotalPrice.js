import React from 'react'
import PropTypes from "prop-types"

const TotalPrice = props => {
  const {income, outcome} = props
  return (
    <p>
      <span className="income" style={{marginRight: '20px'}}>收入：<span>{income}</span></span>
      <span className="outcome">支出：<span>{outcome}</span></span>
    </p>
  )
}

TotalPrice.propTypes = {
  income: PropTypes.number.isRequired,
  outcome: PropTypes.number.isRequired
}

export default TotalPrice
