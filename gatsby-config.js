/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const color = require("./src/utils/color")

const siteConfig = require("./config/site")
const { siteMetadata, shared, manifest } = siteConfig

module.exports = {
  siteMetadata: {
    ...siteMetadata,
    title: shared.title,
    description: shared.description,
    keywords: ["Software Engineer", "AI / Machine Learning"],
    canonicalUrl: siteMetadata.siteUrl,
    twitterHandle: siteConfig.shared.twitterHandle,
    image: siteMetadata.logo,
    author: {
      name: siteMetadata.author,
      minibio: siteMetadata.minibio,
    },
    organization: {
      name: siteMetadata.organization,
      url: siteMetadata.siteUrl,
      logo: siteMetadata.logo,
    },
    social: {
      twitter: siteConfig.shared.twitterHandle,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: shared.title,
        short_name: manifest.titleShort,
        description: shared.description,
        start_url: manifest.pathPrefix,
        lang: manifest.lang,
        background_color: manifest.backgroundColor,
        theme_color: color["primary-color"],
        display: `standalone`,
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
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
