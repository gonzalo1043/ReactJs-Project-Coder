import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import VinylDetail from "../VinylDetail/VinylDetail"
import { db } from "../../service/Firebase/firebaseCongif"
import { getDoc, doc } from "firebase/firestore"



const VinylDetailContainer = () => { 
    const [vinyl, setVinyl] = useState(null)
    const {vinylId} = useParams()
    const [loading, setLoading] = useState(true)

useEffect(() => {

    const vinylRef = doc(db, 'vinyls', vinylId)

    getDoc(vinylRef).then(documentSnapshot => {
        const fields = documentSnapshot.data()
        const vinylAdapted = {id: documentSnapshot.id, ...fields}
        setVinyl(vinylAdapted)
    }).catch(error => {
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