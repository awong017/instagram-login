import React, { useState, useContext } from 'react'
import Context from '../context'
import Styled, { ThemeProvider } from 'styled-components'
import globalStyles from '../styles/globalStyles'
import heading from '../images/heading-185.png'
import facebookIcon from '../images/icon-facebook-18.png'

const LoginDiv = Styled.div`
    margin: 48px auto 10px auto;
    border: 1px solid ${(props) => props.theme.border};
    padding-top: 10px;
    padding-bottom: 10px;
    width: 350px;
    min-height: 380px;
    background-color: white;

    legend {
        margin-top: 22px;
        margin-bottom: 12px;
        text-align: center;
    }

    fieldset {
        border: none;
    }

    .login-info {
        text-align: center;

        .login-input {
            margin-bottom: 8px;
            border: 1px solid ${(props) => props.theme.border};
            border-radius: 3px;
            padding: 9px 8px 7px 8px;
            width: 250px;
            height: 20px;
            background-color: ${(props) => props.theme.input};
            font-weight: 400;
            font-size: 11px;

            &:focus {
                outline: none;
            }
        }

        .button-enabled {
            margin-top: 8px;
            border: none;
            border-radius: 3px;
            padding: 5px 9px;
            width: 266px;
            height: 30px;
            background-color: ${(props) => props.theme.login};
            font-weight: 700;
            color: white;

            &:hover {
                cursor: pointer;
            }
        }

        .button-disabled {
            margin-top: 8px;
            border: none;
            border-radius: 3px;
            padding: 5px 9px;
            width: 266px;
            height: 30px;
            background-color: ${(props) => props.theme.login};
            opacity: 0.25;
            font-weight: 700;
            color: white;
        }
    }
    
    .login-break {
        display: flex;
        justify-content: space-between;
        margin-right: auto;
        margin-left: auto;
        width: 266px;
        font-weight: 600;
        font-size: 12px;
        color: ${(props) => props.theme.or};

        .break-line {
            margin-top: 20px;
            border-top: 1px solid #dbdbdb;
            width: 107px;
        }
    }

    .login-alt {
        margin-top: 8px;

        .facebook {
            display: flex;
            justify-content: center;
            margin-left: auto;
            margin-right: auto;
            width: 266px;
            font-weight: 600;
            font-size: 14px;
            color: ${(props) => props.theme.facebook};

            &:hover {
                cursor: pointer;
            }

            img {
                margin-right: 8px;
            }
        }

        .error {
            margin: 16px auto 0 auto;
            width: 268px;
            text-align: center;
            font-size: 14px;
            color: red;
        }

        .forgot-password {
            margin-top: 16px;
            text-align: center;
            font-size: 12px;
            color: ${(props) => props.theme.forgotPassword};

            &:hover {
                cursor: pointer;
            }
        }
    }

    @media screen and (max-width: 440px) {
        margin: 24px auto 10px auto;
        border: none;
    }
`

const Login = () => {
    const { loginError, handleLogin } = useContext(Context)

    const [ loggedInUser, setLoggedInUser ] = useState({username: "", password: ""})

    const { username, password } = loggedInUser

    const disabledButton = () => {
        if (username && password.length > 6) {
            return false
        }
        else {
            return true
        }
    }

    const buttonClass = () => {
        if (username && password.length > 6) {
            return "button-enabled"
        }
        else {
            return "button-disabled"
        }
    }

    return (
        <ThemeProvider theme={globalStyles}>
            <LoginDiv>
                <form onSubmit={(e) => handleLogin(e, username.toLowerCase(), password)}>
                    <legend><img className="heading" src={heading} alt="heading"/></legend>
                    <fieldset className="login-info">
                        <input 
                            className="login-input" 
                            type="text" 
                            placeholder="Phone number, username, or email"
                            onChange={(e) => setLoggedInUser({username: e.target.value, password: password})}
                        />
                        <input 
                            className ="login-input" 
                            type="password" 
                            placeholder="Password"
                            onChange={(e) => setLoggedInUser({username: username, password: e.target.value})}
                        />
                        <button className={buttonClass()} type="submit" disabled={disabledButton()}>Log In</button>
                    </fieldset>
                    <div className="login-break">
                        <div className="break-line"/>
                        <p>OR</p>
                        <div className="break-line"/>
                    </div>
                    <fieldset className="login-alt">
                        <div className="facebook">
                            <img className="icon-fb" src={facebookIcon} alt="icon"/>
                            <div>Log in with Facebook</div>
                        </div>
                        <div className="error">{loginError.error}</div>
                        <p className="forgot-password">Forgot password?</p>
                    </fieldset>
                </form>
            </LoginDiv>
        </ThemeProvider>
    )
}

export default Login
