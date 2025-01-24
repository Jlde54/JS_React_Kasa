import Gallery from '../components/Gallery'
import Banner from '../components/Banner'
import styles from '../styles/Home.module.scss'
import imgCliff from '../assets/img_cliff.png'

function Home() {
    const BANNER_DATA = {
        text: "Chez vous, partout et ailleurs",
        imgAlt: "Falaise",
        imgSrc: imgCliff
    }

    return (
        <div className={styles.home}>
            <Banner 
                text={BANNER_DATA.text} 
                img={BANNER_DATA.imgSrc} 
                alt={BANNER_DATA.imgAlt}/>
            <Gallery />
        </div>
    )
}

export default Home