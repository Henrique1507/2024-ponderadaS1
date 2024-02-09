import styles from '../layouts/Footer.module.css'
import imagem from '../../img/spfc-mundial.jpg'

function Footer () {
    return (
        <footer>
            <h1>SÃO PAULO MAIOR CLUBE DO BRASIL</h1>
            <div className={styles.spfc_mundial}><img src={imagem} alt="spfc"/></div>
        </footer>
    )

}

export default Footer