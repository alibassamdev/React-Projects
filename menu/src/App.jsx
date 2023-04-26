import menu from './data'
import Item from './component/Item'
import { useState } from 'react'

const App = () => {
  const getCategories = ['All', ...new Set(menu.map((v) => v.category))]
  const [menuItems, setMenuItems] = useState(menu)

  function filterMenu(e) {
    if (e.target.name === 'All') {
      setMenuItems(menu)
    } else {
      setMenuItems(menu.filter((v) => v.category === e.target.name))
    }
  }
  return (
    <section>
      <div className="menu">
        <h1 className="title">Our menu</h1>
        <div className="title-underline"></div>
        <div className="btn-container">
          {getCategories.map((item, idx) => {
            return (
              <button
                key={idx}
                className="btn"
                onClick={filterMenu}
                name={item}
              >
                {item}
              </button>
            )
          })}
        </div>
        <div className="section-center">
          {menuItems.map((item) => {
            return (
              <Item
                image={item.img}
                name={item.title}
                price={item.price}
                text={item.desc}
                key={item.id}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default App
