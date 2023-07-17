import Carousel from 'nuka-carousel';
import styles from './QuestionCarousel.module.css'
import {questions} from '../../../data/questions'
import { Title } from '../../../../common/Title/Title';
import { useState, useEffect } from 'react';

export const QuestionCarousel = ()=>{
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    // console.log(screenSize)
    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
        
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);

        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

   

    

    return(
        <div className={styles.container}>
        <Title title='Frequently Asked Questions' addStyles={styles.title}/>
        <Carousel
        
        slidesToShow={screenSize.width <= 1030  ? 2 : 3 }
        slidesToScroll={screenSize.width <= 1030 ? 2 : 3 }
        
        autoplay={true}
        wrapAround={true}
        defaultControlsConfig={{
            containerClassName: styles.carousel,
            nextButtonStyle: {
                    // display: 'none',
                    width: '200px',
                    height: '200px',
                    padding: '150px',
                    marginRight: '-50px',
                    background: 'rgba(0, 0, 0, 0)'
                },
                // nextButtonText: ' ',
                prevButtonStyle: {
                    // display: 'none',
                    width: '200px',
                    height: '200px',
                    padding: '150px',
                    marginLeft: '-100px',
                    background: 'rgba(0, 0, 0, 0)',
                   
                },
                pagingDotsStyle:{
                    width: '30px',
                    fill: 'white',
                   
                   
                },
        }}
        >
        
        {
            
            questions.map(card => 
                <div className={styles.container2} key={card.id}>
                <div  className={styles.cards}>
                <img className={styles.image} src={card.image.src} alt={card.image.alt}/>
                <span className={styles.investments}>{card.investments}</span>
                <h3 className={styles.question}>{card.question}</h3>
                <span className={styles.answer}>{card.answer}</span>

                </div>
                </div>
            )
            
        }
        

        </Carousel>
        </div>
    )
}