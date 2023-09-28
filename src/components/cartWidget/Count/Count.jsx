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
        <>
            <div className="sumarRestarCount">
            <button onClick={decrement}>-</button>
            <h2 className="countNumber">{count}</h2>
            <button onClick={increment}>+</button>
        </div>
        <div>
            <button onClick={()=> onAdd(count)}>Agregar al carrito</button>
        </div>
        </>
    )
}

export default ItemCount