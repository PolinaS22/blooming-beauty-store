import { useEffect, useState } from "react"
import Swal from "sweetalert2";

export default function Advertisement() {

    const initialTime = (60 * 60) * 24;
    const [timeRemaining, setTimeRemaining] = useState(initialTime);

    useEffect(() => {
        const timerSales = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime === 0){
                    clearInterval(timerSales);
                    Swal.fire("Sorry! The sale is over, the next one is comming right up!");
                }
                else {
                    return prevTime - 1
                }
            })
        }, 1000)

        return () => clearInterval(timerSales);
    }, [])

    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;


    return (
        <div className="bg-img-ad-cont">
            <p className="adv-par">Last chance to save with out limited-time sale! Ends in:</p>
            <p className="adv-countdown">{`${hours}h ${minutes}m ${seconds}s`}</p>
                
        </div>
    )
}