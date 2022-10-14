import React from 'react'
import "./CheckOut.css"
import CheckOutProduct from './CheckOutProduct'
import Subtotal from './Subtotal'

function CheckOut() {
  return (
    <div>
      <div className="checkout">
        <div className="checkout__left">
        
            <img src="https://m.media-amazon.com/images/I/51xR7NvTcbL._AC_SX352_SY330_.jpg" className='img_ad'/>
            <div className='title'>
              <h2>Your Shopping Cart</h2>
            </div>
            <CheckOutProduct 
            id="123"
            title="boat watch"
            price={1900}
            ratings={3}
            image= "https://m.media-amazon.com/images/I/51xR7NvTcbL._AC_SX352_SY330_.jpg"
             />
             <CheckOutProduct 
            id="123"
            title="boat watch"
            price={900}
            ratings={2}
            image= "https://m.media-amazon.com/images/I/51xR7NvTcbL._AC_SX352_SY330_.jpg"
             />
              <CheckOutProduct 
            id="123"
            title="boat watch"
            price={900}
            ratings={2}
            image= "https://m.media-amazon.com/images/I/51xR7NvTcbL._AC_SX352_SY330_.jpg"
             />
          </div>
        </div>
        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>

  )
}

export default CheckOut
