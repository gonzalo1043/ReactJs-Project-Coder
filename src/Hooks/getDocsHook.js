import { useEffect, useState } from 'react'

export const useGetDocs = (asyncFunction, dependencies = []) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState (null)

    useEffect(() => {

        setLoading(true)
        asyncFunction()
            .then(result => {
                const vinylsAdapted = result.docs.map(doc => {
                    const fields = doc.data()
                    console.log(fields)

            return {id: doc.id, ...fields}
            })
                setData(vinylsAdapted)
        })
        .catch (error => {
            setError(error)
        })
            .finally (() => {
                setLoading(false)
        })
    }, [dependencies])

    return {
        data, 
        loading,
        error
    }
}




