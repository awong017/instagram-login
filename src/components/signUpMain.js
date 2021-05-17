import React, { useContext, useEffect, useRef } from 'react'
import Context from '../context'
import Config from '../config'
import SignUp from './signUp'
import LoginLink from './loginLink'
import AppStore from './appStore'
import Styled, { ThemeProvider } from 'styled-components'
import styles from '../styles/globalStyles'

const SignUpMainDiv = Styled.div`
    margin: 48px auto 0 auto;
    width: 350px;

    @media screen and (max-width: 440px) {
        margin-top: 24px;
    }
`

const SignUpMain = () => {
    const { users, setUsers } = useContext(Context)
    
    const hasFetchedData = useRef(false)

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
            <SignUpMainDiv>
                <SignUp />
                <LoginLink />
                <AppStore />
            </SignUpMainDiv>
        </ThemeProvider>
    )
}

export default SignUpMain
