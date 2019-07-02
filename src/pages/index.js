import React from "react"
import { graphql } from "gatsby"
import { Layout, SEO, Image } from "@components"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className="portfolio-grid">
          {posts.map(({ node }) => {
            console.log(node.frontmatter.logotipas)
            return (
              <div key={node.frontmatter.date}>
                <Image filename={node.frontmatter.logotipas} />
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            logotipas
          }
        }
      }
    }
  }
`
