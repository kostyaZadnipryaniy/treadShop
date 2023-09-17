import { Footer, Header } from '../../Layouts'
import MenuLogIn, { MainLogIn } from './MenuLogIn'
export default function Home() {
  return (<>
   <Header props={<MenuLogIn/>}/>
   <MainLogIn />
    <Footer/>
    </>
  )
}
 