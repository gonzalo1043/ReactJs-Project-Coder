import { useContext, useState } from "react"
import classes from './VinylDetail.module.css'
import ItemCount from "../cartWidget/Count/Count"
import { useCart } from "../../context/CartContext"
import { useNotification } from "../../Notification/NotificationService"
import { Link } from "react-router-dom"
import { useDiscount } from "../../Hooks/DiscountHook"


const VinylDetail = ({nombre, id, artista, precio, img, categoria, stock, descuento}) => {

    const {addItem} = useCart()
    const {setNotification} = useNotification()
    const [quantity, setQuantity] = useState(0)

    const {discountPorcentage} = useDiscount()

    const handleOnAdd = (quantity) => {
        const objVinylToAdd = {
            id, nombre, precio, quantity,descuento
        }
        addItem(objVinylToAdd)
        console.log('agregue al carrito ', quantity)
        setNotification('dark', `Se agregaron correctamente al carrito: ${quantity} vinilo(s)`)
        setQuantity(quantity)
    }

    if(descuento == 'SI') {
        precio = Math.round (precio = precio * discountPorcentage)
    }

    return (
        <div>
            <h1>{nombre} - {artista}</h1>
            <img className={classes.img} src={img}/>
            <h3>categoria: {categoria}</h3>
            <h3>precio: u$s {precio}</h3>
            
            {
                quantity === 0 ? (
                    <ItemCount onAdd={handleOnAdd} stock={stock} />
                ) : (
                    <Link to='/cart'>Finalizar compra</Link>
                )
            }
        </div>
    )
}

export default VinylDetail