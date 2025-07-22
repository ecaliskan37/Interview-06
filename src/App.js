import React, { useState } from 'react'
import Quiz from './components/Quiz'
import questions from './data/list'

function App() {
  return <Quiz questions={questions} />
}

export default App
