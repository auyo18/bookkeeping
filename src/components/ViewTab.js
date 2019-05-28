import React from 'react'
import PropTypes from 'prop-types'
import {Tabs, Icon} from 'antd'
import {LIST_VIEW, CHART_VIEW} from "../utils"

const {TabPane} = Tabs

const ViewTab = ({activeTab, listView, chartView}) => (
    <Tabs defaultActiveKey={activeTab}>
      <TabPane tab={<span><Icon type="unordered-list" /><span>列表模式</span></span>}
               key={LIST_VIEW}>
        {
          listView
        }
      </TabPane>
      <TabPane tab={<span><Icon type="pie-chart" theme="filled" />图表模式</span>} key={CHART_VIEW}>
        {
          chartView
        }
      </TabPane>
    </Tabs>
)

ViewTab.propTypes = {
  activeTab: PropTypes.string.isRequired
}

export default ViewTab
