import Image from 'next/image'

export function MenuLeftovers(){
  return(
    <div>
    <a href="/auto-auth/log-in" className='menu'>log in</a>
    <a href="/goods" className='menu'>list of goods</a>
    <a href="/admin" className='menu'>admin page</a>
    <a href="/admin/current-orders" className='menu'>current orders</a>
      <form className='menu'>
        <input type='text'/>
        <input type='submit' value={'search'}/>
      </form>
      <a href="/sail" className='menu basket'><Image src="/basket.jpeg" alt='basket' width={36} height={36} priority /></a>
    </div>
)
}

export default function MainLeftovers(){
    return( <main>
        <h2>Table of product balances</h2>
        <form action="">
        <table className="leftovers">
          <tr>
          <th>N</th>
          <th>Name of goods</th>
          <th>Unit</th>
          <th>Price</th>
          <th>Number</th>
          <th>Coast</th>
          </tr>
          <tr>
          <td>..</td>
          <td>..</td>
          <td>..</td>
          <td>..</td>
          <td>..</td>
          <td>..</td>
          </tr>
          <tr>
          <td><input className={'tableInput'} type="submit" value="+" /></td>
          <td><input className={'tableInput'} type="text" name="name" id="name" /></td>
          <td><input className={'tableInput'} type="number" name="unit" id="unit" /></td>
          <td><input className={'tableInput'} type="number" name="price" id="price" /></td>
          <td><input className={'tableInput'} type="number" name="number" id="number" /></td>
          <td><input className={'tableInput'} type="number" name="coast" id="coast" /></td>
          </tr>
        </table>
        </form>
      </main>)
}