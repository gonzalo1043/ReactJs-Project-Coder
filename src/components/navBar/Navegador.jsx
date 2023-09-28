import Titulo from '../navBarPartes/titulo'
import { NavLink } from 'react-router-dom'
import classes from './Navegador.module.css'
import CartWidget from '../cartWidget/cartWidget'

const NavBar = ()=> {

    return (<> 
    <div>
        <Titulo></Titulo>
    </div>
    
    <div className={classes.NavLink}>
        <NavLink to = '/catalogo' className={classes.button} >Catalogo</NavLink>
        <NavLink to = '/newReleases/SI'  className={classes.button}>Nuevos lanzamientos</NavLink>
        <NavLink to = '/category'className={classes.button} >Categoria</NavLink>
        <NavLink to = '/descuento/SI' className={classes.button}>Descuentos</NavLink>
    </div>
    
    <div className={classes.NavDer}>
    {/* <Search/> */}
    <CartWidget className={classes.cart}/>
    </div>
    
    
    
    
    
    </>)
}

export default NavBar