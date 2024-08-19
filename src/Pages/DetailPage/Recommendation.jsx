import React from 'react'
import useFetch from '../../Hook/useFetch'
import Carousel from '../../Components/caraousel/Caraousel'

function Recommendation({mediaType, id}) {
    const { data, loading } = useFetch(
        `/${mediaType}/${id}/recommendations`
    )
    
  return (
    <Carousel title="Recommendations"
        data={data?.results}
        loading={loading}
        endpoint={mediaType}
    />
  )
}

export default Recommendation