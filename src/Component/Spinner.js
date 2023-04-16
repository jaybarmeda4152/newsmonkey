import React from 'react'
import loader from './loader.gif'
import loader2 from './loader2.gif'

export default function Spinner() {
  return (
    <div className='text-center'>
        {/* <img src="https://i.gifer.com/XOsX.gif" alt="loading..." style={{height: '60px'}}/> */}
        {/* <img src="https://i.gifer.com/OFAF.gif" alt="loading..." /> */}
        <img src={loader2} alt="loading..." />
    </div>
  )
}
