import { useState } from 'react'
import { useEffect } from 'react'
import JobInfo from './component/JobInfo'
import BtnContainer from './component/BtnContainer'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0)

  const fetchData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setIsLoading(false)
    setJobs(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  )
}
export default App
