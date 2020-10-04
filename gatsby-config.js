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
        background_color: color.pageBackground,
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
    // resolve: `gatsby-plugin-mdx`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 940, // full width page
              linkImagesToOriginal: false,
              background: color.contentBackground,
            },
          },
        ],
      },
    },
    // 'gatsby-plugin-workerize-loader',
    "gatsby-plugin-twitter",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: color.pageBackground,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    // "gatsby-plugin-offline" ??
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     feeds: [
          // getBlogFeed({
          //   filePathRegex: `//content//`,
          //   blogUrl: 'https://tobiasleinss.ml/blog',
          //   output: '/blog/rss.xml',
          //   title: 'Tobias Leinss Blog RSS Feed',
          // }),
    //     ],
    //   },
    // },
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-offline",
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

// function getBlogFeed({filePathRegex, blogUrl, ...overrides}) {
//   /**
//    * These RSS feeds can be quite expensive to generate. Limiting the number of
//    * posts and keeping each item's template lightweight (only using frontmatter,
//    * avoiding the html/excerpt fields) helps negate this.
//    */
//   return {
//     serialize: ({query: {allMdx}}) => {
//       const stripSlash = slug => (slug.startsWith('/') ? slug.slice(1) : slug)
//       return allMdx.edges.map(edge => {
//         const url = `${siteUrl}/${stripSlash(edge.node.fields.slug)}`

//         return {
//           ...edge.node.frontmatter,
//           date: edge.node.fields.date,
//           url,
//           guid: url,
//           custom_elements: [
//             {
//               'content:encoded': `<div style="width: 100%; margin: 0 auto; max-width: 800px; padding: 40px 40px;">
//                   <p>
//                     I've posted a new article <em>"${edge.node.frontmatter.title}"</em> and you can <a href="${url}">read it online</a>.
//                     <br>
//                     ${edge.node.fields.plainTextDescription}
//                     <br>
//                     You can also <a href="${siteUrl}/subscribe">subscribe</a> for weekly emails on what I'm learning, working on, and writing about.
//                   </p>
//                 </div>`,
//             },
//           ],
//         }
//       })
//     },
//     query: `
//        {
//          allMdx(
//            limit: 25,
//            filter: {
//              frontmatter: {published: {ne: false}}
//              fileAbsolutePath: {regex: "${filePathRegex}"}
//            }
//            sort: { order: DESC, fields: [frontmatter___date] }
//          ) {
//            edges {
//              node {
//                fields {
//                  slug
//                  date
//                  plainTextDescription
//                }
//                frontmatter {
//                  title
//                }
//              }
//            }
//          }
//        }
//      `,
//     ...overrides,
//   }
// }
