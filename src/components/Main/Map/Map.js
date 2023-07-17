import styles from './Map.module.css'
import map from '../../../assets/images/map.png'
import { Title } from '../../../common/Title/Title'
import { Location } from './Location/Location'
import { CardLocation } from './CardLocation/CardLocation'
import { useState } from 'react'
import { cyprus } from '../../data/cyprus'


export const Map = () => {
    const [state,setState]=useState(false)
    const [show, setShow]= useState(cyprus)
   
    console.log(show)
    console.log(state)
   
   

    const handleclick =(id)=> {
       
        const newshow = show.filter((el) => el.name === id );
        setShow(newshow)
        setState(true);
        
       
     
        }
     
    
    return (

        <div className={styles.container}>
        
            <div className={styles.map}>
                <Title addStyles={styles.title} title='FIND THE IDEAL LOCATION TO CALL HOME' />
                <span className={styles.text}>Click your mouse over any city to learn more about it</span>
                <Location  handleclick={handleclick} />
                
            </div>
            <CardLocation state={state} setState={setState} show={show}/>
        </div>

    )
}