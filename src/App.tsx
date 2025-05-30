import React from 'react'
import IMAGE from './tablets.jpg'
import Capsule from './capsule.svg'
import DailyForm from './DailyForm'

const App = () => {
  const name = 'jhj'

  return (
    <>
      <img src={Capsule} height="50px" width={'80px'} />
      <h1>
        Dose tracker {process.env.region} {name}
      </h1>
      <img src={IMAGE} height="30px" width={'30px'} />
      <DailyForm />
    </>
  )
}

export default App
