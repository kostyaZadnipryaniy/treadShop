import Image from 'next/image'
import MenuCustomer, { MainCustomer } from './MenuCustomer'
import { Footer, Header } from './Layouts'
import { Children } from 'react'
import createEmotionServer from '@emotion/server/create-instance'
import createEmotionCache from '@emotion/cache/package.json'
export default function Home() {
  return (<>
   <Header props={<MenuCustomer/>}/>
   <MainCustomer/>
    <Footer/>
    </>
  )
}
 