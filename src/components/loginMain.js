import React, { useContext, useEffect, useRef } from 'react'
import Context from '../context'
import Config from '../config'
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

    @media screen and (max-width: 440px) {
        margin-top: 24px;
    }
`

const LoginMain = () => {
    const { users, setUsers } = useContext(Context)

    let hasFetchedData = useRef(false)

    useEffect(() => {
        if (!hasFetchedData.current) {
            fetch(`${Config}/api/users`)
                .then(res => (res.json().then(resJson => setUsers([...users, ...resJson]))))
                .catch(error => (console.log(error.toString())))
            hasFetchedData.current = true
        }
    }) 

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
