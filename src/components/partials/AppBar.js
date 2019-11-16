import AppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import AccountTreeIcon from "@material-ui/icons/AccountTree"
import BuildIcon from "@material-ui/icons/Build"
import React from "react"
import { Link } from "react-router-dom"

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
    //   backgroundColor: "#70c49d"
  },
  h1: { color: "inherit" },
  banner: { textDecoration: "none", color: "inherit" }
})

export default ({ moveTo }) => {
  const classes = useStyles()

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit">
          Tobias Leinss
        </Typography>

        <Typography variant="h4" component="h1" className={classes.h1}>
          <Link to="" className={classes.banner}>
            Welcome <i className="fas fa-code" />
          </Link>
        </Typography>

        <div>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => moveTo("profile")}
          >
            <BuildIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => moveTo("portfolio")}
          >
            <AccountTreeIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}
