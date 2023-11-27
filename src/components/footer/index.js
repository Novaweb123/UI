import React from 'react';
import Text from '../text'
import './footer.scss';
import NavList from '../navlist';

const OptionsTerm = [
    {
        text: "Term of Use",
        link: "/termOfUse"
    },
    {
        text: "Privacy Policy",
        link: "/privacyPolicy"
    },
]

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-main">
                        <NavList
                            options={OptionsTerm}
                            className="termlist"
                        />
                        <Text
                            type="PARAGRAPH"
                            text="© 2023. All right reserved."
                            className="copyrights"
                        />              
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
