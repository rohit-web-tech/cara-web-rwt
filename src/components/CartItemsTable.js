import React from 'react'
import p1 from '../img/products/f1.jpg'
import p2 from '../img/products/f2.jpg'
import p3 from '../img/products/f3.jpg'
import p4 from '../img/products/n1.jpg'
import p5 from '../img/products/n2.jpg'
import p6 from '../img/products/n3.jpg'
import '../css/cart.css'

export default function CartItemsTable() {
    return (
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
                      <tr className='table-row flex-box align-center'>
                            <td className='remove-item-column'>
                                <div class="remove-icon">
                                    <i class="fa-solid fa-trash"></i>
                                </div>
                            </td>
                            <td className='image-item-column flex-box justify-center'>
                                <div class="product-image">
                                    <img src={p4} alt="" />
                                </div>
                            </td>
                            <td className='name-item-column'>
                                <div class="product-name">
                                    <p>Cartoon Astronuat T-Shirt</p>
                                </div>
                            </td>
                            <td className='price-item-column'>
                                <div class="product-price">
                                    <p>$78</p>
                                </div>
                            </td>
                            <td className='quantity-item-column'>
                                <div class="product-quantity">
                                    <input type="number" id="product-quantity" value="1"/>
                                </div>
                            </td>
                            <td className='subtotal-item-column'>
                                <div class="product-subtotal">
                                    <p>$78</p>
                                </div>
                            </td>
                        </tr>
                      <tr className='table-row flex-box align-center'>
                            <td className='remove-item-column'>
                                <div class="remove-icon">
                                    <i class="fa-solid fa-trash"></i>
                                </div>
                            </td>
                            <td className='image-item-column flex-box justify-center'>
                                <div class="product-image">
                                    <img src={p1} alt="" />
                                </div>
                            </td>
                            <td className='name-item-column'>
                                <div class="product-name">
                                    <p>Cartoon Astronuat T-Shirt</p>
                                </div>
                            </td>
                            <td className='price-item-column'>
                                <div class="product-price">
                                    <p>$78</p>
                                </div>
                            </td>
                            <td className='quantity-item-column'>
                                <div class="product-quantity">
                                    <input type="number" id="product-quantity" value="1"/>
                                </div>
                            </td>
                            <td className='subtotal-item-column'>
                                <div class="product-subtotal">
                                    <p>$78</p>
                                </div>
                            </td>
                        </tr>
                      <tr className='table-row flex-box align-center'>
                            <td className='remove-item-column'>
                                <div class="remove-icon">
                                    <i class="fa-solid fa-trash"></i>
                                </div>
                            </td>
                            <td className='image-item-column flex-box justify-center'>
                                <div class="product-image">
                                    <img src={p2} alt="" />
                                </div>
                            </td>
                            <td className='name-item-column'>
                                <div class="product-name">
                                    <p>Cartoon Astronuat T-Shirt</p>
                                </div>
                            </td>
                            <td className='price-item-column'>
                                <div class="product-price">
                                    <p>$78</p>
                                </div>
                            </td>
                            <td className='quantity-item-column'>
                                <div class="product-quantity">
                                    <input type="number" id="product-quantity" value="1"/>
                                </div>
                            </td>
                            <td className='subtotal-item-column'>
                                <div class="product-subtotal">
                                    <p>$78</p>
                                </div>
                            </td>
                        </tr>
                      <tr className='table-row flex-box align-center'>
                            <td className='remove-item-column'>
                                <div class="remove-icon">
                                    <i class="fa-solid fa-trash"></i>
                                </div>
                            </td>
                            <td className='image-item-column flex-box justify-center'>
                                <div class="product-image">
                                    <img src={p3} alt="" />
                                </div>
                            </td>
                            <td className='name-item-column'>
                                <div class="product-name">
                                    <p>Cartoon Astronuat T-Shirt</p>
                                </div>
                            </td>
                            <td className='price-item-column'>
                                <div class="product-price">
                                    <p>$78</p>
                                </div>
                            </td>
                            <td className='quantity-item-column'>
                                <div class="product-quantity">
                                    <input type="number" id="product-quantity" value="1"/>
                                </div>
                            </td>
                            <td className='subtotal-item-column'>
                                <div class="product-subtotal">
                                    <p>$78</p>
                                </div>
                            </td>
                        </tr>
                  </table>
              </div>
        </div>
    )
}
