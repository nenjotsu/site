import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import FloatingImage from "../components/floating-image"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"

const ContactMe = ({ data, location }) => (
  <Layout
    location={location}
    image={data.coverImage.childImageSharp.fluid}
    imageTitle={`“${data.coverImage.title}” by ${data.coverImage.credit}`}
    imageBackgroundColor="#F0C450"
  >
    <PageTitle>accounts</PageTitle>
    <FloatingImage
      imageMobile={data.floatingImageMobile.childImageSharp.fixed}
      imageDesktop={data.floatingImageMobile.childImageSharp.fixed}
      // title={`“${data.floatingImage.title}” by ${data.floatingImage.credit}`}
      backgroundColor="#DB3225"
    />
    <p>
      I've been prowling around <a href="https://github.com/nenjotsu" alt="nenjotsu github's account">GitHub</a> like it's my own personal treasure trove, hunting down free OpenAI APIs and tokens. Also, I've been uploading some of my mad scientist programming experiments. Because, you know, sharing is caring—and collaboration is the key to not accidentally blowing things up.
    </p>

    {/* <Img
      fluid={data.fullWidthImage.localFile.childImageSharp.fluid}
      backgroundColor="#F9D6CE"
      title={`“${data.fullWidthImage.title}” by ${data.fullWidthImage.credit}`}
    /> */}
  </Layout>
)

export default ContactMe

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
    floatingImageMobile: file(
      relativePath: { regex: "/thinking/" }
    ) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    # floatingImage: unsplashImagesYaml(title: { eq: "Pug with red hat" }) {
    #   credit
    #   title
    #   localFile {
    #     childImageSharp {
    #       fixed(width: 200) {
    #         ...GatsbyImageSharpFixed_noBase64
    #       }
    #     }
    #   }
    # }
    # fullWidthImage: unsplashImagesYaml(title: { eq: "Cacti" }) {
    #   credit
    #   title
    #   localFile {
    #     childImageSharp {
    #       fluid(maxWidth: 600) {
    #         ...GatsbyImageSharpFluid_noBase64
    #       }
    #     }
    #   }
    # }
  }
`
