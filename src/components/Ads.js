import React from 'react'
import '../css/ads.css';
// import first from '../img/banner/b17.webp' ;
// import second from '../img/banner/b10.webp' ;
// import third from '../img/banner/b7.webp' ;
// import fourth from '../img/banner/b4.webp' ;
// import fifth from '../img/banner/b18.webp' ;
import AdCard1 from './AdCard1';
import AdCard2 from './AdCard2';

export default function Ads() {
  return (
    <div id="ads-container" className='flex-box justify-center align-center'>
        <div className="ads-container flex-box justify-center align-center flex-column">
            <div className="upper-container">
                <AdCard1 type="first" category="crazy deals" title="buy 1 get 1 free" description="The best classic dress is on sale at cara" btnText="Learn More" btnTheme="white" /> 
                <AdCard1 type="second" category="spring/summer" title="upcomming season" description="The best classic dress is on sale a cara" btnText="Collection" btnTheme="greenish" /> 
            </div>
            <div className="lower-container">
                <AdCard2 type="third" title="SEASONAL SALE" subtitle="Winter Collection"/>
                <AdCard2 type="fourth" title="NEW FOOTWARE COLLECTION" subtitle="Spring/Summer-2023"/>
                <AdCard2 type="fifth" title="T-Shirts" subtitle="Summer Fashion T-Shirts"/>
            </div>
        </div>
    </div>
  )
}
