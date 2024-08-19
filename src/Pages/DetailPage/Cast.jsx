import React from 'react'
import { useSelector } from 'react-redux'
import ContentWrapper from '../../Components/contentWrapper/ContentWrapper'
import IMG from '../../Components/LazyLoadImage/IMG'
import avatar from '../../assets/avatar/avatar.png'

function Cast({data, loading}) {
    const { url } = useSelector((state) => state.home)

    const skeleton = () => {
        return (
            <div className='skItem'>
                <div className='circle skeleton w-[125px] h-[125px] rounded-full mb-4 md:w-[175px] md:h-[175px] md:mb-6'></div>
                <div className='row skeleton w-full h-5 rounded-md mb-2.5'></div>
                <div className='row2 skeleton w-3/4 h-5 rounded-md mx-auto'></div>
            </div>
        )
    }
  return (
    <div className='castSection relative mb-12'>
        <ContentWrapper>
            <div className='sectionHeading text-2xl text-white mb-6'>Top Cast</div>
            {!loading ? (
                <div className='listItems flex gap-5 overflow-x-auto scroll-smooth hide-scrollbar -mr-5 -ml-5 px-5 md:mx-0 md:px-0'>
                    {data?.map((item) => { 
                        let imgUrl = item.profile_path ? url.profile + item.profile_path : avatar;
                        return (
                            <div className='listItem text-center text-white' key={item.id}>
                                <div className='profileImg w-[125px] h-[125px] rounded-full overflow-hidden mb-4 md:w-[175px] md:h-[175px] md:mb-6'>
                                    <IMG src={imgUrl} className={`w-full h-full object-cover object-[center_top] block`}/>
                                </div>
                                <div className='name text-base leading-5 font-semibold md:text-lg md:leading-6'>{item.name}</div>
                                <div className='character text-base leading-5 opacity-50 md:text-lg md:leading-6'>{item.character}</div>
                            </div>
                        )
                    })}
                </div>
            ) : (
                    <div className='castSkeleton flex gap-5 overflow-x-auto -mr-5 -ml-5 px-5 md:mx-0 md:px-0'>
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                    </div>
            )}
        </ContentWrapper>
    </div>
  )
}

export default Cast