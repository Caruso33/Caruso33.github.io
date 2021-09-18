/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const colors = require("./config/color")

const siteConfig = require("./config/site")
const { siteMetadata, shared, manifest } = siteConfig

module.exports = {
  siteMetadata: {
    ...siteMetadata,
    title: shared.title,
    description: shared.description,
    keywords: ["Software Engineer", "AI / Machine Learning"],
    canonicalUrl: siteMetadata.siteUrl,
    twitterHandle: shared.twitterHandle,
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
      twitter: shared.twitterHandle,
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
        background_color: colors.darkNavy,
        theme_color: colors.navy,
        display: "minimal-ui",
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
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "portfolio",
    //     path: `${__dirname}/src/pages/portfolio/`,
    //   },
    // },
    // resolve: `gatsby-plugin-mdx`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-external-links
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer",
            },
          },
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-images
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
              tracedSVG: { color: colors.green },
            },
          },
          // {
          //   resolve: "gatsby-remark-images",
          //   options: {
          //     maxWidth: 940, // full width page
          //     linkImagesToOriginal: false,
          //     background: color.contentBackground,
          //   },
          // },
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-code-titles/
            resolve: "gatsby-remark-code-titles",
          }, // IMPORTANT: this must be ahead of other plugins that use code blocks
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-prismjs
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
            },
          },
        ],
      },
    },
    // 'gatsby-plugin-workerize-loader',
    "gatsby-plugin-twitter",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: colors.darkNavy,
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
    //   blogUrl: 'https://tobias.gq/blog',
    //   output: '/blog/rss.xml',
    //   title: 'Tobias Leinss Blog RSS Feed',
    // }),
    //     ],
    //   },
    // },
    "gatsby-plugin-offline",
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-leaflet",
    "gatsby-plugin-sitemap",
    // {
    //   resolve: "gatsby-plugin-antd",
    //   options: {
    //     style: true,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-less`,
    //   options: {
    //     lessOptions: {
    //       javascriptEnabled: true,
    //       modifyVars: {
    //         ...color,
    //       },
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-45666519-2",
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
