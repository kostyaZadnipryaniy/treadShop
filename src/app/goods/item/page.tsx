import MenuItem, { MainItem } from './MenuItem'
import { Footer, Header } from '../../Layouts'
export default function Home() {
  return (<>
   <Header props={<MenuItem/>}/>
   <MainItem/>
    <Footer/>
    </>
  )
}
 