import React from 'react'
import SignUp from './signUp'
import LoginLink from './loginLink'
import AppStore from './appStore'
import Styled, { ThemeProvider } from 'styled-components'
import styles from '../styles/globalStyles'

const SignUpMainDiv = Styled.div`
    margin: 48px auto 0 auto;
    width: 350px;
`

const SignUpMain = () => {
    return (
        <ThemeProvider theme={styles}>
            <SignUpMainDiv>
                <SignUp />
                <LoginLink />
                <AppStore />
            </SignUpMainDiv>
        </ThemeProvider>
    )
}

export default SignUpMain
