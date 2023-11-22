
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Image from 'next/image'
import { global } from 'styled-jsx/css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function MenuGoods(){
    return(
        <div>
        <a href="/auto-auth/log-in" className='menu'>log in</a>       
          <form className='menu'>
            <input type='text'/>
            <input type='submit' value={'search'}/>
          </form>
          <a href="/sail" className='menu basket'><Image src="/basket.jpeg" alt='basket' width={36} height={36} priority /></a>
        </div>
    )
}


export  function MainGoods() {
  return (<main>
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
      {itemData.map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <a href={`/goods/${_.title}`}><Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <img
          srcSet={`${_.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${_.img}?w=248&fit=crop&auto=format`}
          alt={_.title}
          loading="lazy"
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {_.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></a>
        </Grid>
      ))}
    </Grid>
  </Box>
  </main> 
  );
}

const itemData = [
  {
    img: 'https://previews.dropbox.com/p/thumb/ACEl4xKbhp-Gd8ElP57BOYPqTiRB2sxWQDDHFjTeNU7_XvTOV0kf9GQYeFCoCW7eK8lThL33YnXpYlVJwfj3AihUQJdyUgPxCOXBO6GDWvHt5VqZgfiNrtzc37R9vZwM5UhJxcJPx3-F1Dv7EhNQCaY8EYHxCneEbqoCFU3Ltfp9yQwGmwQ5-XGebh05Ye_Q89x__UxSfmbrtBzFcxFdnvLeCblvuVXz7v5r9isZsHTn6aKF1zosqW68J2qCuC0JB9vciDlrQT_mDeHMBbrUYg8rCgydvh4pr1Tw4vk1J29jzjuAGS0i2GGzfnYJRiZc3yjnFIg53x_wdOlEfYkvHeU4/p.jpeg',
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