import PropTypes from 'prop-types';
import { useState } from 'react'
import arrowRight from '../assets/arrow_right_white.png'
import arrowLeft from '../assets/arrow_left_white.png'

import styles from '../styles/Slider.module.scss'

function Slider({pictures}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    }
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    }
    return (
        <div className={styles.slider}>
            <div className={styles.slider__wrapper}>
                {pictures.map((picture, index) => (
                    <img 
                        key={index} 
                        className={styles.slider__img} 
                        src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
                ))}
                {pictures.length > 1 && (
                    <>
                        <button onClick={handlePrev}><img className={styles.slider__arrowLeft} src={arrowLeft} alt='Previous' /></button>
                        <button onClick={handleNext}><img className={styles.slider__arrowRight} src={arrowRight} alt='Next' /></button>
                        <div className={styles.slider__counter}>{currentIndex+1}/{pictures.length}</div>
                    </>
                )}
            </div>
        </div>
    )
}

Slider.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider