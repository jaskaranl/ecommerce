 import React from 'react'
 import './Header.css'
 import SearchIcon from '@material-ui/icons/Search';
 import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
 
 function Header() {
   return (
     <div className='header'>
      <img  className="header_logo" src='https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png'/>

      <div className='header_search '>
        <input className='header_searchInput' type="text"/>
        <SearchIcon className='header_searchIcon'/>
      </div>

      <div className='header_nav'>
<div className='header_option'>
<span  className='header_optionLineOne'> 
Hello user</span>

<span  className='header_optionLineTwo'> 
Sign in</span>
</div>

<div className='header_option'>
<span  className='header_optionLineOne'> 
Returns</span>

<span  className='header_optionLineTwo'> 
Orders</span>
</div>

<div className='header_option'>
<span  className='header_optionLineOne'> 
Your</span>

<span  className='header_optionLineTwo'> 
Prime</span>
</div>

<div className='header_optionBasket'>
<ShoppingBasketIcon />
<span className='header_optionLineTwo header_basketCount'>0</span>
</div>
      </div>
      </div>
   )
 }
 
 export default Header;