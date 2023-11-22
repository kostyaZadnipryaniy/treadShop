import MenuGoods, { MainGoods } from './MenuGoods'
import { Footer, Header } from '../Layouts'
export default function Home() {
  return (<>
   <Header props={<MenuGoods/>}/>
   <MainGoods/>
    <Footer/>
    </>
  )
}
 

