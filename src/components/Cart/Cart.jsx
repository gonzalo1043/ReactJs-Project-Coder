import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Cart = () => {

    const {cart, removeItem, total} = useCart()

    return (
        <>
            <h1 className="detailTitle">Carrito</h1>
            
            <section>
            <CardGroup>
                {
                    cart.map(vinyl => {

                        return (
                            <div key= {vinyl.id}>
                                
                            <Card className="cardCart">
                                    <Card.Img variant="top" src={vinyl.img} className="imgCardCart" />
                                    <Card.Body>
                                    <Card.Title className="cartText">{vinyl.nombre} {vinyl.artista}</Card.Title>
                                    <Card.Text className="cartText">
                                        precio: US$ {vinyl.precio}
                                    </Card.Text>
                                    <Card.Text className="cartText">
                                        cantidad: {vinyl.quantity}
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <button onClick={() => removeItem(vinyl.id)}>X</button>
                                    </Card.Footer>
                                </Card>
                            </div>
                        )
                    })
                }
                </CardGroup>
            </section>
            
            <div className="footerCart">
                <h1 className="totalCart">Total: USD${total}</h1>            
                {cart.length != 0 && <Link className="botonFinalizarCompra" to='/checkout'>
                Checkout
            </Link>}
            </div>
            
        </>
    )
}

export default Cart
