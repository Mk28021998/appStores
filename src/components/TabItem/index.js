// Write your code here
import './index.css'

const TabItem = props => {
  const {eachtabDetails, setCategoryTabId} = props
  const {displayText, tabId} = eachtabDetails

  const onClickTab = () => {
    setCategoryTabId(tabId)
  }

  return (
    <li className="list-tab-cont">
      <button className="tab-button" type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
