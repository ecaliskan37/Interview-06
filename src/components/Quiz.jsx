import React, { useState } from 'react'
import Page from './Page'

const Quiz = ({ questions }) => {
  const [number, setNumber] = useState(0)
  const [sonuc, setSonuc] = useState([])
  const [dis, setDisable] = useState(false)

  return (
    <>
      <Page
        sonuc={sonuc}
        number={number}
        fm={setSonuc}
        setNumber={setNumber}
        questions={questions}
        dis={dis}
        setDisable={setDisable}
      />
    </>
  )
}

export default Quiz
