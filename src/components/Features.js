import React from 'react'
import '../css/feature.css'
import FeatureCard from './FeatureCard'
import f1 from '../img/features/f2.webp'
import f2 from '../img/features/f1.webp'
import f3 from '../img/features/f3.webp'
import f4 from '../img/features/f4.webp'
import f5 from '../img/features/f5.webp'
import f6 from '../img/features/f6.webp'

export default function Features() {
  return (
    <div id="feature-container" className="flex-box justify-center align-center">
      <div className="features-card-container">
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
