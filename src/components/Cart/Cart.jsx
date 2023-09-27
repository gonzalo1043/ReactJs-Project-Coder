import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

const Cart = () => {

    const {cart, removeItem, total} = useCart()

    return (
        <>
            <h1>Carrito</h1>
            <section>
                {
                    cart.map(vinyl => {

                        return (
                            <div key= {vinyl.id} style={{display: 'flex', justifyContent:'space-around'}}>
                                
                                <h2>{vinyl.nombre}</h2>
                                
                                <h3>precio: $USD {vinyl.precio}</h3>
                                
                                <button onClick={() => removeItem(vinyl.id)}>remove</button>
                            </div>
                        )
                    })
                }
            </section>

            <h1>total: USD${total}</h1>
            
            {console.log(cart)}
            
            {cart.length != 0 && <Link to='/checkout'>
                Checkout
            </Link>}
        </>
    )
}

export default Cart