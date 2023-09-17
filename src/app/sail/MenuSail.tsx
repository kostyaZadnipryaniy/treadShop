import Image from 'next/image'

export default function MenuSail(){
    return(
        <div>
        <a href="/auto-auth/log-in" className='menu'>log in</a>
        <a href="/goods" className='menu'>list of goods</a>
          
        </div>
    )
}
//map of db
export function MainSail(){
  return(<main>
    <h2>Purchase</h2>
    <form action="">
      <div><img src='#' alt='image' /></div> 
      <div>
        <p>name</p>
        <p>price</p>
        <p>quantity</p>
        <input type="number" name="quantity" id="quantity" />
        <p>cost</p>
        <p>Delivery</p>
        <input type="radio" name="delivery" id="NP" value={"NP"}/>
        <label htmlFor="NP">NP</label>
        <input type="radio" name="delivery" id="UP" value={"UP"}/>
        <label htmlFor="UP">UP</label>
        <input type="radio" name="delivery" id="MistExpress" value={"MistExpress"}/>
        <label htmlFor="MistExpress">MistExpress</label>
      </div>
      <p>To payment</p>
      <div>
        <input type="radio" name="payment" id="card" value={"card"}/>
        <label htmlFor="card">To card</label>
        <input type="radio" name="payment" id="invoice" value={"invoice"}/>
        <label htmlFor="invoice">Payment by invoice</label>
        <input type="radio" name="payment" id="postpaid" value={"postpaid"}/>
        <label htmlFor="postpaid">Postpaid</label>
      </div>
      <button type="submit">buy</button>
    </form>
   </main>)
}