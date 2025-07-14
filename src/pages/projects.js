import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import FloatingImage from "../components/floating-image"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"


const Projects = ({ data, location }) => (
  <Layout
    location={location}
    image={data.coverImage.childImageSharp.fluid}
    imageTitle={`${data.coverImage.title}`}
  >
    <PageTitle>Projects</PageTitle>
    
    
    <p>
      Over the past few years, I’ve led and developed a range of technical projects across industries — from structural engineering and enterprise ERP systems to trading automation, mobile platforms, and digital advertising tools. Each project is built with a strong foundation in scalable software architecture, a focus on performance, and real-world business value.</p>
    <p>Below is a summary of key projects I’ve delivered, spanning backend systems, cross-platform applications, automation tools, and web-based solutions tailored for both technical and operational excellence.
    </p>
    <h2>Trading Automation – Strategy Connector & Execution Bot</h2>
    <p>
      The system captures alerts from TradingView or MT5, filters them through strategy logic, calculates risk-based position sizing, and places orders across Forex, Gold, or Crypto markets. It includes retry logic, logging, and multi-account support for real-time performance and reliability.
      <br />
      <strong>Tech Stack:</strong> Golang and Python backend, MQL5 integration, Expert Advisors, gRPC, REST/WebSocket APIs.
    </p>
    <FloatingImage
      imageMobile={data.floatingImageChart.childImageSharp.fixed}
      imageDesktop={data.floatingImageChart.childImageSharp.fixed}
      // title={`${data.floatingImage.title}`}
    />
    
    <h2>Digital Advertising – Campaign Management & Analytics Platform</h2>
    <p>
      The system enables campaign setup, audience targeting, budget tracking, and performance monitoring across multiple ad channels in one interface. It includes real-time analytics, conversion tracking, and automated reporting, with support for A/B testing and budget recommendations using historical performance data.
      <br/>
      <strong>Tech Stack:</strong> Node.js, Python backend, Reactjs frontend, integrations with Google Ads/Facebook Marketing APIs, MongoDB, PostgreSQL for analytics storage.
    </p>

    <h2>Mobile Apps – Kiosk & Booking System</h2>
    <Img
      fluid={data.fullWidthImageMobile.childImageSharp.fluid}
      title={`“${data.fullWidthImageMobile.title}”`}
    />
    <p>Users can check availability, confirm appointments, pay online, and receive reminders. Admins can manage calendars and booking history.
      <br />
      <strong>Tech Stack:</strong> React Native with Supabase backend.
    </p>
    <h2>Company Websites</h2>
    <Img
      fluid={data.fullWidthImageGallery.childImageSharp.fluid}
      title={`“${data.fullWidthImageGallery.title}”`}
    />
    <h3>Art Gallery Website</h3>
    <p>The site displays gallery collections in high resolution, supports event schedules, artist profiles, and includes a simple contact and booking form.
      <br />
      <strong>Tech Stack:</strong> Nodejs, Strapi, Vite, Reactjs, GatsbyJS, and MongoDB.
    </p>
    <Img
      fluid={data.fullWidthImageLMS.childImageSharp.fluid}
      title={`“${data.fullWidthImageLMS.title}”`}
    />
    <h3>LMS for Japanese Learning Courses</h3>
    <p>The LMS hosts structured courses from N5 to N1, includes quizzes, video lessons, flashcards, and tracks user progress with an admin panel for managing course content.
      <br />
      <strong>Tech Stack:</strong> Nextjs frontend with Strapi backend.
    </p>
    <FloatingImage
      imageMobile={data.floatingImageERP.childImageSharp.fixed}
      imageDesktop={data.floatingImageERP.childImageSharp.fixed}
      // title={`${data.floatingImageERP.title}`}
    />
    <h2>ERP System – Manufacturing Operations Platform</h2>
    <p>The platform manages real-time inventory, generates and tracks purchase orders, handles basic accounting, and provides logistics tracking from production to delivery, all under a centralized dashboard with user permissions and reporting tools.
      <br />
      <strong>Tech Stack:</strong> C# .Net, MVC Framework, Entity Framework, and SQL Server, with AngularJS.
    </p>
    <Img
      fluid={data.fullWidthImageElectric.childImageSharp.fluid}
      title={`“${data.fullWidthImageElectric.title}”`}
    />
    <h2>Engineering Tool – Structural PSI Load Calculator</h2>
    <FloatingImage
      imageMobile={data.floatingImageAdconx.childImageSharp.fixed}
      imageDesktop={data.floatingImageAdconx.childImageSharp.fixed}
      // title={`${data.floatingImageAdconx.title}`}
    />
    <p>The system allows users to input design parameters like beam sizes, plate dimensions, and bolt configurations. It computes PSI in real time with visual feedback, includes basic simulation for various load cases, and exports results to PDF or CAD-compatible files.
      <br />
      <strong>Tech Stack:</strong> Python, C# .Net, PHP, Nodejs, and MSSQL Server.
    </p>

    <hr />
    <p>These projects reflect not just technical execution, but a commitment to solving real business problems through clean, scalable, and reliable software. Whether it's automating financial strategies, streamlining operations, or building customer-facing systems, I approach each solution with an engineering mindset and a focus on long-term impact.</p>
    <p>If you’re exploring a similar project or looking for a technical partner to bring your idea to life — let’s connect.</p>
    


    {/* <Img
      fluid={data.fullWidthImage.childImageSharp.fluid}
      title={`“${data.fullWidthImage.title}” by ${data.fullWidthImage.credit} (via unsplash.com)`}
    /> */}
  </Layout>
)

