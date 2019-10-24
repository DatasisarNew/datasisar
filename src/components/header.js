import React, { useState } from "react"
import iconBars from "../images/icon-hamburger.svg"

const Header = ({ navLinks, mainLogo }) => {
    const [isNavToggled, navToggle] = useState(false)
    return (
        <nav className="font-product container mx-auto text-lg py-5 flex flex-wrap items-center justify-between">
            <div id="nav-header" className="w-1/2 lg:w-auto">
                <img src={mainLogo.file.url} alt={mainLogo.file.fileName} />
            </div>
            <button
                className="lg:hidden ml-auto p-3"
                onClick={() => navToggle(!isNavToggled)}
            >
                <img src={iconBars} alt="hamburger-menu-button" />
            </button>
            <div
                id="nav-links"
                className={`w-full lg:w-auto lg:block ${
                    isNavToggled ? "block" : "hidden"
                }`}
            >
                <ul className="lg:flex mt-10 lg:mt-0 mb-5 lg:mb-0 uppercase font-medium items-center">
                    {navLinks.map((link, index) => (
                        <li className="my-5 lg:my-0 px-5" key={index}>
                            <a href={link.url.url}>{link.text}</a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="#contact"
                            className="lg:ml-6 normal-case font-medium px-8 py-3 rounded-full text-white"
                            style={{
                                backgroundImage: `linear-gradient(53deg, #204DD4 0%, #4AD4F8 100%)`,
                            }}
                        >
                            Start a Project
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
