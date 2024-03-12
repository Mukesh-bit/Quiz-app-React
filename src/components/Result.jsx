import React from 'react'

const Result = ({userAnswer, question, reset}) => {

  const correctAnswer = userAnswer.filter((answer) => answer).length

  console.log(userAnswer)

  return (
    <div className='results'>
      <h2>Results</h2>
      <p>
        Your correct answered is {correctAnswer} out of {question.length} question 
        <span onClick={reset}>Click here to Retry</span>
      </p>

      <ul>
        {
          question.map((question,index) => (
            <>
            <li key={index} data-correct={userAnswer[index]}>Q {index + 1} : {question.question}
              <b>{userAnswer[index]?"":`- ${question.answerOptions.find((ans) => (ans.isCorrect)).text  }`}</b>
            </li>
            </>
          ))
        }
      </ul>
    </div>
  )
}

export default Result