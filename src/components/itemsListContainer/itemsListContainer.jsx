import { useEffect, useState } from 'react'
import VynilList from '../VinylList/VinylList'
import { useParams } from 'react-router-dom'
import classes from './items.module.css'
import { db } from '../../service/Firebase/firebaseCongif'
import { getDocs, collection, query, where  } from 'firebase/firestore'


function ItemsListContainer  ({greeting}) {
        const [vinyl, setVinyl] = useState([])
        const {categoryId} = useParams()
        const [loading, setLoading] = useState (true)
        


        useEffect(()=> {
                
                const vinylsRef = !categoryId ? collection(db, 'vinyls') : query(collection(db, 'vinyls'), where('categoria', '==', categoryId ))

                getDocs(vinylsRef)
                        .then(querySnapshot => {
                                const vinylsAdapted = querySnapshot.docs.map(doc => {
                                        const fields = doc.data()
                                console.log(fields)

                                return {id: doc.id, ...fields}
                        })
                        setVinyl(vinylsAdapted)
                }).catch(error => {
                        console.log(error)
                }).finally(()=> {
                        setLoading(false)
                })

        }, [categoryId])


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

export default ItemsListContainer