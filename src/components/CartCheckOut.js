import React from 'react'
import '../css/cart.css'

export default function CartCheckOut(props) {
    let price = props.cart.length*78;
  return (
    <div id="check-out" className='flex-box justify-center align-center'>
        <div class="check-out">
            <div class="apply-coupon-section flex-box  flex-column">
                <h2>Apply Coupon</h2>
                <form action="#" className='flex-box'>
                <input type="text" class="coupon-input" placeholder='Enter Coupon Code'/>
                <input type="submit" value="Apply" class="apply-coupon" />
                </form>
            </div>
            <div class="cart-totals-section flex-box flex-column">
                <h2>Cart Totals</h2>
                <table className='checkout-table'>
                    <tr className='check-out-table-row'>
                        <td className='check-out-table-data'>
                            <p>Cart SubTotal</p>
                        </td>
                        <td className='check-out-table-data'>
                            <p>${price}</p>
                        </td>
                    </tr>
                    <tr className='check-out-table-row'>
                        <td className='check-out-table-data'>
                            <p>Shipping</p>
                        </td>
                        <td className='check-out-table-data'>
                            <p>Free</p>
                        </td>
                    </tr>
                    <tr className='check-out-table-row'>
                        <th className='check-out-table-data'>
                            <p>Total</p>
                        </th>
                        <th className='check-out-table-data'>
                            <p>${price}</p>
                        </th>
                    </tr>
                </table>
                <button class="check-out-btn">Proceed To Checkout</button>
            </div>
        </div>
    </div>
  )
}
