import { useState, useEffect } from 'react'
import QuotesCard from './components/QuotesCard'

const App = () => {

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900'>
      <QuotesCard/>
    </div>
  )
}

export default App