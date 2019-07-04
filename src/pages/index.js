import React from "react"
import { graphql } from "gatsby"
import { Layout, SEO, Card } from "@components"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Pagrindinis" />
        <div className="container">
          <div className="portfolio-grid">
            {posts.map(({ node }) => {
              return (
                <div key={node.frontmatter.logotipas}>
                  <Card filename={node.frontmatter.logotipas} />
                </div>
              )
            })}
          </div>
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
