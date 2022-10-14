import React from 'react'
import "./CheckOutProduct.css"

function CheckOutProduct({title,price,ratings,image}) {
  return (
    
    <div className='checkout'>
     <img src="https://m.media-amazon.com/images/I/51xR7NvTcbL._AC_SX352_SY330_.jpg" className='Checkout_img' />
<div className="CheckOutproduct_title">
    <h2>{title}</h2>
    <small>
    ₹
    </small>
    <strong>
        {price}
    </strong>
</div>
<div className="ratings">
    {Array(ratings)
    .fill()
    .map((_,i) =>(
        <p>⭐</p>
    ) 
    )}
    
</div>
<button className='basket'>Remove To Basket</button>
</div>
 )
}

export default CheckOutProduct
