import React from 'react'


const Banner = ({banner}) => {
  return (
    <div>
        <div className=' h-[30vw] w-[95vw] m-auto mt-10'>
            <img src={banner} className='h-full w-full object-cover' alt=''/> 
        </div>
    </div>
  )
}

export default Banner