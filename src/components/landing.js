import React from 'react'
import LoginMain from './loginMain'
import Styled, { ThemeProvider } from 'styled-components'
import styles from '../styles/globalStyles'
import iPhone from '../images/iPhone.PNG'

const LandingDiv = Styled.div`
    display: flex;
    justify-content: center;

    .iPhone {
        margin-top: 112px;
        margin-right: 32px;
        height: 586px;
    }

    @media screen and (max-width: 800px) {
        .iPhone {
            display: none;
        }
    }
`

const Landing = () => {
    return (
        <ThemeProvider theme={styles}>
            <LandingDiv>
                <img className="iPhone" src={iPhone} alt="iPhone" />
                <div className="login-main">
                    <LoginMain />
                </div>
            </LandingDiv>
        </ThemeProvider>
    )
}

export default Landing
