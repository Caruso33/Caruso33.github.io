import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import React from "react"
import { Route } from "react-router-dom"
import Home from "./home/Home"
import AppBar from "./partials/AppBar"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#a7ffeb",
      main: "#1de9b6",
      dark: "#00bfa5",
      contrastText: "#000"
    },
    secondary: {
      light: "#ffa726",
      main: "#f57c00",
      dark: "#ef6c00",
      contrastText: "#fff"
    }
  },
  status: {
    danger: "orange"
  }
})

const App = () => {
  const fullpageApiRef = React.useRef()

  const moveTo = location => fullpageApiRef.current.fullpageApi.moveTo(location)

  return (
    <ThemeProvider theme={theme}>
      <AppBar moveTo={moveTo} />
      <Route
        exact
        path="/"
        component={() => <Home fullpageApiRef={fullpageApiRef} />}
      />
    </ThemeProvider>
  )
}

export default App
