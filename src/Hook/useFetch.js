import { useEffect,useState } from 'react'
import { fetchData } from '../api/TMDB'

function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError]  = useState(null)

    useEffect(() => {
        let isMounted = true

        const fetchDataFromApi = async () => {
            setLoading(true)
            setData(null)
            setError(null)

            try {
                const res = await fetchData(url)
                if(isMounted){
                    setData(res)
                }
            } catch (error) {
                if(isMounted){
                    setError("Something Went Wrong!")
                }
            } finally {
                if(isMounted){
                    setLoading(false)
                }
            }
        }

        fetchDataFromApi()

        //Cleanup function added here
        return () => {
            isMounted = false
        }

    },[url])

  return {data, loading, error}
}

export default useFetch