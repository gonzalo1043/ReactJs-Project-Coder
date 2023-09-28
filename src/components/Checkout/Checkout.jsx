import { useCart } from "../../context/CartContext"
import { addDoc, collection, writeBatch, query, where, documentId, getDocs } from "firebase/firestore"
import { db } from "../../service/Firebase/firebaseCongif"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {useForm} from 'react-hook-form'
import { useNotification } from "../../Notification/NotificationService"

const Checkout = () => {

    const {setNotification} = useNotification()
    const {cart, total, clearCart} = useCart()
    
    const [loading, setLoading] = useState(false)
    const [activateBoton, setActivateBoton] = useState(false)
    const [formData, setFormData] = useState({firstName: '', lastName: '', mail:'', phone: ''})

    const navigate = useNavigate()
    const {register, handleSubmit, formState:{errors}} = useForm()

    

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

    const vinylsRef = query (collection(db, 'vinyls'),where(documentId(), 'in', ids))

    const { docs } = await getDocs(vinylsRef)


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
        
        setNotification('dark', `Su compra ha sido realizada con exito. N° de order: ` + OrderId)
    }
        }catch (error) {
            setNotification('light', 'Ocurrio un error')
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1>Se esta generando su orden</h1>
    }
    return (
        <>
            <h2 className="detailTitle">Checkout</h2>
            
            <form className="checkOutForm" onChange={handleChange} onSubmit={handleSubmit((data) => {
                setActivateBoton(true)
            })
            }>
                <input className="inputForm" {...register("firstName", {required:'Obligatorio'})} placeholder="Nombre" type="text" />

                <input className="inputForm" {...register("lastName", {required:'Obligatorio'})} placeholder="Apellido" type="text" />

                <input className="inputForm" {...register("mail", {required:'Obligatorio'})} placeholder="email" type="text" />

                <input {...register("phone", {required:'Obligatorio'})} placeholder="Celular" type="phone" />
                
                <p>{errors.lastName?.message}</p>

                <input className="submitButton" type="submit" />
            </form>

            {
                !activateBoton ? <button className="disableButton" disabled = {!activateBoton}> Generar orden</button> : <button className= 'buttonDetailCard' disabled = {!activateBoton} onClick={createOrder}>Generar orden</button>
            }
        </>
    )
}

export default Checkout