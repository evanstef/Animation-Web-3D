import React from 'react'

interface Props {
    children: React.ReactNode
}

const Wrapper = ({children} : Props) => {
  return (
    <div className='container mx-auto px-4 md:px-14'>
      {children}
    </div>
  )
}

export default Wrapper
