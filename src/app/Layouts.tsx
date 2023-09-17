import Image from 'next/image'
import React from 'react'



export function Footer(){
  return(<footer>
    <div className='footer'>
  <div className='menu'><p>Phone: 099 999 9999</p></div>
  <div className='menu'><p>Location: Kherson, Perekopska str., 29</p></div>
  <div className='menu'><p>Email: thread.shop@thsh.ua</p></div> 
  </div>     
  </footer>)
}

export function Header({props,}:{props: React.ReactNode}){
  return(
  <header >
           <div className='shop-logo-back'>
        <Image          
          src="/logoByShop.png"
          alt="Shop.js Logo"
          width={100}
          height={100}
          priority
        />
        <a href='/'><p className='shop-logo'>Thread shop from Kherson</p></a>
        <div>{props}</div>
      </div>
    </header>)
}


