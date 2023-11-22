import MenuItem, { MainItem } from './MenuItem'
import { Footer, Header } from '../../Layouts'
export default function Home({ params }: { params: { item : string } }) {
  return (<>
   <Header props={<MenuItem/>}/>
   <MainItem params={{
      item: params.item
    }}  />
    <Footer/>
    </>
  )
}
 