import { IMGS } from '@/utils/imgs'
import Image from 'next/image'
import React from 'react'

const Sposnsors = () => {
  return (
    <div className='w-[90%] m-auto gap-4 grid sm:grid-cols-5 gap items-center justify-around'>
      <Image className='client-img' src={IMGS.clients1 } alt="" />
      <Image className='client-img' src={IMGS.clients2 } alt="" />
      <Image className='client-img' src={IMGS.clients3 } alt="" />
      <Image className='client-img' src={IMGS.clients4 } alt="" />
      <Image className='client-img' src={IMGS.clients5 } alt="" />

    </div>
  )
}

export default Sposnsors
