import styles from './Offer.module.css';
import Carousel from 'nuka-carousel';
import { offer } from '../../data/offer'
import { Button } from '../../../common/Button/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { EffectComponents } from '../EffectComponents/EffectComponents';

export const Offer = ({ weather }) => {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    return (

        <Carousel
            // autoplay={true}
            wrapAround={true}


            defaultControlsConfig={{


                nextButtonStyle: {
                    background: 'rgba(0, 0, 0, 0)'

                },
                prevButtonClassName: styles.buttonStyle,
                nextButtonText: ' ',
                nextButtonClassName: styles.buttonStyle,
                prevButtonStyle: {
                    background: 'rgba(0, 0, 0, 0)'

                },
                // {
                // position: 'absolute',
                // display: 'none'
                // width: '200px',
                // height: '200px',
                // padding: '200px',
                // marginLeft: '-300px',
                // background: 'rgba(0, 0, 0, 0)',

                // },
                prevButtonText: ' ',
                pagingDotsStyle: {
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
                        {
                            (screenSize.width < 900 && slider.image2) ?

                                <img className={styles.image} src={slider.image2.src} alt={slider.image2.alt} /> :
                                <img className={styles.image} src={slider.image.src} alt={slider.image.alt} />
                        }
                        <div className={styles.offer}>
                            <div className={styles.investments}>
                                <Link to='/investments' className={styles.span}>{slider.investments}</Link>
                                <Link to='/business' className={styles.span}>{slider.business}</Link>
                                <Link to='/family' className={styles.span}>{slider.family}</Link>
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
                            <Link to={slider.link}>
                            <Button title={slider.buttonTitle} addStyles={styles.button} /></Link>
                            <EffectComponents weather={weather} />
                        </div>



                    </div>

                )
            }
        </Carousel>


    )
}