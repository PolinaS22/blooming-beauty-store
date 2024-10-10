import { dataAbout } from "./dataAbout";
import { useState } from "react";

export default function Sliders() {   
    const [mission, setMission] = useState(0);
    const {image, value, description} = dataAbout[mission];
    const [showText, setShowText] = useState(false)

    const previousMission = () => {
        setMission((slide => {
            slide--;
            if (slide < 0){
                return dataAbout.length -1
            }
            return slide;
        }))
    }

    const nextMission = () => {
        setMission((slide => {
            slide++;
            if (slide > dataAbout.length -1){
                slide = 0;
            }
            return slide;
        }))
    }

    return (
        <div>
            <h4>Company Mission & Value </h4>
            <div className="cont-center">
                <img className="imgMission" src={ image } alt='Company Mission'/>
            </div>
            <div className="cont-mission">
                <button className="btn-value" onClick={ previousMission }>previous</button>                 
                <div className="value-box">
                    <p className="value">{ value }</p>
                    <p className="value-description">
                        { showText ? description : description.substring(0, 100) + '...' }
                        <button className="btn-showMore" onClick={() => setShowText(!showText)}>
                        { showText ? 'Show less' : 'Show more' }
                        </button>
                    </p>
                </div>
                <button className="btn-value" onClick={ nextMission }>next</button>
            </div>
        </div>
    )
}