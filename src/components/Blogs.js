import React from 'react'
import '../css/blogs.css'

export default function Blogs(props) {
  return (
    <div className='blog-card flex-box justify-center align-center'>
      <div className="image flex-box justify-center align-center">
        <img src={props.src} alt="blog image"  className='lazy-img'/>
        <div className="rating-blog">
          <h1>{props.date}</h1>
        </div>
      </div>
      <div className="blog-content-2 flex-box justify-center flex-column">
        <h3>{props.title}</h3>
        <p>Kickstarter man braid godard coloring book.Roclette waistcoot selfes ye wolf chartreuse hexagon irony godard...</p>
        <h5>--Continue Reading--</h5>
      </div>
    </div>
  )
}
