// import { graphql } from "gatsby"
// import React from "react"
// import Layout from "../../components/partials/Layout"
// import Metatags from "../../components/partials/MetaTags"

// export default function index({ data }) {
//   return (
//     <Layout>
//       <Metatags
//         title={"Portfolio"}
//         description={"selected works"}
//         url={data.site.siteMetadata.siteUrl}
//         pathname={location.pathname}
//       />
//       Everyone has to start somewhere, and these are my beginnings with Web
//       Development.
//     </Layout>
//   )
// }

// export const pageQuery = graphql`
//   query {
//     allFile {
//       edges {
//         node {
//           sourceInstanceName
//           name
//         }
//       }
//     }
//     site {
//       siteMetadata {
//         siteUrl
//       }
//     }
//   }
// `