export default Projects


export const query = graphql`
  query {
    coverImage: file(
      relativePath: { regex: "/cover_projects/" }
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
    floatingImageChart: file(
      relativePath: { regex: "/site-07/" }
    ) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    floatingImageERP: file(
      relativePath: { regex: "/site-08/" }
    ) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    floatingImageAdconx: file(
      relativePath: { regex: "/app-01/" }
    ) {
      # title: "Adconx"
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    fullWidthImageGallery: file(
      relativePath: { regex: "/site-03/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fullWidthImageElectric: file(
      relativePath: { regex: "/site-06/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fullWidthImageMobile: file(
      relativePath: { regex: "/site-02/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fullWidthImageLMS: file(
      relativePath: { regex: "/site-01a/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # floatingImageMobile: file(
    #   relativePath: { regex: "/site-07/" }
    # ) {
    #   childImageSharp {
    #     fixed(width: 200) {
    #       ...GatsbyImageSharpFixed_noBase64
    #     }
    #   }
    # }
    # floatingImage: file(
    #   relativePath: { regex: "/thinking/" }
    # ) {
    #   childImageSharp {
    #     fixed(width: 200) {
    #       ...GatsbyImageSharpFixed_noBase64
    #     }
    #   }
    # }
    # coverImage: unsplashImagesYaml(title: { eq: "Plant with leaves" }) {
    #   credit
    #   title
    #   localFile {
    #     childImageSharp {
    #       fluid(maxWidth: 720) {
    #         ...GatsbyImageSharpFluid
    #       }
    #     }
    #   }
    # }
    # floatingImageMobile: unsplashImagesYaml(title: { eq: "Pug with hoodie" }) {
    #   localFile {
    #     childImageSharp {
    #       fixed(width: 120) {
    #         ...GatsbyImageSharpFixed
    #       }
    #     }
    #   }
    # }
    # floatingImage: unsplashImagesYaml(title: { eq: "Pug with hoodie" }) {
    #   credit
    #   title
    #   localFile {
    #     childImageSharp {
    #       fixed(width: 200) {
    #         ...GatsbyImageSharpFixed
    #       }
    #     }
    #   }
    # }
    # fullWidthImage: unsplashImagesYaml(title: { eq: "Alien in the forest" }) {
    #   credit
    #   title
    #   localFile {
    #     childImageSharp {
    #       fluid(maxWidth: 600) {
    #         ...GatsbyImageSharpFluid
    #       }
    #     }
    #   }
    # }
  }
`
