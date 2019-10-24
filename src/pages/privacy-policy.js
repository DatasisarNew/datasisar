import React from "react"
import showdown from "showdown"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PrivacyPolicyPage = ({ data }) => {
    const converter = new showdown.Converter()
    const privacyText = data.privacyContent.privacyText.privacyText
    return (
        <Layout hideLinks={true}>
            <SEO title="Privacy Policy" />
            <section className="container mx-auto my-20">
                <h1 className="text-5xl font-light">Privacy Policy</h1>
                <article
                    className="markdown my-8"
                    dangerouslySetInnerHTML={{
                        __html: converter.makeHtml(privacyText),
                    }}
                ></article>
            </section>
        </Layout>
    )
}

export const PageQuery = graphql`
    {
        privacyContent:contentfulPrivacyContent {
            privacyText {
                privacyText
            }
        }
    }
`

export default PrivacyPolicyPage
