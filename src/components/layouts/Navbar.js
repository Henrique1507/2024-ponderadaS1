import spfc from '../../img/spfc.jpg'

function Navbar () {
    return(
        <nav>
            <img src={spfc} alt="spfc"/>
            <ul>
                <li><a href='https://www.instagram.com/?hl=pt-br'>Instagram</a></li>
                <li><a href='https://www.instagram.com/?hl=pt-br'>Youtube</a></li>
                <li><a href='https://www.instagram.com/?hl=pt-br'>Twitter</a></li>
                <li><a href='https://www.instagram.com/?hl=pt-br'>Especial</a></li>
            </ul>
        </nav>
    )
}

export default Navbar