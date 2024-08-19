import React from 'react'

function ContentWrapper({ children, className }) {
  return (
    <div className={`contentWrapper w-full max-w-[1200px] mx-auto px-4` || className} >{children}</div>
  )
}

export default ContentWrapper