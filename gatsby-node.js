const path = require("path")
const slash = require(`slash`)
const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   // query content for WordPress posts
//   const result = await graphql(`
//     query {
//       allWordpressPost {
//         edges {
//           node {
//             id
//             slug
//           }
//         }
//       }
//     }
//   `)

//   console.log("result", result)

//   const postTemplate = path.resolve(`./src/templates/post.js`)
//   result.data.allWordpressPost.edges.forEach(edge => {
//     createPage({
//       // will be the url for the page
//       path: edge.node.slug,
//       // specify the component template of your choice
//       component: slash(postTemplate),
//       // In the ^template's GraphQL query, 'id' will be available
//       // as a GraphQL variable to query for this posts's data.
//       context: {
//         id: edge.node.id,
//       },
//     })
//   })
// }
