import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../context'
import Styled, { ThemeProvider } from 'styled-components'
import styles from '../styles/globalStyles'

const LoginLinkDiv = Styled.div`
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
        color: ${(props) => props.theme.signUp}
    }

    @media screen and (max-width: 440px) {
        border: none;
    }
`

const LoginLink = () => {
    const { setUsers, setSignUpError } = useContext(Context)

    return (
        <ThemeProvider theme={styles}>
            <LoginLinkDiv>
                <div>Have an account?</div>
                <Link to={"/login"} onClick={() => {setSignUpError({error: ""}); setUsers([])}}>Log in</Link>
            </LoginLinkDiv>
        </ThemeProvider>
    )
}

export default LoginLink
