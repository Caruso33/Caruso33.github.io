import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"

const Fullpage = ({
  children,
  anchors = [],
  navigation = false,
  slidesNavigation = false,
  sectionsColor = [],
  scrollingSpeed = 700
}) => (
  <ReactFullpage
    licenseKey={"00000000-00000000-00000000-00000000"}
    scrollingSpeed={scrollingSpeed}
    navigation={navigation}
    slidesNavigation={slidesNavigation}
    anchors={anchors}
    sectionsColor={sectionsColor}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          {children(state, fullpageApi)}
        </ReactFullpage.Wrapper>
      )
    }}
  />
)

const FullPageSection = ({ children, className = "", id = "" }) => (
  <div className={"section " + className} id={id}>
    {children}
  </div>
)
const FullPageSlide = ({ children, className = "", id = "" }) => (
  <div className={"slide " + className} id={id}>
    {children}
  </div>
)

export { Fullpage, FullPageSection, FullPageSlide }
