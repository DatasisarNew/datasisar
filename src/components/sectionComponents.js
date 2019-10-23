import React from "react"
import arrowRightThin from "../images/arrow-right-thin.svg"

export const SectionHeading = ({ children }) => {
    return (
        <h1 className="font-plex font-light text-4xl xl:text-5xl leading-tight">
            {children}
        </h1>
    )
}

export const SectionParagraph = ({ children, isPlex = false }) => {
    return (
        <p
            className={`${
                isPlex ? "font-plex" : "font-opensans"
            } text-lg lg:text-xl mt-5 flex flex-col items-start`}
        >
            {children}
        </p>
    )
}

export const SectionLink = ({
    isTypeSubmit = false,
    url,
    text,
    hasBorders = true,
}) => {
    const regularLink = (
        <a
            href={url}
            className={`mt-10 py-2 text-3xl inline-flex ${
                hasBorders ? "border-t-2 border-b-2 border-custom-gray-300" : ""
            }`}
        >
            <span className="font-light mr-8">{text}</span>
            <img src={arrowRightThin} alt="Arrow Right Thin" />
        </a>
    )

    const SubmitButton = (
        <button
            type="submit"
            className={`mt-10 py-2 text-3xl inline-flex items-center font-plex ${
                hasBorders ? "border-t-2 border-b-2 border-custom-gray-300" : ""
            }`}
        >
            <span className="font-light mr-8">{text}</span>
            <img src={arrowRightThin} alt="Arrow Right Thin" />
        </button>
    )
    if (isTypeSubmit) {
        return SubmitButton
    } else {
        return regularLink
    }
}
