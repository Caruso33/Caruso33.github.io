import React from "react"
import { graphql } from "gatsby"
// import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

// export const query = graphql`
//   query($slug: String!) {
//     contentfulBlogPost(slug: { eq: $slug }) {
//       title
//       publishedDate(formatString: "YYYY/MM/DD")
//       body {
//         json
//       }
//     }
//   }
// `

// export default function ContentfulTemplate(props) {
//   const { data } = props

//   const options = {
//     renderNode: {
//       "embedded-asset-block": node => (
//         <img
//           src={node.data.target.fields.file["en-US"].url}
//           alt={node.data.target.fields.title["en-US"]}
//         />
//       )
//     }
//   }
//   return (
//     <div>
//       <h1>{data.contentfulBlogPost.title}</h1>
//       <p>{data.contentfulBlogPost.publishedDate}</p>
//       {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
//     </div>
//   )
// }
