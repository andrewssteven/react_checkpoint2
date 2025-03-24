import React from 'react'
import {product} from '../product'

const Name = () => {
  return (
    <div>
        <p className='font-semibold text-xl'>{product.name}</p>  
    </div>
  )
}

export default Name