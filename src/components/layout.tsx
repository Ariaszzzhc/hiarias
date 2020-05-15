import React from "react"
import { Link } from "gatsby"


interface LayoutProps {
  location: Location
  title: string
  children: any
}

const Layout = ({ location, title, children }: LayoutProps) => {
  const header = (
    <nav className="navigation">
      <section className="container">
        <Link className="title" to={`/`}>
          {title}
        </Link>
      </section>
    </nav>
  )

  return (
    <div>
      {header}
      <main className="wrapper">
        <div id="body" className="content">
          <div className="container">{children}</div>
        </div>
      </main>
    </div>
  )
}

export default Layout
