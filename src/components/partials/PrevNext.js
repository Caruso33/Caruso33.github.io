import { FaCaretLeft, FaCaretRight } from "react-icons/fa"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PrevNextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1.5rem;
`

const LeftCaret = styled(FaCaretLeft)`
  transform: scale(1.5);
  padding-top: 2px;
`

const RightLink = styled(Link)`
  margin-left: auto;
`

const RightCaret = styled(FaCaretRight)`
  transform: scale(1.5);
  padding-top: 2px;
`

export const Prev = ({ prev }) => (
  <div>
    {prev && (
      <Link to={`/${prev.fields.slug}`}>
        <LeftCaret /> {prev.frontmatter.title}
      </Link>
    )}
  </div>
)

export const Next = ({ next }) => (
  <div>
    {next && (
      <RightLink to={`/${next.fields.slug}`}>
        {next.frontmatter.title} <RightCaret />
      </RightLink>
    )}
  </div>
)

const PrevNext = ({ prev, next }) => {
  return (
    <PrevNextWrapper>
      <Prev prev={prev} />

      <Next next={next} />
    </PrevNextWrapper>
  )
}

export default PrevNext
