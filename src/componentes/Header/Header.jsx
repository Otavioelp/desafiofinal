import LogoLivro from '../../assets/LogoLivro.png/';
import Venha from '../../assets/Venha.png'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Inicio from '../../paginas/Inicio/Inicio';
import LivrosDoados from '../../paginas/Livrosdoados/LivrosDoados'
import QueroDoar from '../../paginas/QueroDoar/QueroDoar'
import Lupa from '../../assets/Lupa.png/'
import s from './header.module.scss'

export default function Header() {
    return(
    <BrowserRouter>
    <header className={s.header}>
    <section className={s.logo}>
        <img src={LogoLivro} 
        alt="ilustração de um livro aberto" />
        <h1>Livros Vai na Web</h1>
       </section>

        <nav>
            <ul>
                <li>
                    <Link className={s.link} to='/Inicio'>Inicio</Link>
                    </li>
                <li >
                    <Link className={s.link} to='/LivrosDoados'>Livros Doados</Link></li>
                <li > 
                    <Link className={s.link} to='/QueroDoar'>Quero Doar</Link></li>
            </ul>
             </nav>

       <section className={s.BarradeBusca}>
        <input type="search" 
        name=""
        id=""
        placeholder='O que você procura?' />
        <button><img src={Lupa} alt="" /></button>
        </section>
        
</header>

        <Routes>
            <Route path='/QueroDoar' element={<QueroDoar/>}/>
            <Route path='/LivrosDoados' element={<LivrosDoados/>}/>
            <Route path='/Inicio' element={<Inicio/>}/>

        </Routes>
        </BrowserRouter>
    )
}