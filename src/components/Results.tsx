import { FC} from 'react'

interface ResultsProps {
    score:number
    num:number
}
const Results:FC<ResultsProps> = ({score,num}) => {
    let span;
    score == num ? span=<span className='font-bold text-[#0075ff]'>Perfect</span> :
    score > num / 2 ? span=<span className='font-bold text-[#009688]'>Good</span> :
    span=<span className='font-bold text-[#dc0a0a]'>bad</span> 
    return ( 
    <>
       {span} You answered {score} from {num}
       <button onClick={()=>location.reload()} className="bg-[#009688] my-5 mx-0 block w-1/6 p-1.5 text-lg relative left-[0%] text-white rounded-md"> Reload</button>
    </>
     );
}
 
export default Results;

