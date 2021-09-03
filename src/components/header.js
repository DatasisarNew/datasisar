import React, { useState } from "react"
import iconBars from "../images/icon-hamburger.svg"

const Header = ({ navLinks, mainLogo, hideLinks }) => {
    const [isNavToggled, navToggle] = useState(false)
    console.log(navLinks);
    return (
        <nav className="font-product container mx-auto text-lg py-5 flex flex-wrap items-center justify-between">
            <a href="/" id="nav-header" className="w-1/2 lg:w-auto">
                <img src={mainLogo.file.url} alt={mainLogo.file.fileName} />
            </a>
            <button
                className="lg:hidden ml-auto p-3"
                onClick={() => navToggle(!isNavToggled)}
            >
                <img src={iconBars} alt="hamburger-menu-button" />
            </button>
            { hideLinks ? '' :
                ( <div
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
                        </div> )
            }
        </nav>
    )
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
<script type="text/javascript" id="zsiqchat">var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "3b50a5ded20971aeb775c0945e109fd21768c926de425edee7916ff31caed955", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);</script>
