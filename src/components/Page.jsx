import React, { useState } from 'react'

const Page = ({ questions, sonuc, number, setNumber, fm, dis, setDisable }) => {
  const handleClick = (count) => {
    const ques = count.split('-')[0]
    const answ = count.split('-')[1]

    if (sonuc.filter((item) => item.index == ques).length == 0) {
      fm([
        ...sonuc,
        { index: ques, sonuc: questions[ques]['correct'] == answ, cevap: answ },
      ])
    } else {
      let x = sonuc.map((item) => {
        console.log('ques' + ques)
        console.log('index' + item.index)
        if (item.index == ques) {
          item.sonuc = questions[ques]['correct'] == answ
          item.cevap = answ
        }
        return item
      })
      fm(x)
    }
  }

  console.log(sonuc)

  return (
    <>
      <div>
        {number === questions.length ? (
          <div>
            Başarı Oranı :
            {sonuc.length == questions.length
              ? `% ${(
                  (sonuc.filter((item) => item.sonuc === true).length /
                    sonuc.length) *
                  100
                ).toFixed(2)}'si
            doğru!`
              : null}
          </div>
        ) : null}
      </div>
      <div className="text-center">
        {dis || (
          <>
            <p>{questions[number].question}</p>
            {questions[number].answers.map((line, iter) => {
              return (
                <div key={`${number}-${iter}`}>
                  <label>
                    <input
                      name={`group ${number}`}
                      type="radio"
                      defaultChecked={
                        sonuc.filter(
                          (item) => item.index == number && item.cevap == iter
                        ).length != 0
                          ? true
                          : false
                      }
                      id={`${number}-${iter}`}
                      onChange={(e) => handleClick(`${number}-${iter}`)}
                    />
                    {line}
                    {sonuc.length === questions.length
                      ? sonuc.filter(
                          (item) => item.index == number && item.cevap == iter
                        ).length == 0
                        ? null
                        : sonuc.filter(
                            (item) => item.index == number && item.cevap == iter
                          )[0].sonuc
                        ? '+'
                        : '-'
                      : null}
                  </label>
                </div>
              )
            })}
          </>
        )}

        <div className="align-bottom space-x-32">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setNumber((x) => x - 1),
                number === 0 ? setDisable(true) : setDisable(false)
            }}
            disabled={number === 0}
          >
            Önceki
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setNumber((x) => x + 1),
                number === questions.length - 1
                  ? setDisable(true)
                  : setDisable(false)
            }}
            disabled={number === questions.length}
          >
            Sonraki
          </button>
        </div>
      </div>
    </>
  )
}
export default Page
