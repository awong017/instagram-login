import React from 'react'
import Styled, { ThemeProvider } from 'styled-components'
import styles from '../styles/globalStyles'

const FooterDiv = Styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding-bottom: 52px;
    font-size: 12px;

    .footer-links {
        display: flex;
        justify-content: center;
        padding-left: 0;
        list-style: none;

        li {
            margin-right: 8px;
            margin-left: 8px;

            a {
                text-decoration: none;
                color: ${(props) => props.theme.footer};

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }

    @media screen and (max-height: 800px) {
        position: initial;
        left: inital;
        bottom: initial;
        margin-top: 52px;
        margin-bottom: 52px;
        width: initial;
        padding-bottom: 0;
    }

    @media screen and (max-width: 440px) {
        display: none;
    }
`

const Footer = () => {
    return (
        <ThemeProvider theme={styles}>
            <FooterDiv>
                <ul className="footer-links">
                    <li><a href="https://about.instagram.com/">About</a></li>
                    <li><a href="https://about.instagram.com/blog/">Blog</a></li>
                    <li><a href="https://www.instagram.com/about/jobs/">Jobs</a></li>
                    <li><a href="https://help.instagram.com/">Help</a></li>
                    <li><a href="https://www.instagram.com/developer/">API</a></li>
                    <li><a href="https://www.instagram.com/legal/privacy/">Privacy</a></li>
                    <li><a href="https://www.instagram.com/legal/terms/">Terms</a></li>
                    <li><a href="https://www.instagram.com/directory/profiles/">Top Accounts</a></li>
                    <li><a href="https://www.instagram.com/directory/hashtags/">Hashtags</a></li>
                    <li><a href="https://www.instagram.com/explore/locations/">Locations</a></li>
                </ul>
            </FooterDiv>
        </ThemeProvider>
    )
}

export default Footer
