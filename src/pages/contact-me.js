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
    imageTitle={`“alexander-andrews-HgUDpaGPTEA-unsplash-edited” by alexander-andrews via unsplash`}
    imageBackgroundColor="#F0C450"
  >
    <PageTitle>accounts</PageTitle>
    {/* <FloatingImage
      imageMobile={data.floatingImageMobile.childImageSharp.fixed}
      imageDesktop={data.floatingImageMobile.childImageSharp.fixed}
      title={`thinking about something new`}
      // title={`“${data.floatingImage.title}” by ${data.floatingImage.credit}`}
      backgroundColor="#DB3225"
    /> */}
    <p>Feel free to drop me a message on <a href="https://www.linkedin.com/in/renenjo-valente-4435b941/" alt="linkedin page">LinkedIn</a>, and we can chat about potential solutions.</p>
    <p>📩 Reach out to me at <a href="mailto:nenjotrade@gmail.com"><strong>nenjotrade@gmail.com</strong></a></p>  
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
      relativePath: { regex: "/alexander-andrews-phone/" }
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
    # floatingImageMobile: file(
    #   relativePath: { regex: "/thinking/" }
    # ) {
    #   childImageSharp {
    #     fixed(width: 200) {
    #       ...GatsbyImageSharpFixed_noBase64
    #     }
    #   }
    # }
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
