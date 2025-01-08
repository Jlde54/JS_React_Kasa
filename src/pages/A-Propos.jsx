import Banner from '../components/Banner'
import About from '../components/About'
import styles from '../styles/A-Propos.module.scss'
import imgMontain from '../assets/img_montain.png'

function A_Propos() {
    const text = ""
    const altText = "Montagnes"
    return (
        <div className={styles.aPropos}>
            <Banner text={text} img={imgMontain} alt={altText}/>
            <About />
        </div>
    )
}

export default A_Propos