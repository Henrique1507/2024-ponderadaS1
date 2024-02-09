import torcida from '../../img/spfc-torcida.jpg'
import styles from '../../components/layouts/Body.module.css'

function Body () {

    function tricolor() {
        return(
            alert('Parabéns! Você é da Torcida Independente')
        )
    }
    

    return (
        <div className={styles.body}>
            <div className={styles.torcida}><img src={torcida} alt='torcida'/></div>
            <button className={styles.button} onClick={tricolor}>CLIQUE AQUI PARA FAZER PARTE DA TORCIDA</button>
        </div>
    )
}

export default Body