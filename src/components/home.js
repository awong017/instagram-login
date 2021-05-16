import React, { useContext } from 'react'
import Context from '../context'
import Styled, { ThemeProvider } from 'styled-components'
import styles from '../styles/globalStyles'

const HomeDiv = Styled.div`
    margin: 128px auto 0 auto;
    border: 1px solid black;
    width: 350px;
    text-align: center;

    ul {
        padding: 0;
        list-style: none;
    }
`

const Home = () => {
    const { currentUser, handleSignOut } = useContext(Context)
    const { email, firstname, lastname, username, password } = currentUser

    return (
        <ThemeProvider theme={styles}>
            <HomeDiv>
                <ul>
                    <li>Email: {email}</li>
                    <li>Username: {username}</li>
                    <li>Full name: {firstname} {lastname}</li>
                    <li>Password: {password}</li>
                </ul>
                <button onClick={() => handleSignOut()}>Sign Out</button>
            </HomeDiv>
        </ThemeProvider>
    )
}

export default Home
