import React from 'react'
import AlgorithmCell from './AlgorithmCell'

const Algorithms = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      <AlgorithmCell />
      <AlgorithmCell />
      <AlgorithmCell />
      <AlgorithmCell />
    </div>
  )
}

export default Algorithms