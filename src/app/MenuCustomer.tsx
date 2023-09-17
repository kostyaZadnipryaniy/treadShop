import Image from 'next/image'

export default function MenuCustomer(){
    return(
        <div>
        <a href="/auto-auth/log-in" className='menu'>log in</a>
        <a href="/goods" className='menu'>list of goods</a>
          <form className='menu'>
            <input type='text'/>
            <input type='submit' value={'search'}/>
          </form>
          <a href="/sail" className='menu basket'><Image src="/basket.jpeg" alt='basket' width={36} height={36} priority /></a>
        </div>
    )
}

export function MainCustomer(){
  return(<main>
    <h2>Maybe you would like to have one</h2>
    <ul>
      <a href="/goods/item" className='menu'>
        <li>
            <p>Name</p>
            <img src='#' alt='image' /> 
            <p>Price</p>
        </li>    
      </a>
      <a href="/goods/item" className='menu'>
        <li>
            <p>Name</p>
            <img src='#' alt='image' /> 
            <p>Price</p>
        </li>    
      </a>
      <a href="/goods/item" className='menu'>
        <li>
            <p>Name</p>
            <img src='#' alt='image' /> 
            <p>Price</p>
        </li>    
      </a>     
    </ul>
   </main>)
}