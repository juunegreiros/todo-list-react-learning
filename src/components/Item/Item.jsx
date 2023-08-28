// Tem html dentro do js, é react (jsx)

const Item = (props) => {
  console.log(props)
  return (
    <li>
      <input
        className="checkbox"
        type="checkbox"
        id={props.id}
      />

      <label htmlFor={props.id}>
        <div>quadradinho</div>

        <input type="text" />

        <button type="button">X</button>
      </label>
    </li>
  )
}

export default Item
