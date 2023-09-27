import { useEffect, useState } from 'react'
import VynilList from '../VinylList/VinylList'
import { useParams } from 'react-router-dom'
import classes from './items.module.css'
import { db } from '../../service/Firebase/firebaseCongif'
import { getDocs, collection, query, where  } from 'firebase/firestore'
import { useGetDocs } from '../../Hooks/getDocsHook'

const ItemsListContainerNR = ({greeting}) => {

        const {newReleasesId} = useParams()
        const vinylsRefNR = newReleasesId != 'SI' ? collection(db, 'vinyls') : query(collection(db, 'vinyls'), where('newReleases', '==', newReleasesId ))

        const asyncFunction = () => getDocs(vinylsRefNR)
        const {data: vinyl, loading } = useGetDocs(asyncFunction, newReleasesId)
        
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


export default ItemsListContainerNR
