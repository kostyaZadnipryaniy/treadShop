import Image from 'next/image'

export default function MenuLogIn(){
    return(
        <div>
        <a href="/goods" className='menu'>list of goods</a>
        <a href="/auto-auth/registration" className='menu'>registration</a>
          <form className='menu'>
            <input type='text'/>
            <input type='submit' value={'search'}/>
          </form>
          <a href="/sail" className='menu basket'><Image src="/basket.jpeg" alt='basket' width={36} height={36} priority /></a>
        </div>
    )
}

export function MainLogIn(){
  return(<main>
    <div className='login'>
        <form action="" >
        <p>
                Enter your e-mail
            </p>
            <input type="text" />
            <p>
                Enter your password
            </p>
            <input type="text" />
            <input type="submit" value={'Log in'} />
        </form>
    </div>
   </main>)
}