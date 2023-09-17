import MenuSail, { MainSail } from './MenuSail'
import { Footer, Header } from '../Layouts'
export default function Home() {
  return (<>
   <Header props={<MenuSail/>}/>
   <MainSail/>
    <Footer/>
    </>
  )
}
 