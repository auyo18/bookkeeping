import React, {Component} from 'react'
import CategorySelect from '../components/CategorySelect'
import PriceForm from '../components/PriceForm'
import {items, category} from "../data"

class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCategory: {}
    }
  }

  selectCategory = category => {
    this.setState(() => ({
      selectedCategory: category
    }))
  }

  render() {
    return (
      <div>
        <CategorySelect categories={category} selectedCategory={this.state.selectedCategory} selectCategory={id => {
          this.selectCategory(id)
        }}/>
        <PriceForm/>
        this is Create page{this.props.match.params.id}
      </div>
    )
  }
}

export default Create
