import Image from 'next/image'

export default function MenuCurrentorders(){
    return(
        <div>
        <a href="/auto-auth/log-in" className='menu'>log in</a>
        <a href="/goods" className='menu'>list of goods</a>
        <a href="/admin/leftovers" className='menu'>leftovers page</a>
        <a href="/admin/current-orders" className='menu'>current orders</a>
          <form className='menu'>
            <input type='text'/>
            <input type='submit' value={'search'}/>
          </form>
          <a href="/sail" className='menu basket'><Image src="/basket.jpeg" alt='basket' width={36} height={36} priority /></a>
        </div>
    )
}

export function MainCurrentorders(){
  return(<main>
    <h2>Full table of orders</h2>
    <table>
    <tr>
      <th>N</th>
      <th>Name of goods</th>
      <th>customer</th>
      <th>Date of order</th>
      <th>Date of dispatch</th>
      <th>Status</th>
    </tr>
    <tr>
      <td>N</td>
      <td>..</td>
      <td>..</td>
      <td>..</td>
      <td>..</td>
      <td>..</td>
      </tr>
    </table>
   </main>)
}