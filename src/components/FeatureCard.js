import '../css/feature.css'
import React from 'react'

export default function FeatureCard(props) {
  return (
    <div className='feature-card flex-box justify-center align-center flex-column'>
        <img src={props.src} alt="feature" />
        <div className={`title ${props.theme} flex-box justify-center align-center`}>
        <h5>{props.title}</h5>
        </div>
    </div>
  )
}
