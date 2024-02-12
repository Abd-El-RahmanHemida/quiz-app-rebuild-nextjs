"use client"

import QuizArea from "@/components/QuizArea";
import Results from "@/components/Results";
import data from '@/data/data.json'
import { useState } from "react";



export default function Home() {
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  return (
    <div  className="max-w-4xl bg-[#f8f8f8] my-5 mx-auto p-5">      
      {!showResults 
      ? 
      (<QuizArea data={data} score={score} setScore={setScore} showResults={showResults} setShowResults={setShowResults} />)
      :
      (<Results score={score} num={data.length}/>)}
    
    </div>
  )
}
