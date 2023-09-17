import { Footer, Header } from '../../Layouts'
import MenuRegistration, { MainRegistration } from './MenuRegistration'
export default function Home() {
  return (<>
   <Header props={<MenuRegistration/>}/>
   <MainRegistration />
    <Footer/>
    </>
  )
}
 