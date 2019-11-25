import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import color from "../../utils/color"

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

export default function Layout({ children }) {
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}
