import { useEffect, useState } from 'react'
import Tours from './component/Tours'
import Loading from './component/Loading'

const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [toursInfo, setToursInfo] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setIsLoading(false)
      setToursInfo(data)
    } catch (err) {
      console.log(err)
    }
  }

  function deleteTourFunc(id) {
    setToursInfo(toursInfo.filter((v) => v.id !== id))
  }

  function refreshFetch() {
    setIsLoading(true)
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <main>
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="title-underline"></div>
        </div>
        {toursInfo.length === 0 ? (
          <button onClick={refreshFetch} className="delete-btn btn-block btn">
            Refresh
          </button>
        ) : (
          <div className="tours tour-info">
            {toursInfo.map((info) => {
              return (
                <Tours
                  key={info.id}
                  image={info.image}
                  name={info.name}
                  info={info.info}
                  price={info.price}
                  deleteTour={() => deleteTourFunc(info.id)}
                />
              )
            })}
          </div>
        )}
      </section>
    </main>
  )
}
export default App
