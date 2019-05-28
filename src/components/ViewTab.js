import React from 'react'
import PropTypes from 'prop-types'
import {Tabs,Icon} from 'antd'
import {LIST_VIEW, CHART_VIEW} from "../utils"
import IosList from 'react-ionicons/lib/IosList'

const {TabPane} = Tabs

const ViewTab = ({activeTab, onTabChange}) => (
  <Tabs defaultActiveKey={activeTab}>
    <TabPane tab={<span><Icon type="unordered-list" /><span>列表模式</span></span>}
             key={LIST_VIEW}>
      列表模式
    </TabPane>
    <TabPane tab={<span><Icon type="pie-chart" theme="filled" />图表模式</span>} key={CHART_VIEW}>
      图表模式
    </TabPane>
  </Tabs>
)

export default ViewTab
