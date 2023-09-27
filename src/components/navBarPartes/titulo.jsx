import tituloLogo from './assets/vinyl-record_icon-icons.com_60174.png'
import { useNavigate } from 'react-router-dom'
import classes from './navbar.module.css'

const Titulo = () => {

    const navigate = useNavigate()

    return (
    <nav className="navbar bg-body-tertiary">
    <div onClick={() => navigate('/')} className={classes.pointer}>
        <img src={tituloLogo} alt="Logo" width="200" height="200" className="d-inline-block align-text-top"></img>
        <h1 >VV VINYL</h1>
    </div>
    </nav>)
}

export default Titulo