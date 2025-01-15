import { useState } from "react"
import PropTypes from "prop-types"
import styles from '../styles/Collapse.module.scss'
import arrowUp from '../assets/arrow_up_white.png'

function Collapse({title, content}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleCollapse = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <div className={styles.collapse}>
            <div className={styles.collapse__header} onClick={toggleCollapse}>
                <p className={styles.collapse__title}>{title}</p>
                <img 
                    className={`${styles.collapse__arrow} ${isOpen ? styles["collapse__arrow--open"] : ""}`} 
                    src={arrowUp} 
                    alt="Chevron"/>
            </div>
            <p className={`${styles.collapse__content} ${isOpen ? styles["collapse__content--open"] : ""}`}>{content}</p>
        </div>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };

export default Collapse