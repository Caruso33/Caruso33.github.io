/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "tobiasleinss.ml",
    siteUrl: "https://www.tobiasleinss.ml"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tobiasleinss.ml`,
        short_name: `tobias`,
        start_url: `/`,
        background_color: "#fff",
        theme_color: "#1de9b6",
        display: `standalone`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     // your WordPress source
    //     baseUrl: "caruso33.atwebpages.com/",
    //     protocol: `http`,
    //     // is it hosted on wordpress.com, or self-hosted?
    //     hostingWPCOM: false,
    //     // does your site use the Advanced Custom Fields Plugin?
    //     useACF: false
    //   }
    // }
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    //   }
    // }
  ]
}
