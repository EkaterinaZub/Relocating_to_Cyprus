import styles from './Offer.module.css';
import Carousel from 'nuka-carousel';
import { offer } from '../../data/offer'
import { Button } from '../../../common/Button/Button';

export const Offer = () => {
    return (
        
        <Carousel 
        // autoplay={true}
        wrapAround={true}
           

        defaultControlsConfig={{
            
        
                nextButtonStyle: {
                    // display: 'none'
                    // position: 'absolute',
                    width: '200px',
                    height: '200px',
                    padding: '200px',
                    marginRight: '-300px',
                    background: 'rgba(0, 0, 0, 0)'

                },
                nextButtonText: ' ',
                prevButtonStyle: {
                    // position: 'absolute',
                    // display: 'none'
                    width: '200px',
                    height: '200px',
                    padding: '200px',
                    marginLeft: '-300px',
                    background: 'rgba(0, 0, 0, 0)',
                    
                },
                prevButtonText: ' ',
                pagingDotsStyle:{
                    width: '30px',
                    fill: 'white',
                    display: 'flex',
                   
                },
                pagingDotsClassName: styles.dot,
                pagingDotsContainerClassName: styles.carus,
                containerClassName: styles.containerDot
        }}>
            {
                offer.map((slider, index) =>
                
                    <div className={styles.container} key={slider.id}>
                        <img className={styles.image} src={slider.image.src} alt={slider.image.alt} />
                        <div className={styles.offer}>
                            <div className={styles.investments}>
                                <span className={styles.span}>{slider.investments}</span>
                                <span className={styles.span}>{slider.business}</span>
                                <span className={styles.span}>{slider.family}</span>
                            </div>
                            <div className={styles.title}>
                           
                           
                                <h1 className={index === 1 || index === 2 || index === 4 ? styles.header_color : styles.header}>{slider.title}</h1>
                                {
                                    slider.experience
                                    ? <span className={styles.experience}>Seamless – Exceptional – Experience </span>
                                    : " "
                                }
                                <span className={index === 1 || index === 2 || index === 4 ? styles.text_color : styles.text}>{slider.text}</span>
                            </div>
                            <Button title={slider.buttonTitle} addStyles={styles.button} />
                        </div>
                    </div>

                )
            }
        </Carousel>
        

    )
}