import React, { useContext, useEffect } from 'react'
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
`

const SignUpMain = () => {
    const { users, setUsers } = useContext(Context)

    useEffect(() => {
        let isSubscribed = true;
        fetch(`${Config.API_ENDPOINT}/api/users`)
            .then(res => (isSubscribed ? res.json().then(resJson => setUsers([...users, ...resJson])) : null))
            .catch(error => (isSubscribed ? console.log(error.toString()) : null))
        return () => isSubscribed = false 
    }, []) 

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
