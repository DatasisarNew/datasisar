import React from "react"
import { Parallax } from "react-scroll-parallax"
import {
    SectionHeading,
    SectionParagraph,
    SectionLink,
} from "../sectionComponents"

const ServiceIncludeCard = ({ cardData }) => {
    return (
        <div className="w-1/2 lg:w-1/4 px-5 mb-10">
            <img
                src={cardData.serviceIncludeIcon.file.url}
                alt="UI/UX Icon"
                className="h-12"
            />
            <h4 className="mt-8 text-xl">{cardData.sectionIncludeCardTitle}</h4>
            <p className="font-opensans mt-2 text-base md:text-lg lg:text-xl">
                {cardData.sectionIncludeCardText.sectionIncludeCardText}
            </p>
        </div>
    )
}

const ServicesIncludesSection = ({ sectionData }) => {
    return (
        <section className="py-16 lg:py-24 pb-20 lg:pb-0 container mx-auto border-b lg:border-0 border-custom-gray-300">
            <SectionHeading>{sectionData.mainHeading}</SectionHeading>
                <div className="flex flex-wrap pt-16 -mx-5">
                    {sectionData.serviceIncludesCards.map(card => (
                        <ServiceIncludeCard
                            cardData={card}
                        ></ServiceIncludeCard>
                    ))}
                </div>
            <SectionLink text={sectionData.sectionLink.text} />
        </section>
    )
}

export default ServicesIncludesSection
