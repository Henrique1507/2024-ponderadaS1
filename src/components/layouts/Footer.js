import styles from '../layouts/Footer.module.css'
import imagem from '../../img/spfc-mundial.jpg'

function Footer () {
    return (
        <footer className={styles.footer}>
            <h1 className={styles.footer_frase}>SÃO PAULO MAIOR CLUBE DO BRASIL</h1>
            <div className={styles.spfc_mundial}><img src={imagem} alt="spfc"/></div>
        </footer>
    )

}

export default Footer