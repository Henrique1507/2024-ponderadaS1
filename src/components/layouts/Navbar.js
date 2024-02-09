import spfc from '../../img/spfc.jpg'
import styles from '../../components/layouts/Navbar.module.css'

function Navbar () {
    return(
        <nav className={styles.navbar}>
            <div className={styles.spfc}><img src={spfc} alt="spfc"/></div>
            <ul className={styles.list}>
                <li className={styles.sociais}><a href='https://www.instagram.com/saopaulofc/?hl=pt-br'>Instagram</a></li>
                <li className={styles.sociais}><a href='https://www.youtube.com/@saopaulofc'>Youtube</a></li>
                <li className={styles.sociais}><a href='https://twitter.com/SaoPauloFC'>Twitter</a></li>
                <li className={styles.sociais}><a href='https://www.youtube.com/watch?v=WU1Vum9cDbE&ab_channel=eduklotz'>Especial</a></li>
            </ul>
        </nav>
    )
}

export default Navbar