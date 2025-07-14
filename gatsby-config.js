module.exports = {
  pathPrefix: '/site',
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: 'gatsby-plugin-favicons',
      options: {
        logo: './src/favicon.svg',
        appName: 'Nenjo Trade Website',
        background: '#fff',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          yandex: false,
          windows: false
        }
      }
    }
    // {
    //   resolve: `gatsby-source-remote-images`,
    //   options: {
    //     filter: node => node.internal.type === `UnsplashImagesYaml`,
    //   },
    // },
  ],
}
