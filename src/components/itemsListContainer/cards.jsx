import classes from './items.module.css'
import imagenVinilo from './assets/jessie_ware_that_feels_good-portada.jpg'

const Cards = () => {
    return <>
        <div className={classes.container}>
            <div className={classes.card}>
            <div className={classes.divImagen}>
            <img className={classes.imagenVinilo} src={imagenVinilo} alt="" />
            </div>
        <div className={classes.cardBody}>
        <h2 className={classes.cardTitle}>That! Feels Good! - Jessie Ware</h2>
        <p>$USD 35</p>
        <button className="btn btn-secondary" >COMPRAR</button>
        </div>
        </div>
        </div>
        
    </>
}

export default Cards