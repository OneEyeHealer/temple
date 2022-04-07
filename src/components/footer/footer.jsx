import React from 'react';
import {footerLinks} from "../../utils/footerData";

const Footer = ({platformProperty, urlProperty, iconProperty, footerLiClassProperty,}) => {
    return (
        <React.Fragment>
            <footer className="container-fluids text-center text-light bg-info mt-5">
                <div className="container">
                    <ul className="list-inline pt-2">
                        {footerLinks.map(links => (
                            <li key={links[platformProperty]} className={links[footerLiClassProperty]}>
                                {<a key={links[urlProperty]} href={links[urlProperty]} target="_blank" rel="noreferrer">
                                    {links[iconProperty]}
                                </a>}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="container-fluid pb-2">
                    Copyright &#169; 2021 IYF Rohini. All rights reserved
                </div>
            </footer>
        </React.Fragment>
    );
};

Footer.defaultProps = {
    platformProperty: "platform",
    urlProperty: "url",
    iconProperty: "icon",
    footerLiClassProperty: "footerLiClass",
}

export default Footer;