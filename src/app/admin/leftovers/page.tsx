import Image from 'next/image'
import { Footer, Header } from '../../Layouts'
import MainLeftovers, { MenuLeftovers } from './MainLeftovers'
export default function Home() {
  return (<>
    <Header props={<MenuLeftovers/>}/>
   <MainLeftovers/>
   <Footer/>
    </>
  )
}
 
