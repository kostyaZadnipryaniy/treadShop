import Image from 'next/image'

export default function MenuItem(){
    return(
        <div>
        <a href="/auto-auth/log-in" className='menu'>log in</a>
        <a href="/goods" className='menu'>list of goods</a>
          <form className='menu'>
            <input type='text'/>
            <input type='submit' value={'search'}/>
          </form>
          <a href="/sail" className='menu basket'><Image src="/basket.jpeg" alt='basket' width={36} height={36} priority /></a>
        </div>
    )
}
//map of db
export function MainItem({ params }: { params: { item : string } }){
  const data = itemData.find(i => i.title == params.item)?.img
  
  return(<main>
    <h2>Name of goods</h2>
    <form action="">
      <p>{params.item}</p>
      <p>Description</p>
      <img src={`${data}?w=248&fit=crop&auto=format&dpr=4 4x`} alt='image' width={300} height={300}/> 
      <p>Price</p>
      <a href="/sail"><div>buy</div></a>
      <div>
        <h3>Comments</h3>
        <table>
          <tr>
            <td>author.....</td>
            <td>text.......</td>
            <td>date.......</td>
          </tr>
          <tr>
            <td width='20%'>author.....</td>
            <td width='60%'><textarea name="comment" id="comment" className='tableInput'/></td>
            <td width='20%'><input type="button" value="add comment" className='tableInput'/></td>
          </tr>
        </table>
      </div>
    </form>
   </main>)
}

const itemData = [
  {
    img: 'https://arbordrev.com.ua/wp-content/uploads/2022/05/nemo-lux-m2-g-7-white-21.webp',
    title: 'Bed',
    author: 'swabdesign',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
    author: 'Pavel Nekoranec',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
    author: 'Charles Deluvio',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
    author: 'Christian Mackie',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
    author: 'Darren Richardson',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
    author: 'Taylor Simpson',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
    author: 'Ben Kolde',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
    author: 'Philipp Berndt',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
    author: 'Jen P.',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
    author: 'Douglas Sheppard',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
    author: 'Fi Bell',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
];