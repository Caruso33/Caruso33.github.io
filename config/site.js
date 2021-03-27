module.exports = {
  shared: {
    title: "tobias.gq", // Navigation and Site Title
    description:
      "Come check out how Tobias Leinss can help you level up your websites.",
    twitterHandle: "@caruso33",
  },
  siteMetadata: {
    siteUrl: "https://www.tobias.gq", // Domain of your site. No trailing slash!
    logo: "favicon-32x32.png", // Used for SEO and manifest, path to your image you placed in the 'static' folder
    author: "Tobias Leinss", // Author for schemaORGJSONLD
    minibio: `
    <strong>Tobias Leinss</strong> is a Fullstack JavaScript and Python software engineer. 
    He's interested in AI and Blockchain technologies. He lives with his wife in Esslingen, Germany..
  `,
    organization: "Tobias Leinss",
  },
  manifest: {
    titleShort: "tobiasleinss", // short_name for manifest
    pathPrefix: "/",
    backgroundColor: "#f0f2f5",
    lang: "en", // Language Tag on <html> element
  },

  // Social component
  twitter: "https://twitter.com/caruso33/",
  github: "https://github.com/caruso33/",
  linkedin: "https://www.linkedin.com/in/tobias-leinss/",
  youtube: "https://www.youtube.com/channel/UChu_X4ofbd-3q_uwEX3I-5Q",
  rss: "https://tobias.gq/blog/rss.xml",
}
