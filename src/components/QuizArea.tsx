'use client'
import { FC, useEffect, useState} from 'react'
import { useCountDown } from "@/hooks/useCounterDown";

interface QuizAreaProps {
  data:questionDetail[],
  score:number,
  setScore:React.Dispatch<React.SetStateAction<number>>,
  showResults:boolean,
  setShowResults:React.Dispatch<React.SetStateAction<boolean>>
}

interface questionDetail  {
  title: string,
  answers:string[]
  answerRight: string,
}

const Question:FC<QuizAreaProps> = ({data,score,setScore,showResults,setShowResults}) => {
    const [numberOfQuestion, setnumberOfQuestion] = useState(0)
    const {title, answers, answerRight} = data[numberOfQuestion]
    const [selectedAnswer, setSelectedAnswer] = useState(answers[0]);
    const [isRestart, setIsRestart] = useState(false)
    
    
    const handleChangeAnswer = (value:string)=> {
      setSelectedAnswer(value);
    }
    
    const handleClickButton = ()=>{
      resetCountdown()
      if(selectedAnswer == answerRight){
        setScore(score + 1)
      }
      
      (numberOfQuestion >= data.length - 1)
      ?
      setShowResults(true)
      :
      setnumberOfQuestion(numberOfQuestion + 1)
    }
      const { timeLeft, resetCountdown } = useCountDown(30,handleClickButton);

    let spans =[]
    for (let i = 0; i < data.length; i++) {
      spans.push(<span key={i} className={ i ==numberOfQuestion ? "bg-[#0075ff]" + " w-5 h-5 mr-1.5 rounded-full" : "bg-[#dfdfdf]"+" w-5 h-5 mr-1.5 rounded-full"}></span>)
    }
  

    return(
        <>
        <div className="flex bg-white p-2 text-black">
        <div className="flex-1">Category:</div>
        <div className="flex-1 text-right">Question {numberOfQuestion + 1}/{data.length}</div>
      </div>

        <div className="mt-5 p-5 bg-white ">
        <h2 className="m-0 text-3xl">{title}</h2>
        </div>
        <div className='bg-white pt-0 px-5 pb-5 divide-y border-[#dfdfdf]'>
                {answers.map((answer,i)=>{
                    return(
                <div className="p-3 bg-[#f9f9f9] " key={`answer_${i}`}>
                    <input onChange={e => handleChangeAnswer(e.target.value)} id={`radio_${i}`} className='peer' value={answer} type="radio" name='questoin' key={`radio_${i}`} checked={selectedAnswer === answer} />
                    <label  htmlFor={`radio_${i}`} className='peer-checked:text-[#0075ff] cursor-pointer font-bold text-[#777] ml-1 text-sm relative -top-px' key={`label_${i}`}>{answer}</label>
                </div>
                    )
                }
                )}
            </div>

             <button onClick={handleClickButton} className="bg-[#0075ff] my-5 mx-0 block w-1/5 p-2 text-xl relative left-[80%] text-white rounded-md">{numberOfQuestion < data.length - 1 ? <>Next</> : <>Finish</> }</button>

     <div className="bg-white p-5 border-t border-[#dfdfdf] flex">
      <div className="flex flex-1">
        {spans}
      </div>
      <div>{timeLeft}</div>
     </div>
        </>
    )
}
export default Question