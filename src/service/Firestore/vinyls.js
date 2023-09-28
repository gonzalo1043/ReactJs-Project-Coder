import { createAdaptedVinylFromFirestore } from "../../adapters/createAdaptedVinylFromFirestore"
import { db } from "../Firebase/firebaseCongif"
import { getDocs, collection, query, where, doc, getDoc  } from 'firebase/firestore'

export const getVinyls = (categoryId) => {
    const vinylsRef = !categoryId ? collection(db, 'vinyls') : query(collection(db, 'vinyls'), where('categoria', '==', categoryId ))

                return getDocs(vinylsRef)
                        .then(querySnapshot => {
                                const vinylsAdapted = querySnapshot.docs.map(doc => {
                                    return createAdaptedVinylFromFirestore(doc)
                        })
                        return(vinylsAdapted)
                }).catch(error => {
                    return (error)
                })
}

export const getVinylById = (vinylId) => {
    const vinylRef = doc(db, 'vinyls', vinylId)

    return getDoc(vinylRef).then(documentSnapshot => {
        return createAdaptedVinylFromFirestore(documentSnapshot)

    })
    .catch(error => {
        return (error)
    })
}