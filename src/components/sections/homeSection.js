import React from "react"
import { Parallax } from "react-scroll-parallax"
import {
    SectionHeading,
    SectionParagraph,
    SectionLink,
} from "../sectionComponents"

const HomeSection = ({ sectionData }) => {
    return (
        <section className="my-20 mx-auto container">
            <div className="font-light -mx-3 flex flex-col md:flex-row items-center">
                <div className="px-3 w-11/12 md:w-1/2 flex flex-col items-start">
                    <SectionHeading>
                        {sectionData.mainHeading.mainHeading}
                    </SectionHeading>
                    <SectionParagraph isPlex={true}>
                        {sectionData.subheading.subheading}
                        <SectionLink text={sectionData.sectionLink.text} />
                    </SectionParagraph>
                </div>
                <Parallax
                    className="w-11/12 md:w-1/2"
                    x={ [-10,10] }
                >
                    <img
                        className="mt-20 lg:mt-0 px-3"
                        src={sectionData.mainImage.file.url}
                        alt={sectionData.mainImage.file.fileName}
                    />
                </Parallax>
            </div>
            <div className="flex flex-col md:flex-row mt-32 mx-auto w-11/12 md:w-full border-b border-custom-gray-200 pb-16">
                <div className="font-light pr-8 md:w-1/2">
                    <p className="text-2xl">
                        {sectionData.aboutUsText.aboutUsText}
                    </p>
                </div>
                <div className="mt-8 md:mt-0 font-opensans md:pl-8 flex flex-col md:w-1/2">
                    <p className="block">
                        {sectionData.aboutUsSecondaryText.aboutUsSecondaryText}
                    </p>
                    <p className="mt-8 md:mt-auto block italic">
                        {sectionData.aboutUsTertiaryText.aboutUsTertiaryText}
                    </p>
                </div>
            </div>
            <div className="font-light flex flex-center flex-wrap lg:flex-no-wrap mt-16 items-center justify-center lg:justify-between">
                <span className="mb-10 lg:mb-0 text-2xl w-full lg:w-auto text-center lg:text-left">
                    Our Technology Partners
                </span>
                {sectionData.partners.map((partner, index) => {
                    return (
                        <Parallax
                            x={[0, 20]}
                        >
                            <img
                                className="w-1/3 lg:w-auto mx-5 sm:mx-10 mb-5 lg:mb-0"
                                key={index}
                                src={partner.file.url}
                                alt={partner.file.fileName}
                            />
                        </Parallax>
                    )
                })}
            </div>
        </section>
    )
}

export default HomeSection
