import React, { useState } from 'react'

const DailyForm = () => {
  const [data, setData] = useState('')

  return (
    <>
      <p>report</p>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </>
  )
}

export default DailyForm
