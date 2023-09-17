import Image from 'next/image'

export default function MenuGoods(){
    return(
        <div>
        <a href="/auto-auth/log-in" className='menu'>log in</a>       
          <form className='menu'>
            <input type='text'/>
            <input type='submit' value={'search'}/>
          </form>
          <a href="/sail" className='menu basket'><Image src="/basket.jpeg" alt='basket' width={36} height={36} priority /></a>
        </div>
    )
}
//map of db
export function MainGoods(){
  return(<main>
    <h2>All goods</h2>
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