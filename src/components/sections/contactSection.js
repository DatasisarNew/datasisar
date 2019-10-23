import React from 'react';
import {SectionHeading, SectionParagraph, SectionLink} from '../sectionComponents'

const FormRow = ({ children }) => {
    return <div className="flex flex-wrap items-end lg:mb-10 -mx-5">{children}</div>
}

const FormInput = ({ varname="", type="text", label = "", placeholder = "", half = true }) => {
    return (
        <div
            className={`input-group flex flex-col px-5 mb-6 lg:mb-0 w-full ${
                half ? "lg:w-1/2" : "lg:w-full"
            }`}
        >
            <label htmlFor={varname} className="text-sm font-bold uppercase">
                {label}
            </label>
            { type==="textarea" ? (
                <textarea
                    id={varname}
                    className="outline-none text-xl bg-transparent placeholder-gray-200 py-3 border-b border-gray-200 active:border-blue-300"
                    placeholder={placeholder}
                />
            ) : (
                <input
                    id={varname}
                    type={type}
                    className="outline-none text-xl bg-transparent placeholder-gray-200 py-3 border-b border-gray-200 active:border-blue-300"
                    placeholder={placeholder}
                />
            ) }
        </div>
    )
}

const ContactSection = () => {
    return (
        <section id="contact" className="bg-custom-blue-500 text-white py-24">
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="md:w-1/3">
                    <SectionHeading>
                        Got a project?
                        <br /> Let's talk
                    </SectionHeading>
                    <h5 className="font-opensans mt-6 tracking-wide font-bold uppercase">
                        tell us everything
                    </h5>
                </div>
                <div className="mt-20 md:mt-0 md:w-2/3">
                    <form action="" className="font-opensans">
                        <FormRow>
                            <FormInput
                                label="your name"
                                placeholder="Abdullah Noman"
                                varname="contact-name"
                            />
                            <FormInput varname="contact-email" type="email" placeholder="Email Address" />
                        </FormRow>
                        <FormRow>
                            <FormInput placeholder="Phone Number" varname="contact-phone" />
                            <FormInput placeholder="Subject" varname="contact-subject" />
                        </FormRow>
                        <FormRow>
                            <FormInput
                                half={false}
                                type="textarea"
                                varname="contact-message"
                                placeholder="Your Message"
                            />
                        </FormRow>
                    </form>
                    <SectionLink text="Start a Project" hasBorders={false} />
                </div>
            </div>
        </section>
    )
}


export default ContactSection;
