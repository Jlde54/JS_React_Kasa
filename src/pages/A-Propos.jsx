import Banner from '../components/Banner'
import About from '../components/About'
import styles from '../styles/A-Propos.module.scss'
import imgMontain from '../assets/img_montain.png'

function A_Propos() {
    const BANNER_DATA = {
            text: "",
            imgAlt: "Montagnes",
            imgSrc: imgMontain
        }

    return (
        <div className={styles.aPropos}>
            <Banner 
                text={BANNER_DATA.text} 
                img={BANNER_DATA.imgSrc} 
                alt={BANNER_DATA.imgAlt}/>
            <About />
        </div>
    )
}

export default A_Propos