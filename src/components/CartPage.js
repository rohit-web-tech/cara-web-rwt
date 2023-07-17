import React from 'react'
import TopBanner from './TopBanner'
import CartItemsTable from './CartItemsTable';
import CartCheckOut from './CartCheckOut';

export default function CartPage(props) {
  props.triggerLoader();
  props.setCurrentPage("cart-btn");
  return (
    <>
    <TopBanner title="#cart" subtitle="Add your coupon code and SAVE upto 70%!" type="about" />
    <CartItemsTable />
    <CartCheckOut />
    </>
  )
}
