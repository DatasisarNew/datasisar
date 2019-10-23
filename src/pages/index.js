import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HomeSection from '../components/sections/homeSection'
import ServicesSection from '../components/sections/servicesSection'
import AboutSection from '../components/sections/aboutSection'
import ServicesIncludesSection from '../components/sections/servicesIncludesSection'
import OurCustomersSection from '../components/sections/ourCustomersSection'
import ContactSection from '../components/sections/contactSection'

import backgroundTrapezoid from "../images/background-trapezoid.svg"

const IndexPage = ({ data }) => {
    const mainSectionData = data.mainSectionData
    const serviceSectionData = data.serviceSection
    const aboutSectionData = data.aboutSection
    const serviceIncludesSectionData = data.serviceIncludesSection
    const ourCustomersSection = data.ourCustomersSection
    return (
        <Layout>
            <SEO title="Home" />
            <img
                src={backgroundTrapezoid}
                alt="Background Trapezoid"
                className="absolute top-0 right-0"
                style={{ zIndex: -1 }}
            />
            <HomeSection sectionData={mainSectionData} />
            <ServicesSection sectionData={serviceSectionData} />
            <AboutSection sectionData={aboutSectionData} />
            <ServicesIncludesSection sectionData={serviceIncludesSectionData} />
            <OurCustomersSection sectionData={ourCustomersSection} />
            <ContactSection />
        </Layout>
    )
}

export const PageQuery = graphql`
    {
        mainSectionData: contentfulMainSection {
            mainHeading {
                mainHeading
            }
            subheading {
                subheading
            }
            sectionLink {
                text
                link
            }
            mainImage {
                file {
                    url
                    fileName
                }
            }
            aboutUsText {
                aboutUsText
            }
            aboutUsSecondaryText {
                aboutUsSecondaryText
            }
            aboutUsTertiaryText {
                aboutUsTertiaryText
            }
            partners {
                file {
                    url
                    fileName
                }
            }
        }
        serviceSection: contentfulServiceSection {
            mainHeading {
                mainHeading
            }
            secondaryText {
                secondaryText
            }
            serviceCards {
                isCardActive
                cardTitle
                cardText
                cardIcon {
                    file {
                        url
                        fileName
                    }
                }
            }
        }
        aboutSection: contentfulAboutSection {
            mainHeading
            mainText {
                mainText
            }
            aboutCards {
                aboutCardText
                aboutCardImage {
                    file {
                        url
                        fileName
                    }
                }
            }
            sectionLink {
                text
                href
            }
        }
        serviceIncludesSection: contentfulServiceIncludesSection {
            mainHeading
            serviceIncludesCards {
                serviceIncludeIcon {
                    file {
                        url
                        fileName
                    }
                }
                sectionIncludeCardText {
                    sectionIncludeCardText
                }
                sectionIncludeCardTitle
            }
            sectionLink {
                text
                href
            }
        }
        ourCustomersSection: contentfulOurCustomersSection {
            customers {
                file {
                    url
                    fileName
                }
            }
        }
    }
`

export default IndexPage
