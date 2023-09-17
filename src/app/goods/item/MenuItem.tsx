import Image from 'next/image'

export default function MenuItem(){
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
//map of db
export function MainItem(){
  return(<main>
    <h2>Name of goods</h2>
    <form action="">
      <p>Name</p>
      <p>Description</p>
      <img src='#' alt='image' /> 
      <p>Price</p>
      <a href="/sail"><div>buy</div></a>
      <div>
        <h3>Comments</h3>
        <table>
          <tr>
            <td>author.....</td>
            <td>text.......</td>
            <td>date.......</td>
          </tr>
          <tr>
            <td width='20%'>author.....</td>
            <td width='60%'><textarea name="comment" id="comment" className='tableInput'/></td>
            <td width='20%'><input type="button" value="add comment" className='tableInput'/></td>
          </tr>
        </table>
      </div>
    </form>
   </main>)
}