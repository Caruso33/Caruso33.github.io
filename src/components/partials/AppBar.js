import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import AccountTreeIcon from "@material-ui/icons/AccountTree"
import BuildIcon from "@material-ui/icons/Build"
import { Link } from "gatsby"
import React from "react"
import color from "../../utils/color"

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  capitalize: {
    textTransform: "capitalize"
  },
  onHover: { color: "inherit", "&:hover": { color: color.secondary.main } }
})

export default ({ moveTo, type, title: passedTitle }) => {
  const classes = useStyles()

  const [left, title, right] = getAppBarContent({
    type,
    classes,
    moveTo,
    passedTitle
  })

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        {left}

        {title}

        {right}
      </Toolbar>
    </AppBar>
  )
}

const getAppBarContent = ({ type, classes, moveTo, passedTitle }) => {
  let left = "",
    title = "",
    right = ""

  let leftLinkTo = "",
    leftLinkTitle = "",
    titleWhereTo = "",
    titleText = passedTitle || "",
    rightButtons = []

  switch (type) {
    case "welcome":
      leftLinkTitle = "Blog"
      leftLinkTo = "/blog"
      titleWhereTo = "intro"
      titleText = "<Welcome />"
      rightButtons = [
        { moveWhere: "profile", icon: <BuildIcon /> },
        { moveWhere: "portfolio", icon: <AccountTreeIcon /> }
      ]

      break

    case "blog":
      leftLinkTo = "/"
      leftLinkTitle = "<<"
      titleWhereTo = "/blog"
      titleText = "Blog"
      break

    case "blogPost":
      leftLinkTo = "/blog"
      leftLinkTitle = "<<"
      break

    case "404":
      titleWhereTo = "/"
      titleText = "404"
      break

    default:
      break
  }

  left = (
    <Link to={leftLinkTo} className={classes.onHover}>
      <Button className={classes.onHover}>
        <Typography variant="h6" className={classes.capitalize}>
          {leftLinkTitle}
        </Typography>
      </Button>
    </Link>
  )

  title = (
    <Button onClick={() => moveTo(titleWhereTo)} className={classes.onHover}>
      <Typography
        variant="h4"
        component="h1"
        style={{ paddingTop: 10 }}
        className={classes.capitalize}
      >
        {titleText}
      </Typography>
    </Button>
  )

  right = (
    <div style={{ minWidth: 64 }}>
      {rightButtons.map(({ moveWhere, icon }) => (
        <IconButton
          key={moveWhere}
          className={classes.onHover}
          color="inherit"
          aria-label="Menu"
          onClick={() => moveTo(moveWhere)}
        >
          {icon}
        </IconButton>
      ))}
    </div>
  )
  return [left, title, right]
}
