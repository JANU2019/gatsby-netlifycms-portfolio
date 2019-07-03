import React from "react"
import { graphql } from "gatsby"
import Layout from "@components"

class BlogPostTemplate extends React.Component {
  render() {
    return (
      <Layout>
        <h1>40444444</h1>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
    }
  }
`
