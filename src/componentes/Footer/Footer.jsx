import Instagram from '../../assets/instagram.png'
import Twitter from '../../assets/Twitter.png'
import Youtube from '../../assets/youtube.png'
import Linkedin from '../../assets/linkedin.png'
import Facebook from '../../assets/facebook.png'
import s from './Footer.module.scss'

export default function Footer(){
    return(
    <footer>
        <section className={s.containerlinks}>

        <p>4002-8922</p>

        <section className={s.linksfooter}>
            <a href=""><img src={Facebook} alt="logo com fundo azul e um F branco" /></a>
            <a href=""><img src={Twitter} alt="logo de um passarinho em um fundo azul claro" /></a>
            <a href=""><img src={Youtube} alt="logo de uma senta dentro de um retangulo simulando um play em fundo vermelho" /> </a>
            <a href=""><img src={Linkedin} alt="logo com um I e um N em um fundo azul" /></a>
            <a href=""><img src={Instagram} alt="logo de uma camera " /></a>
       </section>

       </section>
       <section className={s.rodape}><p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p></section>
        
        </footer>
    )
}