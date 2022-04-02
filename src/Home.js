import React from 'react'
import './Home.css';
import Product from './Product.js';

function Home() {
  return (
    <div className='home'>
    <div className='home_container'>
    <img  className='home_containerimg' src=' https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png'/>
    </div>

    <div className='home_row'>
<Product
title='the lean startup'
  price={2000} 
  image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" 
rating={5}
/>
<Product
    title='Iphone'
  price={90000} 
  image="https://m.media-amazon.com/images/I/619m8rLBQSL.jpg" 
rating={5}
/>

</div>


    <div className='home_row'>
    <Product
         title='Iphone'
  price={90000} 
  image="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SL1500_.jpg" 
    />
<Product
     title='Iphone'
  price={90000} 
  image="https://m.media-amazon.com/images/I/71Wkk4n9olL._AC_SL1500_.jpg"
/>

<Product
     title='Iphone'
  price={90000} 
  image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1591634795000"
/>


    </div>

    <div className='home_row'>
    
    <Product
          title='Iphone'
  price={90000} 
  image="https://m.media-amazon.com/images/I/515R8VeCpCL._AC_SY550_.jpg"
    />

    </div>
    </div>
  )
}

export default Home;