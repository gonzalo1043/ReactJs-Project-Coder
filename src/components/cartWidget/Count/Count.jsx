import { useState } from "react"

const ItemCount = ({onAdd, stock, initial = 1}) => {

    const [count, setCount] = useState(initial)

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1 )
        }
    }

    const increment = () => {
        if (count < stock) {
            setCount(count + 1 )
        }
        
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={()=> onAdd(count)}>Agregar al carrito</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount