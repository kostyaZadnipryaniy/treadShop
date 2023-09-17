import Image from 'next/image'

export default function MenuRegistration(){
    return(
        <div>
        <a href="/goods" className='menu'>list of goods</a>
        <a href="/auto-auth/log-in" className='menu'>Log in</a>
          <form className='menu'>
            <input type='text'/>
            <input type='submit' value={'search'}/>
          </form>
          <a href="/sail" className='menu basket'><Image src="/basket.jpeg" alt='basket' width={36} height={36} priority /></a>
        </div>
    )
}

export function MainRegistration(){
  return(<main>
    <div className='login'>
        <form action="" >
        <p>Enter your e-mail</p>
        <input type="email" name="email" id="email" placeholder='email@mail.com'/>
          <p>Enter your full name</p>
          <input type="text" name="fullName" id="fullName" />
          <p>Enter your age</p>
          <input type="number" name="age" id="age" />
          <p>Enter your password</p>
          <input type="password" name="password" id="password" />
          <input type="submit" value={'Log in'} />
        </form>
    </div>
   </main>)
}