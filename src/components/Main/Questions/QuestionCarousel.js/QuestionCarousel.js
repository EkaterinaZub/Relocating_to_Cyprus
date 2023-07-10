import Carousel from 'nuka-carousel';
import styles from './QuestionCarousel.module.css'
import {questions} from '../../../data/questions'
import { Title } from '../../../../common/Title/Title';

export const QuestionCarousel = ()=>{
    return(
        <div className={styles.container}>
        <Title title='Frequently Asked Questions' addStyles={styles.title}/>
        <Carousel
        slidesToShow={3}
        slidesToScroll={3}
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