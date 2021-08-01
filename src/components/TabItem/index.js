// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, isActive, clickTab} = props
  const {tabId, displayText} = tabItem

  const onClickTabItem = () => {
    clickTab(tabId)
  }

  const activeClassName = isActive ? ['active-tab-btn', 'active-hr-line'] : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-btn ${activeClassName[0]}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
      <hr className={`horizontal-line ${activeClassName[1]}`} />
    </li>
  )
}
export default TabItem
