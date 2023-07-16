import React from 'react'

export default function AdCard2(props) {
  return (
    <div className={`ad-card2 flex-box justify-center flex-column ${props.type}`}>
        <h2>{props.title}</h2>
        <h5>{props.subtitle}</h5>
    </div>
  )
}
