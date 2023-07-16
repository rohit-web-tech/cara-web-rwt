import React from 'react' ;
import TopBanner from './TopBanner';
import BlogsContent from './BlogsContent';

export default function BlogPage(props) {
    props.setCurrentPage("blog-btn");
  return (
    <>
    <TopBanner title="#readmore" subtitle="Read all case studies about our products!" type="blog" />
    <BlogsContent />
    </>
  )
}
