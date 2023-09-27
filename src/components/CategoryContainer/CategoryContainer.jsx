import { useNavigate } from "react-router-dom"
import classes from './Category.module.css'
import { db } from "../../service/Firebase/firebaseCongif"
import { getDocs, collection } from "firebase/firestore"
import { useEffect, useState } from "react"

const CategoryContainer = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(()=> {

        const categoriesRef = collection(db, 'categories')
        getDocs(categoriesRef)
        .then(querySnapshot => {
            const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
            console.log(fields)

            return {id: doc.id, ...fields}
    })
    setCategories(categoriesAdapted)
})
    }, [])
    
    return (
        <nav className={classes.NavCategory}>

            <h2></h2>
            <section>
                {
                    categories.map(cat => (
                        <button key={cat.id} className={classes.buttonC} onClick={() => navigate(`/category/${cat.slug}`)}>{cat.nombre}</button>
                    ))
                }
            </section>
        </nav>
    )
}

export default CategoryContainer