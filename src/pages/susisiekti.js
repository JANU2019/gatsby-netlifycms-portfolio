import React from "react"
import { graphql } from "gatsby"

import { Layout, SEO } from "@components"

class ContactPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div>
          <SEO title="404: Not Found" />
          <h1>Susisiekti</h1>
        </div>
      </Layout>
    )
  }
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
