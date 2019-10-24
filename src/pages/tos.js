import React from "react"
import showdown from "showdown"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TOS = ({ data }) => {
    const converter = new showdown.Converter()
    const tosText = data.contentfulTermsAndConditions.tos.tos
    return (
        <Layout>
            <SEO title="TOS" />
            <section className="container mx-auto my-20">
                <h1 className="text-5xl font-light">Terms and Conditions</h1>
                <article
                    className="markdown my-8"
                    dangerouslySetInnerHTML={{
                        __html: converter.makeHtml(tosText),
                    }}
                ></article>
            </section>
        </Layout>
    )
}

export const PageQuery = graphql`
    {
        contentfulTermsAndConditions {
            tos: termsAndConditions {
                tos: termsAndConditions
            }
        }
    }
`

export default TOS

