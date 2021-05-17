import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../context'
import Styled, { ThemeProvider } from 'styled-components'
import styles from '../styles/globalStyles'

const SignUpLinkDiv = Styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto 10px auto;
    border: 1px solid ${(props) => props.theme.border};
    padding: 10px 0px;
    width: 348px;
    height: 48px;
    background-color: white;
    font-size: 14px;

    div {
        margin-top: auto;
        margin-bottom: auto;
    }

    a {
        margin: auto 0 auto 4px;
        text-decoration: none;
        font-weight: 600;
        color: ${(props) => props.theme.signUp}
    }

    @media screen and (max-width: 440px) {
        border: none;
    }
`

const SignUpLink = () => {
    const { setUsers, setLoginError } = useContext(Context)

    return (
        <ThemeProvider theme={styles}>
            <SignUpLinkDiv>
                <div>Don't have an account?</div>
                <Link to={"/signUp"} onClick={() => {setLoginError({error: ""}); setUsers([])}}>Sign up</Link>
            </SignUpLinkDiv>
        </ThemeProvider>
    )
}

export default SignUpLink
