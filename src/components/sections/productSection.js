import React from "react"
import { Parallax } from "react-scroll-parallax"
import {
    SectionHeading,
    SectionParagraph,
    SectionLink,
} from "../sectionComponents"

import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ProductCard = ({ cardData }) => {
    return (
        <div className="mr-10 flex-shrink-0">
            <img
                src={cardData.aboutCardImage.file.url}
                alt={cardData.aboutCardImage.file.fileName}
            />
            <h3 className="font-light text-xl md:text-2xl lg:text-3xl mt-3">
                {cardData.aboutCardText}
            </h3>
        </div>
    )
}

const ProductSection = ({ sectionData }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3.1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }
    return (
        <section id="products" className="py-24 lg:-mt-8 bg-custom-gray-100 overflow-hidden">
            <div className="container mx-auto">
                <div className="md:w-7/12 mb-12">
                    <SectionHeading>{sectionData.mainHeading}</SectionHeading>
                    <SectionParagraph>
                        {sectionData.mainText.mainText}
                    </SectionParagraph>
                </div>
                <Slider {...settings}>
                    {sectionData.productCards.map((card, index) => (
                        <Parallax x={[30, -40]}><ProductCard cardData={card} key={index} /></Parallax>
                    ))}
                </Slider>
                <SectionLink text={sectionData.sectionLink.text} url={sectionData.sectionLink.url.url} />
            </div>
        </section>
    )
}

export default ProductSection
