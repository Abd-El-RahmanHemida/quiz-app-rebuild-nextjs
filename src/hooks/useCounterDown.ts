import { useEffect, useState} from 'react'

export const useCountDown = ( time:number,callback: ()=> void, ) => {
      
    const [secondLeft, setSecondLeft] = useState(time)
    useEffect(()=>{
      if (secondLeft <= 0) {
        callback()
        return ;
      }
        const countDownInterval = setInterval(() => {
          setSecondLeft((time)=> time - 1)
          console.log('bruh')
      }, 1000);

      
      return () => clearInterval(countDownInterval)

      },[secondLeft])

      const resetCountdown = () => {
        setSecondLeft(time);
      };

      let minutes:number|string = Math.floor(secondLeft / 60);
      let seconds:number|string = (secondLeft % 60);
      let timeLeft = (minutes < 10 ? `0${minutes}` : minutes) + ":" + (seconds < 10 ? `0${seconds}` : seconds);
      
        return {timeLeft, resetCountdown}
  }