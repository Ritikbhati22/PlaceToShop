import React from 'react';
import './Header.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StoreIcon from '@material-ui/icons/Storefront';
import Searchss from '@material-ui/icons/Search';
function Header() {
  return (
    <div className='Header'>
      <div className="Logo">
        <StoreIcon  className='icon' fontSize='large'/>
        <h1 className='Title'>PlaceToShop</h1>
      </div>
      <div className="searchbar">
        <input type="text" placeholder='Search' className='Search'/>
        <Searchss className='SearchIcon'/>
      </div>
      <div className="nav">
        <div className="item">
          <span className="one">Hello,New User</span>
          <span className="two">Sign In</span>
        </div>
        <div className="item">
        <span className="one">Your</span>
          <span className="two">Shop</span>
        </div>
        <div className="item">
        <ShoppingCartIcon  className='cart'/>
          <span className="two count">0</span>
          
          </div> 
      </div>
    </div>
  )
}

export default Header
