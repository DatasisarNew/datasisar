/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ParallaxProvider } from "react-scroll-parallax"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "@fortawesome/fontawesome-free/css/all.css"
import "./tailwind.css"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]', {
        speed: 600
    })
}

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
            metadata: contentfulMetadata {
                mainLogo {
                    file {
                        url
                    }
                }
                navLinks {
                    text
                    url {
                        url
                    }
                }
                footerPills {
                    pillText
                    pillIcon {
                        file {
                            url
                            fileName
                        }
                    }
                    isPillActive
                }
                footerLinks {
                    text
                    url {
                        url
                    }
                }
                footerLinks2 {
                    text
                    url {
                        url
                    }
                }
            }
        }
    `)

    const { mainLogo, navLinks } = data.metadata
    const { footerLinks, footerLinks2, footerPills } = data.metadata

    return (
        <>
            <ParallaxProvider>
                <Header
                    mainLogo={mainLogo}
                    navLinks={navLinks}
                    siteTitle={data.site.siteMetadata.title}
                />
                <div className="font-plex">
                    <main>{children}</main>
                </div>
                <Footer
                    footerLinks={footerLinks}
                    footerLinks2={footerLinks2}
                    footerPills={footerPills}
                />
            </ParallaxProvider>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
