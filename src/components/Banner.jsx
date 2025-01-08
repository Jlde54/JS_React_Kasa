import styles from '../styles/Banner.module.scss'

function Banner(param) {
    return (
        <div className={styles.banner}>
            <img className={styles.banner__img} src={param.img} alt={param.alt}/>
            <p className={styles.banner__text} >{param.text}</p>
        </div>
    )
}

export default Banner