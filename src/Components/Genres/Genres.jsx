import React from 'react'
import { useSelector } from "react-redux"

function Genres({ data }) {
    const  { genres } = useSelector((state) => state.home)
  return (
    <div className='genres flex gap-2'>
        {data?.map((g) => {
            if(!genres[g]?.name) return;
            return(
                <div key={g} className='genre bg-rose-500 px-2 py-1 text-sm rounded text-white'>
                    {genres[g]?.name}
                </div>
            )
        })}
    </div>
  )
}

export default Genres