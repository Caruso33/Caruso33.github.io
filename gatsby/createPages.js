const _get = require("lodash/get")
const _kebabCase = require("lodash/kebabCase")
const path = require("path")
// const slash = require(`slash`)

const markDownTemplatePath = "./src/components/templates/MarkDown.js"
const tagsTemplatePath = "./src/components/templates/Tags.js"

const markdownTemplate = path.resolve(markDownTemplatePath)
const tagsTemplate = path.resolve(tagsTemplatePath)
// const postTemplate = path.resolve(`./src/templates/post.js`)

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(query)

  if (result.errors) {
    return console.error(result.errors[0])
  }

  if (result.data) {
    const tags = createBlogPostPages(result, createPage)
    createTagsPages(tags, createPage)

    // createContentfulPages(result.data, createPage)
    // createWordpressPages(result.data, createPage)
  }
}

function createBlogPostPages(result, createPage) {
  const tags = new Set()

  const blogPosts = result.data.allMarkdownRemark.edges

  blogPosts.forEach((edge, index) => {
    if (_get(edge, "node.frontmatter.tags")) {
      edge.node.frontmatter.tags.forEach(tag => tags.add(tag))
    }

    createPage({
      component: markdownTemplate,
      path: `${edge.node.fields.slug}/`,
      context: {
        slug: edge.node.fields.slug,
        prev: index === 0 ? null : blogPosts[index - 1],
        next: index === blogPosts.length - 1 ? null : blogPosts[index + 1]
      }
    })
  })

  return tags
}

const query = `
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
`

function createTagsPages(tags, createPage) {
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_kebabCase(tag)}/`,
      component: tagsTemplate,
      context: {
        tag
      }
    })
  })
}

// const contentfulQuery = `
//  allContentfulBlogPost {
//    edges {
//      node {
//        slug
//      }
//    }
//  }
//  `

// function createContentfulPages(data, createPage) {
//   data.allContentfulBlogPost.edges.forEach(edge => {
//     createPage({
//       component: blogTemplate,
//       path: `${edge.node.slug}/`,
//       context: {
//         slug: edge.node.slug
//       }
//     })
//   })
// }

// const wordpressQuery = `allWordpressPost {
//   edges {
//   node {
//   id
//   slug
//   }
//   }
//   }
//  `
// function createWordpressPages(data, createPage) {
//   result.data.allWordpressPost.edges.forEach(edge => {
//     createPage({
//       // will be the url for the page
//       path: edge.node.slug,
//       // specify the component template of your choice
//       component: slash(postTemplate),
//       // In the ^template's GraphQL query, 'id' will be available
//       // as a GraphQL variable to query for this posts's data.
//       context: {
//         id: edge.node.id
//       }
//     })
//   })
// }
