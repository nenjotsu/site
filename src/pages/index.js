// import React from "react"
import { graphql } from "gatsby"
// import styled from "@emotion/styled"
// import { css } from "@emotion/core"
// import { FaGithub } from "react-icons/fa"

import Layout from "../components/layout"
import { colors } from "../utils/presets"

// const FeatureList = styled(`ul`)`
//   margin-left: 0;
//   list-style: none;
// `

// const FeatureListItem = styled.li({
//   backgroundImage: `url(
//     "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='${colors.gatsby}' d='M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z' /%3E%3C/svg%3E")`,
//   backgroundPosition: `0 .25em`,
//   backgroundRepeat: `no-repeat`,
//   backgroundSize: `1em`,
//   paddingLeft: `1.5em`,
// })

const Index = ({ data, location }) => (
  <Layout
    location={location}
    image={data.coverImage.childImageSharp.fluid}
    imageTitle={`I love KL with nenjotsu`}
    imageBackgroundColor={colors.ui.whisper}
  >    
    <h2 id="-need-help-automating-your-trading-strategy-"><strong>Need Help Automating Your Trading Strategy?</strong></h2>
    <p>I help traders turn their strategies into fully automated bots using <strong>Expert Advisors</strong>, <strong>Python</strong>, or <strong>Go</strong>.</p>
    <p>If you’re ready to bring your idea to life, I’d be happy to help.<br/>📩 Reach out to me at <a href="mailto:nenjotrade@gmail.com"><strong>nenjotrade@gmail.com</strong></a> — let’s build it right.</p>

    <hr/>
    <h2 id="hellow-world">Hellow, World</h2>
    <p>Hello and welcome to my corner of the internet — a space where deep technical insights meet years of hands-on experience in software engineering. Whether you’re a seasoned developer or just diving into the world of code, this blog is here to help you navigate complex topics with clarity, purpose, and a touch of personality.</p>
    <hr/>
    <h2 id="what-you-ll-find-here">What You’ll Find Here</h2>
    <p>Over the past 13 years, I’ve worked across the entire tech stack — from frontend UI design to backend architecture, DevOps, trading automation, and large-scale enterprise systems. This blog is my way of giving back: sharing what I’ve learned, what I’m still exploring, and the hard-earned lessons that make real-world development both challenging and rewarding.</p>
    <p>Here, I’ll cover topics such as:</p>
    <ul>
    <li><p><strong>Programming insights</strong> on C++, Golang, JavaScript, and more</p>
    </li>
    <li><p><strong>Frontend development tips</strong> that go beyond aesthetics to real usability</p>
    </li>
    <li><p><strong>Backend architecture</strong>, APIs, and scalable systems design</p>
    </li>
    <li><p><strong>Design patterns and best practices</strong> to build maintainable, elegant code</p>
    </li>
    <li><p><strong>Trading automation</strong> using Python, Go, Pine Script, and Expert Advisors</p>
    </li>
    </ul>
    <hr/>
    <h2 id="why-this-matters">Why This Matters</h2>
    <p>In a fast-evolving industry, staying up to date isn’t just important — it’s essential. My goal is to provide real, actionable insights you can apply to your own projects, whether you’re building trading bots, enterprise platforms, or experimental side projects.</p>

  </Layout>
)

export default Index

export const query = graphql`
  query {
    coverImage: file(
      relativePath: { regex: "/landing-img/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 720
          quality: 70
          # duotone: { highlight: "#ffffff", shadow: "#407086" }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
