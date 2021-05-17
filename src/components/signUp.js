import React, { useState, useContext } from 'react'
import Context from '../context'
import Styled, { ThemeProvider } from 'styled-components'
import globalStyles from '../styles/globalStyles'
import heading from '../images/heading-185.png'
import facebookIcon from '../images/icon-facebook2-18.png'

const SignUpDiv = Styled.div`
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

    .alt-login {
        text-align: center;
    
        .greeting {
            margin: 0 auto 10px auto;
            width: 268px;
            font-weight:600;
            font-size: 17px;
            color: ${(props) => props.theme.greeting};
        }

        .facebook {
            display: flex;
            justify-content: center;
            margin: 16px auto 0 auto;
            border: none;
            border-radius: 3px;
            width: 266px;
            height: 30px;
            background-color: ${(props) => props.theme.signUp};
            font-weight: 600;
            font-size: 14px;
            color: white;
            
            &:hover {
                cursor: pointer;
            }

            img {
                margin: auto 8px auto 0;
                height: 18px;
            }

            div {
                margin-top: auto;
                margin-bottom: auto;
            }
        }
    }

    .button-enabled {
        margin-top: 8px;
        border: none;
        border-radius: 3px;
        padding: 5px 9px;
        width: 266px;
        height: 30px;
        background-color: ${(props) => props.theme.signUp};
        font-weight: 600;
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
        background-color: ${(props) => props.theme.signUp};
        opacity: 0.25;
        font-weight: bold;
        color: white;
    }

    .signUp-info {
        text-align: center;

        .signUp-input {
            margin-bottom: 8px;
            border: 1px solid ${(props) => props.theme.border};
            border-radius: 3px;
            padding: 9px 8px 7px 8px;
            width: 250px;
            height: 20px;
            background-color: ${(props) => props.theme.input};
            font-size: 11px;

            &:focus {
                outline: none;
            }
        }

        .policy {
            margin: 10px auto 10px auto;
            width: 266px;
            font-size: 12px;
            color: ${(props) => props.theme.policy};
    
            a {
                text-decoration: none;
                font-weight: 600;
                color: ${(props) => props.theme.policy};
            }
        }

        .error {
            margin: 16px auto 0 auto;
            width: 268px;
            text-align: center;
            font-size: 14px;
            color: red;
        }
    }
    
    .signUp-break {
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

    @media screen and (max-width: 440px) {
        margin: 24px auto 10px auto;
        border: none;
    }
`

const SignUp = () => {
    const { signUpError, handleSignUp } = useContext(Context)

    const [ signedInUser, setSignedInUser ] = useState(
        {
            contact: "",
            firstname: "",
            lastname: "",
            username: "", 
            password: ""
        }
    )

    const { contact, firstname, lastname, username, password } = signedInUser

    const disabledButton = () => {
        if (contact && firstname && username && password) {
            return false
        }
        else {
            return true
        }
    }

    const buttonClass = () => {
        if (contact && firstname && username && password) {
            return "button-enabled"
        }
        else {
            return "button-disabled"
        }
    }

    return (
        <ThemeProvider theme={globalStyles}>
            <SignUpDiv>
                <form onSubmit={(e) => handleSignUp(e, contact, firstname, lastname, username, password)}>
                    <legend><img className="heading" src={heading} alt="heading"/></legend>
                    <fieldset className="alt-login">
                        <div className="greeting">Sign up to see photos and videos from your friends.</div>
                        <div className="facebook">
                            <img className="icon-fb" src={facebookIcon} alt="icon"/>
                            <div>Log in with Facebook</div>
                        </div>
                    </fieldset>
                    <div className="signUp-break">
                        <div className="break-line"/>
                        <p>OR</p>
                        <div className="break-line"/>
                    </div>
                    <fieldset className="signUp-info">
                        <input 
                            className="signUp-input" 
                            type="text" 
                            placeholder="Mobile Number or Email"
                            onChange={(e) => setSignedInUser(
                                {
                                    contact: e.target.value.replace(/\s/g, ''),
                                    firstname: firstname,
                                    lastname: lastname,
                                    username: username,
                                    password: password
                                }
                            )}
                        />
                        <input 
                            className ="signUp-input" 
                            type="text" 
                            placeholder="Full Name"
                            onChange={(e) => setSignedInUser(
                                {
                                    contact: contact,
                                    firstname: e.target.value.split(" ")[0],
                                    lastname: e.target.value.split(" ")[1],
                                    username: username,
                                    password: password
                                }
                            )}
                        />
                        <input 
                            className="signUp-input" 
                            type="text" 
                            placeholder="Username"
                            onChange={(e) => setSignedInUser(
                                {
                                    contact: contact,
                                    firstname: firstname,
                                    lastname: lastname,
                                    username: e.target.value.replace(/\s/g, ''),
                                    password: password
                                }
                            )}
                        />
                        <input 
                            className ="signUp-input" 
                            type="password" 
                            placeholder="Password"
                            onChange={(e) => setSignedInUser(
                                {
                                    contact: contact,
                                    firstname: firstname,
                                    lastname: lastname,
                                    username: username,
                                    password: e.target.value.replace(/\s/g, '')
                                }
                            )}
                        />
                        <button className={buttonClass()} type="submit" disabled={disabledButton()}>Sign Up</button>
                        <div className="error">{signUpError.error}</div>
                        <div className="policy">
                            <p>By signing up, you agree to our <a href="https://help.instagram.com/581066165581870">Terms</a>, <a href="https://help.instagram.com/519522125107875">Data Policy</a>, and <a href="https://www.instagram.com/legal/cookies/">Cookies Policy</a>.</p>
                        </div>
                    </fieldset>
                </form>
            </SignUpDiv>
        </ThemeProvider>
    )
}

export default SignUp

