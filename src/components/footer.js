import React from "react"
import { SectionHeading } from "../components/sectionComponents"

const Footer = ({ footerLinks, footerLinks2, footerPills }) => {
    return (
        <footer className="container mx-auto">
            <div
                id="footer-data"
                className="py-24 flex flex-col sm:flex-row flex-wrap"
            >
                <div className="flex flex-col lg:flex-row sm:w-1/2">
                    <div>
                        <SectionHeading>Wanna Become a partner?</SectionHeading>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:pl-10 flex-shrink-0">
                        {footerPills.map(pill => (
                            <ContactPill pillData={pill} />
                        ))}
                    </div>
                </div>
                <div className="flex px-3 sm:px-0 justify-between sm:justify-end sm:w-1/2 font-opensans">
                    <ul className="sm:w-48">
                        {footerLinks.map(link => (
                            <li className="my-3">
                                <a href={link.url.url}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                    <ul className="sm:w-48">
                        {footerLinks2.map(link => (
                            <li className="my-3">
                                <a href={link.url.url}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div
                id="footer-copyright"
                className="font-plex py-5 text-sm text-center border-t border-gray-300"
            >
                <p>Copyright © 2019 Datasisar. All rights reserved Datasisar</p>
            </div>
        </footer>
    )
}

const ContactPill = ({ pillData }) => {
    return (
        <div>
            <a
                href="#"
                className={`mb-4 inline-flex flex px-6 py-2 rounded-full font-product ${
                    pillData.isPillActive
                        ? "text-white bg-custom-blue-500"
                        : "bg-custom-gray-100"
                }`}
            >
                <img
                    src={pillData.pillIcon.file.url}
                    alt={pillData.pillIcon.file.fileName}
                />
                <span className="ml-3">{pillData.pillText}</span>
            </a>
        </div>
    )
}

export default Footer
