import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { FaGithub } from "react-icons/fa"

import Layout from "../components/layout"
import { colors } from "../utils/presets"

const FeatureList = styled(`ul`)`
  margin-left: 0;
  list-style: none;
`

const FeatureListItem = styled.li({
  backgroundImage: `url(
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='${colors.gatsby}' d='M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z' /%3E%3C/svg%3E")`,
  backgroundPosition: `0 .25em`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `1em`,
  paddingLeft: `1.5em`,
})

const Index = ({ data, location }) => (
  <Layout
    location={location}
    image={data.coverImage.childImageSharp.fluid}
    imageTitle={`“Black and silver vintage camera” by Alexander Andrews (via unsplash.com)`}
    imageBackgroundColor={colors.ui.whisper}
  >
    <h2>Welcome, Brilliant Minds!</h2>
    <p>Hey there, fellow code maestros and tech-savvy adventurers! You've found your way to my little corner of the internet, where the magic of programming meets a dash of humor and some practical know-how. I’m here to add some fun to your tech journey while sharing the insights I’ve gathered over 12 glorious years in this wild ride called programming.</p>
    <h2>What's Cooking?</h2>
    <p>In this blog, I’ll be dishing out all the juicy tidbits I’ve recently learned about the art of coding. We’re talking about everything from taming the beast known as C++ to mastering the elegance of Golang. Whether you’re lost in the world of frontend frameworks, swimming in the depths of backend development, or navigating the labyrinth of design patterns, I’ve got your back.</p>
    <h2>My Street Cred</h2>
    <p>With over a decade of experience spanning from frontend eye candy to full-stack wizardry, and from backend architecture to DevOps zen, I’ve seen it all. And trust me, I’ve got stories that’ll make you laugh, cry, and wonder how I haven’t turned into a complete robot... yet.</p>
    <h1>What’s in it for You?</h1>
    <p>I’ll be sharing:</p>
    <FeatureList>
      <FeatureListItem><b>Programming Insights:</b> Nuggets of wisdom and ‘aha’ moments about C++, Golang, Javscript and everything in between.</FeatureListItem>
      <FeatureListItem><b>Frontend Follies:</b> Tales and tips from the visually stunning world of frontend development.</FeatureListItem>
      <FeatureListItem><b>Backend Banter:</b> Adventures in the land of databases, APIs, and server-side sorcery.</FeatureListItem>
      <FeatureListItem><b>Design Pattern Drama:</b> Patterns that make your codebase cleaner than a fresh whiteboard after a brainstorming session.</FeatureListItem>
    </FeatureList>
    <h1>Let’s Get This Party Started!</h1>
    <p>So, buckle up, buttercup! Get ready for a wild ride through the geekiest realms of programming, sprinkled with a dash of irreverent humor. It’s going to be fun, it’s going to be educational, and it’s going to be the best darn coding journey you’ve ever embarked on.</p>
    <p>Grab your snacks and let’s code like there’s no tomorrow!</p>
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
          quality: 80
          # duotone: { highlight: "#ffffff", shadow: "#407086" }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
