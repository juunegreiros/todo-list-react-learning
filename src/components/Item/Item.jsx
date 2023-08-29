// Tem html dentro do js, é react (jsx)
import './Item.css'
import checkmark from '../../assets/checkmark.png'
const Item = (props) => {
  console.log(props)
  return (
    <li className="item">
      <input
        className="checkbox"
        type="checkbox"
        id={props.id}
        checked={props.checked}
        onChange={props.onCheck}
      />
      

      <label htmlFor={props.id} className={`card ${props.checked ? 'active' : ''}`}>
        <div>
          <img src={checkmark}/>
        </div>

        <input className="checkbox__text" type="text" value={props.text} onChange={props.onChange} />

        <button type="button" onClick={props.onDelete}>X</button>
      </label>
    </li>
  )
}

export default Item
