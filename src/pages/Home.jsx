import Gallery from '../components/Gallery'
import Banner from '../components/Banner'
import styles from '../styles/Home.module.scss'
import imgCliff from '../assets/img_cliff.png'

function Home() {
    const text = "Chez vous, partout et ailleurs"
    const altText = "Falaise"
    return (
        <div className={styles.home}>
            <Banner text={text} img={imgCliff} alt={altText}/>
            <Gallery />
        </div>
    )
}

export default Home