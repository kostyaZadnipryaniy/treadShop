import Image from 'next/image'
import MenuCustomer, { MainCustomer } from './MenuCustomer'
import { Footer, Header } from './Layouts'
import { Children } from 'react'
export default function Home() {
  return (<>
   <Header props={<MenuCustomer/>}/>
   <MainCustomer/>
    <Footer/>
    </>
  )
}
 