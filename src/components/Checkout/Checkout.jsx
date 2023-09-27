import { useCart } from "../../context/CartContext"
import { addDoc, collection, writeBatch, query, where, documentId, getDocs } from "firebase/firestore"
import { db } from "../../service/Firebase/firebaseCongif"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {useForm} from 'react-hook-form'


const Checkout = () => {

    const [loading, setLoading] = useState(false)
    
    const {cart, total, clearCart} = useCart()

    const navigate = useNavigate()

    const {register, handleSubmit, formState:{errors}} = useForm()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mail:'',
        phone: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const createOrder = async () => {
        try {
            const dataForm = {...formData}
        setLoading(true)
        const objOrder = {
        buyer: {
            firstName: dataForm.firstName ,
            lastName: dataForm.lastName,
            mail: dataForm.mail,
            phone: dataForm.phone
        },
        items: cart,
        total: total
    };

    const batch = writeBatch(db)
    const outOfStock = []

    const ids = cart.map(prod => prod.id)
    console.log(ids)

    const productsRef = query (collection(db, 'vinyls'),where(documentId(), 'in', ids))

    const { docs } = await getDocs(productsRef)


    docs.forEach(doc => {
        const fields = doc.data()
        const stockdb = fields.stock

        const productAddedToCart = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productAddedToCart?.quantity

        if (stockdb >= prodQuantity) {
            batch.update(doc.ref, {stock: stockdb - prodQuantity})
        } else {
            outOfStock.push({id: doc.id, ...fields})
        }
    })

    if (outOfStock.length === 0) {
        const orderRef = collection(db, 'orders')

        const {id: OrderId} = await addDoc(orderRef, objOrder)

        batch.commit()
        clearCart()
        navigate('/')
        
        console.log('el numero de orden es: ' + OrderId)
    }
        }catch (error) {
            console.log('Ocurrio un error')
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1>Se esta generando su orden</h1>
    }

    
    return (
        <>
            <h2>Checkout</h2>
            <form onChange={handleChange} onSubmit={handleSubmit((data) => {
                console.log(data)
            }) }>
                <input {...register("firstName", {required:'Obligatorio'})} placeholder="Nombre" type="text" />

                <input {...register("lastName", {required:'Obligatorio'})} placeholder="Apellido" type="text" />

                <input {...register("mail", {required:'Obligatorio'})} placeholder="email" type="text" />

                <input {...register("phone", {required:'Obligatorio'})} placeholder="Numero" type="number" />
                
                <p>{errors.lastName?.message}</p>

                <input type="submit" />
            </form>
            <button onClick={createOrder}>Generar orden</button>
        </>
    )
}

export default Checkout