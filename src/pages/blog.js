import CssBaseline from "@material-ui/core/CssBaseline"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import React from "react"
import BlogContent from "../components/blog/Blog"
import AppBar from "../components/partials/AppBar"
import color from "../utils/color"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: color.primary.light,
      main: color.primary.main,
      dark: color.primary.dark,
      contrastText: color.primary.contrastText
    },
    secondary: {
      light: color.secondary.light,
      main: color.secondary.main,
      dark: color.secondary.dark,
      contrastText: color.secondary.contrastText
    }
  },
  status: {
    danger: color.danger
  }
})

const Blog = () => {
  const fullpageApiRef = React.useRef()

  const moveTo = location => fullpageApiRef.current.fullpageApi.moveTo(location)

  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <AppBar moveTo={moveTo} type="blog" />
        <BlogContent />
      </ThemeProvider>
    </>
  )
}

export default Blog
