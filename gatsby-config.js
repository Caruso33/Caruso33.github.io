/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const color = require("./src/utils/color")
const siteConfig = require("./config/site")
console.log({siteConfig})
module.exports = {
  siteMetadata: {
    ...siteConfig.siteMetadata,
    title: siteConfig.shared.title,
    keywords: ["Software Engineer", "AI / Machine Learning"],
    canonicalUrl: siteConfig.siteMetadata.siteUrl,
    twitterHandle: siteConfig.social.twitterHandle,
    image: siteConfig.siteMetadata.logo,
    author: {
      name: siteConfig.siteMetadata.author,
      minibio: siteConfig.siteMetadata.minibio,
    },
    organization: {
      name: siteConfig.siteMetadata.organization,
      url: siteConfig.siteMetadata.siteUrl,
      logo: siteConfig.siteMetadata.logo,
    },
    social: {
      twitter: siteConfig.social.twitterHandle,
    },
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-leaflet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            ...color,
          },
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "portfolio",
        path: `${__dirname}/src/pages/portfolio/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tobiasleinss.ml`,
        short_name: `tobias`,
        start_url: `/`,
        background_color: "#fff",
        theme_color: color["primary-color"],
        display: `standalone`,
      },
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
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
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
  ],
}
