import React from 'react'
import p1 from '../img/products/f1.webp'
import p2 from '../img/products/f2.webp'
import p3 from '../img/products/f3.webp'
import p4 from '../img/products/n1.webp'
import p5 from '../img/products/n2.webp'
import p6 from '../img/products/n3.webp'
import '../css/cart.css'

export default function CartItemsTable(props) {
    console.log(props.cart);
    return (
        props.cart.length==0||props.cart==null||props.cart=='undefined'?<div style={{padding:"13px 0px",margin:"50px 0px",color:"#088178",textAlign:"center",fontWeight:"bolder",fontSize:"13px",display:"flex",justifyContent:"center",alignItems:"center",gap:"8px",borderTop:"2px solid var(--card-border)",borderBottom:"2px solid var(--card-border)"}}> <div class="exclamation" style={{background:"#088178",height:"32px",width:"32px",color:"white",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}><i class="fa-solid fa-exclamation" style={{fontSize:"25px"}}></i></div> <h1>Cart is Empty</h1></div> :
        <div id="cart-table" className='flex-box justify-center align-center'>
            <div class="cart-table">
                  <table className='flex-box justify-center flex-column'>
                      <tr className='table-row table-head-row flex-box align-center'>
                          <th className='remove-item-column'>REMOVE</th>
                          <th className='image-item-column flex-box justify-center'>IMAGE</th>
                          <th className='name-item-column'>PRODUCT</th>
                          <th className='price-item-column'>PRICE</th>
                          <th className='quantity-item-column'>QUANTITY</th>
                          <th className='subtotal-item-column'>SUBTOTAL</th>
                      </tr>
                      {
                        props.cart.map((product,index)=>{
                            return (
                                <tr className='table-row flex-box align-center'>
                            <td className='remove-item-column' onClick={()=>props.removeItemFromCart(index)}>
                                <div class="remove-icon">
                                    <i class="fa-solid fa-trash"></i>
                                </div>
                            </td>
                            <td className='image-item-column flex-box justify-center'>
                                <div class="product-image">
                                    <img src={product.img} alt="" loading='lazy' className='lazy-img'/>
                                </div>
                            </td>
                            <td className='name-item-column'>
                                <div class="product-name">
                                    <p>Cartoon Astronuat T-Shirt</p>
                                </div>
                            </td>
                            <td className='price-item-column'>
                                <div class="product-price">
                                    <p>{product.price}</p>
                                </div>
                            </td>
                            <td className='quantity-item-column'>
                                <div class="product-quantity">
                                    <input type="number" id="product-quantity" value="1"/>
                                </div>
                            </td>
                            <td className='subtotal-item-column'>
                                <div class="product-subtotal">
                                    <p>{product.price}</p>
                                </div>
                            </td>
                        </tr>
                            )
                        })
                      }
                  </table>
              </div>
        </div>
    )
}
