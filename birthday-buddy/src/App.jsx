import { useState } from 'react'
import Birthday from './component/Birthday'
import { birthdayList } from './data'
import './index.css'

const App = () => {
  const [person, setPerson] = useState(birthdayList)

  function handleClear() {
    setPerson([])
  }

  return (
    <main>
      <section className="container">
        <h3>{person.length} Birthdays Today</h3>
        <section>
          {person.map((list) => (
            <Birthday key={list.id} {...list} />
          ))}
        </section>
        <button className="btn btn-block" onClick={handleClear}>
          Clear All
        </button>
      </section>
    </main>
  )
}
export default App
