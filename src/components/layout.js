import * as React from "react"
import { Link } from "gatsby"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <Typography variant="h2" component="h2" gutterBottom>
        <Link to="/">{title}</Link>
      </Typography>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
  // console.log(header)

  // return (
  //   <>
  //     <CssBaseline />
  //     <Container maxWidth="sm">
  //       <header>{header}</header>
  //       <main>{children}</main>
  //       <footer>
  //         © {new Date().getFullYear()}, Built with
  //         {` `}
  //         <a href="https://www.gatsbyjs.com">Gatsby</a>
  //       </footer>
  //     </Container>
  //   </>
  // )
}

export default Layout
