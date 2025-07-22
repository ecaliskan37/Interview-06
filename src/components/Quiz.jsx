const Quiz = ({ questions, fm, sonuc }) => {
  const handleClick = (count, value) => {
    const ques = count.split('-')[0]
    const answ = count.split('-')[1]

    if (sonuc.filter((item) => item.index === ques).length === 0) {
      fm([...sonuc, { index: ques, sonuc: questions[ques]['correct'] == answ }])
    } else {
      const x = sonuc.map((item, index) => {
        if (item.index === ques) {
          item.sonuc = questions[ques]['correct'] == answ
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
        Başarı Oranı :
        {sonuc.length == questions.length
          ? `% ${(
              sonuc.filter((item) => item.sonuc === true).length / sonuc.length
            ).toFixed(2)}'si
        doğru!`
          : null}
      </div>
      <div className="text-center">
        {questions.map((item, index) => {
          return (
            <>
              <p key={index}>{item.question}</p>
              <ul>
                {item.answers.map((line, iter) => {
                  return (
                    <li
                      key={`${index}-${iter}`}
                      onClick={(e) =>
                        handleClick(`${index}-${iter}`, e.target.value)
                      }
                    >
                      {line}
                    </li>
                  )
                })}
              </ul>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Quiz
