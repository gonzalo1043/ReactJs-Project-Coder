import { useEffect, useState } from 'react'
import VynilList from '../VinylList/VinylList'
import { useParams } from 'react-router-dom'
import classes from './items.module.css'
import { getVinyls } from '../../service/Firestore/vinyls'


function ItemsListContainer  ({greeting}) {
        const [vinyl, setVinyl] = useState([])
        const {categoryId} = useParams()
        const [loading, setLoading] = useState (true)
        


        useEffect(()=> {
                getVinyls(categoryId)
                .then(vinyls => {
                        setVinyl(vinyls)
                })
                .catch(error => {
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