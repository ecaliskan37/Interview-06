import React, { useState } from 'react'
import Quiz from './components/Quiz'
import array from './data/list'

function App() {
  const [sonuc, setSonuc] = useState([])
  return <Quiz questions={array} fm={setSonuc} sonuc={sonuc} />
}

export default App
