import React from 'react' ;
import TopBanner from './TopBanner' ;
import ShopContent from './ShopContent';

export default function shop(props) {
  props.triggerLoader();
  props.setCurrentPage("shop-btn");
  return (
    <>
    <TopBanner type="shop" title="#stayhome" subtitle="Save more with coupons & up to 70% off!"/>
    <ShopContent />
    </>
  )
}
