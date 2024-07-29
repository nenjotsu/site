import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import FloatingImage from "../components/floating-image"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"

const WhoAmI = ({ data, location }) => (
  <Layout
    location={location}
    image={data.coverImage.childImageSharp.fluid}
    imageTitle={`“${data.coverImage.title}” by ${data.coverImage.credit} (via unsplash.com)`}
  >
    <PageTitle>Who am I?</PageTitle>
    {/* <FloatingImage
      imageMobile={data.floatingImageMobile.localFile.childImageSharp.fixed}
      imageDesktop={data.floatingImage.localFile.childImageSharp.fixed}
      title={`“${data.floatingImage.title}” by ${data.floatingImage.credit} (via unsplash.com)`}
    /> */}
    <p>
    I kickstarted my career as a frontend developer in a US company focused on detailed design engineering. We crafted an application to calculate the PSI load of structural designs, wielding the power of Python, PHP, C#, .NET, and JavaScript like digital wizards.
    </p>
    <p>After that, I switched gears and joined a BPO company, where I developed applications to support customer representatives, aiming to streamline their Average Handling Time (AHT) and Customer Satisfaction Score (CSS). It was all about making their lives a bit easier and more efficient.
    </p>
    <p>My journey then took me to an IT firm, where I dove into the world of ERP systems. From Sales to Shipping and Tracking, I had my hands in everything, ensuring that the gears of enterprise resource planning turned smoothly.
    </p>
    <p>And now, I'm working at a cutting-edge company that specializes in AI hiring systems. We're on a mission to revolutionize the hiring process, leveraging artificial intelligence to find the perfect candidates faster and more effectively.
    </p>
    <p>Recently, I've been diving deep into C++, Golang, and R to tackle some exciting new projects. These languages are helping me push the boundaries of what's possible and continue my quest for coding excellence.</p>
    <p>So, that's a bit about me—your guide on this tech adventure. From frontend magic to backend sorcery, and everything in between
    </p>
    {/* <Img
      fluid={data.fullWidthImage.localFile.childImageSharp.fluid}
      title={`“${data.fullWidthImage.title}” by ${data.fullWidthImage.credit} (via unsplash.com)`}
    />
    <p /> */}
  </Layout>
)

export default WhoAmI

export const query = graphql`
  query {
    coverImage: file(
      relativePath: { regex: "/table/" }
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
    floatingImageMobile: unsplashImagesYaml(title: { eq: "Cacti" }) {
      localFile {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
    floatingImage: unsplashImagesYaml(title: { eq: "Cacti" }) {
      credit
      title
      localFile {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
    fullWidthImage: unsplashImagesYaml(title: { eq: "Tennis court" }) {
      credit
      title
      localFile {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
