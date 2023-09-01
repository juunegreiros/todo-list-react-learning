import ItemComponent from './components/Item'
import React from 'react'
import GlobalStyle from './config/GlobalStyle'
import Navbar from './components/Navbar/Navbar'
import type { Item, Category } from './types/types'

function App() {
  // hooks
  const [categories, setCategories] = React.useState<Category[]>([])
  const [activeCategory, setActiveCategory] = React.useState<Category>()

  const onCreateCategory = (category: Category) => {
    const newCategories = [...categories]
    newCategories.push(category)
    setCategories(newCategories)
  }

  const onUpdateCategoryValue = (categoryIndex: number,  value: string) => {
    const newCategories = [...categories]
    newCategories[categoryIndex].text = value
    setCategories(newCategories)
  }

  return (
    <div>
      <GlobalStyle/>

      <Navbar
        categories={categories}
        onCreateCategory={onCreateCategory}
        onUpdateCategoryValue={onUpdateCategoryValue}
      />

      <p>Todo list</p>
{/* 
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
      </button> */}

      {/* {
        items.map((item, index) => (
          <ItemComponent 
            id={item.id}
            key={item.id}
            text={item.text}
            checked={item.checked}
            onCheck={() =>{
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
      } */}
    </div>
  )
}

export default App
