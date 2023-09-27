

import { useEffect, useState } from 'react'
import VynilList from '../VinylList/VinylList'
import { useParams } from 'react-router-dom'
import classes from './items.module.css'
import { db } from '../../service/Firebase/firebaseCongif'
import { getDocs, collection, query, where  } from 'firebase/firestore'
import { useGetDocs } from '../../Hooks/getDocsHook'


const ItemsListContainerDiscount = ({greeting}) => {

    const {descuentoId} = useParams()
    const vinylsRefDiscount = !descuentoId ? collection(db, 'vinyls') : query(collection(db, 'vinyls'), where('descuento', '==', descuentoId))

    const asyncFunction = () => getDocs(vinylsRefDiscount)
    const {data: vinyl, loading } = useGetDocs(asyncFunction, descuentoId  )

        if(loading) {
                return (<span className="loader"></span>)
        }

        return (<>
        <main>
                <div>
                        <h1 className={classes.greeting}>{greeting}</h1>
                        <VynilList vinyl={vinyl} />
                </div>
        </main>
        </>)
}


export default ItemsListContainerDiscount
































