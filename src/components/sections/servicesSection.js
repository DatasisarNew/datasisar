import React from "react"
import { Parallax } from "react-scroll-parallax"
import {
    SectionHeading,
    SectionParagraph,
    SectionLink,
} from "../sectionComponents"

const ServiceCard = ({ cardData }) => {
    return (
        <div
            className={`${
                cardData.isCardActive
                    ? "mt-2 lg:mt-10 bg-white lg:bg-custom-blue-500 lg:text-white shadow-lg lg:shadow-2xl z-20"
                    : "mt-2 shadow-lg lg:shadow-md bg-white"
            } w-48p sm:w-64 lg:w-64 sm:mr-2 p-6 flex flex-col items-center justify-center text-center rounded`}
        >
            <img
                className="w-20 sm:w-auto mb-6"
                src={cardData.cardIcon.file.url}
                alt=""
            />
            <h3 className="font-plex text-xl md:text-2xl text-light">
                {cardData.cardTitle}
            </h3>
            <p className="font-opensans">{cardData.cardText}</p>
        </div>
    )
}

const ServicesSection = ({ sectionData }) => {
    return (
        <section
            id="services"
            className="container mx-auto text-center lg:text-left flex flex-col lg:flex-row justify-between lg:mt-48"
        >
            <div className="lg:w-1/2 lg:py-16">
                <SectionHeading>
                    {sectionData.mainHeading.mainHeading}
                </SectionHeading>
                <SectionParagraph>
                    {sectionData.secondaryText.secondaryText}
                </SectionParagraph>
            </div>
            <Parallax 
                // x={[50, -50]}
                y={[50, -50]}
            >
                <div className="mt-20 w-full lg:h-172 lg:w-132 lg:mt-0 mx-auto lg:mx-0 flex justify-between sm:justify-center lg:justify-start lg:flex-col lg:items-end flex-wrap">
                    {sectionData.serviceCards.map(card => (
                        <ServiceCard cardData={card} />
                    ))}
                </div>
            </Parallax>
        </section>
    )
}

export default ServicesSection
