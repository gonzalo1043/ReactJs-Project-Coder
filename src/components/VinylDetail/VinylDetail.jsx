import { useState } from "react"
import classes from './VinylDetail.module.css'
import ItemCount from "../cartWidget/Count/Count"
import { useCart } from "../../context/CartContext"
import { useNotification } from "../../Notification/NotificationService"
import { Link } from "react-router-dom"
import { useDiscount } from "../../Hooks/DiscountHook"

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const VinylDetail = ({nombre, id, artista, precio, img, categoria, stock, descuento}) => {

    const {addItem} = useCart()
    const {setNotification} = useNotification()
    const [quantity, setQuantity] = useState(0)

    const {discountPorcentage} = useDiscount()

    const handleOnAdd = (quantity) => {
        const objVinylToAdd = {
            id, nombre, precio, quantity,descuento, img
        }
        addItem(objVinylToAdd)
        setNotification('dark', `Se agregaron correctamente al carrito: ${quantity} vinilo(s)`)
        setQuantity(quantity)
    }

    if(descuento == 'SI') {
        precio = Math.round (precio = precio * discountPorcentage)
    }

    return (
        <>
        <Card className="cardDetail">
        <Card.Img variant="top" src={img} className={classes.img} />
        <Card.Body>
        <Card.Title>
                    <p className={classes.name}>{nombre}</p>
                    <p className={classes.artist}>{artista}</p> 
        </Card.Title>
        </Card.Body>
        <ListGroup className= "list-group-flush">
        <ListGroup.Item>categoria: {categoria}</ListGroup.Item>
        <ListGroup.Item>Cantidad en tienda: {stock}</ListGroup.Item>
        <ListGroup.Item className = {classes.priceDetail}>US$ {precio}</ListGroup.Item>
        </ListGroup>
        </Card>
        <Card className={classes.cardFooter}>
            <Card.Footer className={classes.footerDetail}>
                {
                stock != 0 ? (quantity === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    ) : (
                        <Link className="botonFinalizarCompra" to='/cart'>Finalizar compra</Link>
                    )) : <p className="NoStockText">No hay Stock de este vinilo</p> 
                    }
            </Card.Footer>
        </Card>
        </>
    )
}

export default VinylDetail
