import React from 'react'
import {product} from '../product'

const Image = () => {
  return (
    <div>
        <img src={product.image} alt="" className='h-70 w-full object-fit-contain'/>
        
    </div>
  )
}

export default Image