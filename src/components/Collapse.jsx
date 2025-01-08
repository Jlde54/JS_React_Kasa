import { useState } from "react";
import styles from '../styles/Collapse.module.scss'
import arrowUp from '../assets/arrow_up_white.png'

function Collapse(param) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleCollapse = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <div className={styles.collapse}>
            <div className={styles.collapse__header} onClick={toggleCollapse}>
                <p className={styles.collapse__title}>{param.title}</p>
                <img className={`${styles.collapse__arrow} ${isOpen ? styles["collapse__arrow--open"] : ""}`} src={arrowUp} alt="Chevron"/>
            </div>
            <p className={`${styles.collapse__content} ${isOpen ? styles["collapse__content--open"] : ""}`}>{param.content}</p>
        </div>
    )
}

export default Collapse