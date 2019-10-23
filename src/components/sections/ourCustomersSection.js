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

const OurCustomersSection = ({ sectionData }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
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
                    slidesToShow: 3,
                },
            },
        ],
    }
    return (
        <section className="container mx-auto py-24 overflow-hidden">
            <div className="text-center">
                <SectionHeading>Our Customers</SectionHeading>
            </div>
            <div className="my-10">
                <Slider {...settings}>
                    {sectionData.customers.map(( customer, index ) => (
                            <img
                                src={customer.file.url}
                                alt={customer.file.fileName}
                                className="h-24 px-4 sm:px-10 mb-10"
                        />
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default OurCustomersSection
