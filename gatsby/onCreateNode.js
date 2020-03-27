// const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

module.exports = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    // createFilePath({ node, getNode, basePath: `pages` })

    // create a field 'slug'
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}
