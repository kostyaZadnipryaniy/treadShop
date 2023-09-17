import Image from 'next/image'
import MenuAdmin, { MainAdmin } from './MenuAdmin'
import { Footer, Header } from '../Layouts'
import { Children } from 'react'
export default function Home() {
  return (<>
   <Header props={<MenuAdmin/>}/>
   <MainAdmin/>
    <Footer/>
    </>
  )
}
 