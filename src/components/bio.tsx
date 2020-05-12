/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/avatar.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary {
              status
              tags
            }
          }
          github
        }
      }
    }
  `)

  const { author, github } = data.site.siteMetadata
  return (
    <div className="container">
      <div className="row">
        <div className="column column-10 column-offset-20">
          <div className="row">
            <a href={github}>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author.name}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
            </a>
          </div>
        </div>
        <div className="column column-20">
          {author.summary.tags.map((t: string) => (
            <div className="row">{t}</div>
          ))}
        </div>
        <div className="column column-30">
          <div className="row">
            © {new Date().getFullYear()}, Built with&nbsp;<a href="https://www.gatsbyjs.org">GatsbyJs</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio
