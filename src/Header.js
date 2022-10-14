import React from 'react';
import './Header.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StoreIcon from '@material-ui/icons/Storefront';
import Searchss from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';
import {useStateValue} from "./Provider"
function Header() {
  const [{Cart}, dispatch] = useStateValue();
  return (
    <div className='Header'>
      <Link to="/" style={{textDecoration:"none"}}>
         <div className="Logo">
        <StoreIcon  className='icon' fontSize='large'/>
        <h1 className='Title'>PlaceToShop</h1>
      </div>
      </Link>
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
        <Link to="/checkout" style={{textDecoration: "none"}}>


        <div className="item">
        <ShoppingCartIcon/>
          <span className="two count">{Cart.length}</span>
          
          </div> 
        </Link>
      </div>
    </div>
  )
}

export default Header
