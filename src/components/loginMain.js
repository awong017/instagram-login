import React, { useContext, useEffect } from 'react'
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
`

const LoginMain = () => {
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
            <LoginMainDiv>
                <Login />
                <SignUpLink />
                <AppStore />
            </LoginMainDiv>
        </ThemeProvider>
    )
}

export default LoginMain
