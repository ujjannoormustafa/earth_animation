'use client'
import Link from 'next/link'
import { useState } from 'react'



export default function Home() {

  return (
    <div className='container'>
    <div className='boxContainer'>
    <div className='topLine'>
         <div className='box'> Los Angeles</div>
        <div className='box'>Pakistan</div>
        <div className='box'>FindLand</div>
    </div>

    <div className='topLine line-2'>
        <div className='box'>Germany</div>
        <div class="rotate-image">
          <img src="/assests/images/earth.png" alt="Picture" />
        </div>
        <div className='box'>Japan</div>
    </div>

    <div className='topLine'>
        <div className='box'>Australia</div>
        <div className='box'>New York City</div>
        <div className='box'>China</div>
    </div>
    </div>
  </div>
    
  )
}



  

