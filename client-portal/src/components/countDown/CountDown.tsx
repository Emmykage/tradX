import { useState } from "react";
import { useEffect } from "react";

const CountDown = () => {

    const time = 1; // minutes

    const minuteToUnixTimeStamp = (t:number) => {
        const unix = Math.floor(Date.now() / 1000);
        const minutesToSeconds = t * 60;
        return unix + minutesToSeconds;
    };

    const [endTime, setEndTime] = useState(minuteToUnixTimeStamp(time));
    const [timeLeft, setTimeLeft] = useState(time * 60);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        if (finished) return;

        const timerId = setInterval(() => {
            const now = Math.floor(Date.now() / 1000);
            const remaining = endTime - now;

            if (remaining <= 0) {
                setFinished(true);
                setTimeLeft(0);
                clearInterval(timerId);
            } else {
                setTimeLeft(remaining);
            }
        }, 1000);

        return () => clearInterval(timerId);
    }, [endTime, finished]);

const formatTime = () => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    return `${mins} : ${secs < 10 ? '0' : ''}${secs}`;
};
  return (
    <div className="bg-gray-800 h-screen w-screen flex justify-center items-center">
        <div>
            {finished ? 'TImes up ': <p>{formatTime()}</p>}
        </div>
        
    </div>
  )
}

export default CountDown
