import React from 'react'
import '../css/feature.css'
import FeatureCard from './FeatureCard'
import f1 from '../img/features/f2.png'
import f2 from '../img/features/f1.png'
import f3 from '../img/features/f3.png'
import f4 from '../img/features/f4.png'
import f5 from '../img/features/f5.png'
import f6 from '../img/features/f6.png'

export default function Features() {
  return (
    <div id="feature-container" className="flex-box justify-center align-center">
      <div class="features-card-container">
        <FeatureCard src={f1} title="Free Shipping"theme="pink" />
        <FeatureCard src={f2} title="Online Order"theme="greeny" />
        <FeatureCard src={f3} title="Save Money" theme="blue"/>
        <FeatureCard src={f4} title="Promotions" theme="purple"/>
        <FeatureCard src={f5} title="Happy Sell" theme="pink"/>
        <FeatureCard src={f6} title="f24/7 Support" theme="yellow"/>
      </div>
    </div>
  )
}
