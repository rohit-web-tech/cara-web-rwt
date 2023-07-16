import React from 'react'

export default function AdCard1(props) {
  return (
    <div className={`ad-card1 flex-box justify-center flex-column ${props.type}`}>
        <p>{props.category}</p>
        <h2>{props.title}</h2>
        <h5>{props.description}</h5>
        <p class={`ads-btn ${props.btnTheme} flex-box justify-center align-center`}>{props.btnText}</p>
    </div>
  )
}
