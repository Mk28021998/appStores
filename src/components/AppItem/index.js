// Write your code here
import './index.css'

const AppItem = props => {
  const {eachAppItemDetails} = props
  const {imageUrl, appName} = eachAppItemDetails
  return (
    <li className="app-item-list-cont">
      <img src={imageUrl} className="app-image" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
