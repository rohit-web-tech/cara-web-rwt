import React from 'react'
import Blogs from './Blogs'
import '../css/blogs.css'
import b1 from '../img/blog/b1.webp' ; 
import b2 from '../img/blog/b2.webp' ; 
import b3 from '../img/blog/b3.webp' ; 
import b4 from '../img/blog/b4.webp' ; 
import b5 from '../img/blog/b6.webp' ; 

export default function BlogsContent() {
  return (
    <div id="blog-content" className='flex-box justify-center align-center'>
        <div className="blog-content flex-box justify-center align-center flex-column">
            <Blogs date="13/01" src={b1} title="The Cotton-Jersey Zip-Up Hoodie"/>
            <Blogs date="13/04" src={b2} title="How to Style a Quiff"/>
            <Blogs date="13/06" src={b3} title="Must-Have Skater Girl Items" />
            <Blogs date="16/01" src={b4} title="Runway Inspired Trends"/>
            <Blogs date="10/03" src={b5} title="AW20 Menswear Trends"/>
        </div>
    </div>
  )
}
