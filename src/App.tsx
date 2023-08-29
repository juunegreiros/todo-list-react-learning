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
          setItems([
            ...items,
            { 
              id: `item-${items.length + 1}`,
              text: '',
              checked: false,
            }
          ])
        }}
      >
        adicionar novo item
      </button>
      {
        items.map((item, index) => (
          <Item 
            id={item.id}
            key={item.id}
            text={item.text}
            checked={item.checked}
            onCheck={(e) =>{
              const newItems = [...items]
              newItems[index].checked = !items[index].checked
              setItems(newItems)
            }}
            onDelete={() => {
              const newItems = items.filter((newItem) => item.id !== newItem.id)
              setItems([...newItems])
            }}
            onChange={(e) => {
              const newItems = [...items]
              newItems[index].text = e.target.value
              setItems(newItems)
            }}
          />
        ))
      }
    </div>
  )
}

export default App
