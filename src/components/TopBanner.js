import React from 'react'
import '../css/topBanner.css'

export default function TopBanner(props) {
  return (
    <div className={`top-banner flex-box justify-center align-center ${props.type}`}>
        <div class="top-banner-content flex-box justify-center align-center flex-column">
            <h2>{props.title}</h2>
            <h5>{props.subtitle}</h5>
        </div>
    </div>
  )
}
