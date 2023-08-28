import Item from './components/Item'
import React from 'react'

function App() {
  // hooks
  const [items, setItems] = React.useState([])

  return (
    <div>
      <p>Todo list</p>
      <button 
        type="button"
        onClick={() => {
          setItems([...items, { id: `item-${items.length + 1}`}])
          console.log(items)
        }}
      >
        adicionar novo item
      </button>
      {
        items.map((item) => (
          <Item id={item.id} key={item.id} />
        ))
      }
    </div>
  )
}

export default App
