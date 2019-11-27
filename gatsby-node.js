const _get = require("lodash/get")
const _kebabCase = require("lodash/kebabCase")
const path = require("path")
const slash = require(`slash`)
const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    // createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const markdownTemplate = path.resolve(
    "./src/components/templates/MarkDown.js"
  )
  const tagsTemplate = path.resolve("./src/components/templates/Tags.js")

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
    }
  `)

  // allContentfulBlogPost {
  //   edges {
  //     node {
  //       slug
  //     }
  //   }
  // }

  //  allWordpressPost {
  //  edges {
  //  node {
  //  id
  //  slug
  //  }
  //  }
  //  }

  if (result.data) {
    const blogPosts = result.data.allMarkdownRemark.edges
    let allTags = new Set()

    blogPosts.forEach((edge, index) => {
      if (_get(edge, "node.frontmatter.tags")) {
        edge.node.frontmatter.tags.forEach(tag => allTags.add(tag))
      }

      createPage({
        component: markdownTemplate,
        path: `blog/${edge.node.fields.slug}/`,
        context: {
          slug: edge.node.fields.slug,
          prev: index === 0 ? null : blogPosts[index - 1],
          next: index === result.length - 1 ? null : blogPosts[index + 1]
        }
      })
    })

    allTags.forEach(tag => {
      createPage({
        path: `/blog/tags/${_kebabCase(tag)}/`,
        component: tagsTemplate,
        context: {
          tag
        }
      })
    })

    // result.data.allContentfulBlogPost.edges.forEach(edge => {
    //   createPage({
    //     component: blogTemplate,
    //     path: `/blog/${edge.node.slug}`,
    //     context: {
    //       slug: edge.node.slug
    //     }
    //   })
    // })

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
  }
}
