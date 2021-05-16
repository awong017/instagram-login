import React from 'react'
import Styled, { ThemeProvider } from 'styled-components'
import styles from '../styles/globalStyles'
import appStore from '../images/icon-app-store-134.png'
import googlePlay from '../images/icon-google-play-134.png'

const AppStoreDiv = Styled.div`
    margin: 16px auto 0 auto;
    width: 350px;
    font-size: 14px;

    p {
        text-align: center;
    }

    .app-store-links {
        display: flex;
        justify-content: center;
        margin-top: 16px;

        .app-store {
            margin-right: 4px;
        }

        .google-play {
            margin-left: 4px;
        }
    }
`

const AppStore = () => {
    return (
        <ThemeProvider theme={styles}>
            <AppStoreDiv>
                <p>Get the app.</p>
                <div className="app-store-links">
                    <div className="app-store">
                        <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
                            <img src={appStore} alt="app-store" />
                        </a>
                    </div>
                    <div className="google-play">
                        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=A6C14ECD-207C-4AAC-8B32-C7BDFA77640F&utm_content=lo&utm_medium=badge">
                            <img src={googlePlay} alt="google-play" />
                        </a>
                    </div>
                </div>
            </AppStoreDiv>
        </ThemeProvider>
    )
}

export default AppStore
