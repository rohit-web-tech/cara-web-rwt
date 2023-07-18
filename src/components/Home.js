import MainBanner from './MainBanner' ;
import Features from './Features' ;
import Products from './FeaturedProducts' ;
import Repairservice from './Repairservice' ;
import NewArrival from './NewArrival' ;
import Ads from './Ads' ;
import React from 'react' ;

export default function Home(props) {
  props.triggerLoader();
  props.setCurrentPage("home-btn");
  return (
    <>
    <MainBanner />
    <Features />
    <Products heading="Featured Products" subtitle="Summer Collection New Mordern Design" setCartItems={props.setCartItems}/>
    <Repairservice />
    <NewArrival heading="New Arrivals" subtitle="Summer Collection New Mordern Design" setCartItems={props.setCartItems}/>
    <Ads/>
    </>
  )
}
