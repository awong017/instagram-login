import React from 'react'
import Login from './login'
import SignUpLink from './signUpLink'
import AppStore from './appStore'
import Styled, { ThemeProvider } from 'styled-components'
import styles from '../styles/globalStyles'

const LoginMainDiv = Styled.div`
    margin-top: 128px;
    margin-right: auto;
    margin-left: auto;
    width: 350px;
`

const LoginMain = () => {
    return (
        <ThemeProvider theme={styles}>
            <LoginMainDiv>
                <Login />
                <SignUpLink />
                <AppStore />
            </LoginMainDiv>
        </ThemeProvider>
    )
}

export default LoginMain
