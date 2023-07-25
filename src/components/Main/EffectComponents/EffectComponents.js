
import styles from "./EffectComponent.module.css";
import sun from '../../../assets/images/sun.jpg'
import { Button } from "../../../common/Button/Button";
import { useState } from "react";


export const EffectComponents = ({ weather }) => {

    const [state, setState] = useState(false)



    return (
        <div className={styles.containerButton}>
            <Button title="check the weather" addStyles={styles.button} onClick={() => setState(!state)} />
            {state && <div className={styles.container} onClick={() => setState(!state)} >
                <div className={styles.weather}>
                    <span className={styles.location}>{weather.location}</span>
                    <img className={styles.icon} src={sun} alt='sun' />
                </div>
                <span className={styles.data}>{weather.data}</span>
                <span className={styles.data}>Temperature: {weather.temperature} {weather.unitTemp}</span>
                <span className={styles.data}>Windspeed: {weather.windspeed} {weather.unitWind} km/h</span>
                <span className={styles.data}>Precipitation probability: {weather.hourly} {weather.precipitation} </span>
            </div>}
        </div>
    )
}