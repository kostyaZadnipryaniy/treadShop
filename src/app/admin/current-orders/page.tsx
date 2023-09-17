import { Footer, Header } from '../../Layouts'
import MenuCurrentorders, { MainCurrentorders } from './MenuCurrentOrders'
export default function Home() {
  return (<>
   <Header props={<MenuCurrentorders/>}/>
   <MainCurrentorders/>
    <Footer/>
    </>
  )
}
 
