/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import '~styles/app.scss'

import Header from './components/Header'
import Footer from './components/Footer'
import SVGDefs from './components/SVGDefs'

import { layout } from './Layout.module.scss'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={layout}>
      <Header siteTitle={data.site.siteMetadata?.title} />
      <main className="main">{children}</main>
      <Footer siteTitle={data.site.siteMetadata?.title} />
      <SVGDefs />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
