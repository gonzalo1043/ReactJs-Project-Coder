
import classes from './navbar.module.css'

const Search = ( ) => {
    return <nav className={classes.navbar}>
    <div className={classes.containerFluid}>
    <form className={classes.dFlex} role="search">
        <input className={classes.formControl} type="search" placeholder="Buscar" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
    </form>
    </div>
    </nav>
}

export default Search