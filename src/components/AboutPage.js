import React from 'react'
import Features from './Features'
import Banner from './TopBanner'
import About from './About'

export default function AboutPage(props) {
  props.triggerLoader();
    props.setCurrentPage("about-btn");
  return (
    <>
    <Banner title="#KnowUs" subtitle ="Who we are and why choose us?" type="about" />
    <About />
    <Features />
    </>
  )
}
