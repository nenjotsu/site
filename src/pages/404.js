import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import FloatingImage from "../components/floating-image"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"

const NotFound = ({ data, location }) => (
  <Layout
    location={location}
    image={data.coverImage.childImageSharp.fluid}
    // imageTitle={`“${data.coverImage.title}” by ${data.coverImage.credit}`}
    imageBackgroundColor="#F0C450"
  >
    <PageTitle>Oops! Page Not Found</PageTitle>
    <p>Well, this is awkward... It looks like you've stumbled upon a page that doesn't exist. Maybe it took an unexpected vacation?</p>
    <p>While you're here, why not head back to the <a href="/">homepage</a> or explore some of our latest articles? If you need assistance, feel free to reach out. We're here to help you find what you're looking for!</p>
    {/* <Img
      fluid={data.fullWidthImage.localFile.childImageSharp.fluid}
      backgroundColor="#F9D6CE"
      title={`“${data.fullWidthImage.title}” by ${data.fullWidthImage.credit}`}
    /> */}
  </Layout>
)

export default NotFound

export const query = graphql`
  query {
    coverImage: file(
      relativePath: { regex: "/small-plants/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 720
          quality: 80
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
