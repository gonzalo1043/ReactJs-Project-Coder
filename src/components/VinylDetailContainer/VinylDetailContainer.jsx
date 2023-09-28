import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import VinylDetail from "../VinylDetail/VinylDetail"
import { db } from "../../service/Firebase/firebaseCongif"
import { getDoc, doc } from "firebase/firestore"
import { getVinylById } from "../../service/Firestore/vinyls"



const VinylDetailContainer = () => { 
    const [vinyl, setVinyl] = useState(null)
    const {vinylId} = useParams()
    const [loading, setLoading] = useState(true)

useEffect(() => {
    getVinylById(vinylId)
    .then(vinyls => {
        setVinyl(vinyls)
    })
    .catch(error => {
        console.log(error)
    }).finally(()=> {
        setLoading(false)
    })
}, [vinylId])

if(loading) {
    return (<span className="loader"></span>)
}

return (
    <main>
        <h1 className="detailTitle">Detalle del producto</h1>
        <VinylDetail {... vinyl} />
    </main>
)
}

export default VinylDetailContainer