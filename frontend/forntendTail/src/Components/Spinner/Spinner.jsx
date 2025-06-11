import React from 'react'
import { ImSpinner9 } from "react-icons/im";

const Spinner = () => {

  return (
    <section className='bg-[black] min-h-[100vh] w-[100%] flex justify-center items-center text-5xl '>
        <ImSpinner9 className='animate-spin text-[#d45606]'/>
    </section>
  )
}

export default Spinner