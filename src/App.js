import React, { useState } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Context from './context'
import Config from './config'
import uuid from 'uuid/dist/v4'
import Landing from './components/landing'
import Home from './components/home'
import SignUpMain from './components/signUpMain'
import LoginMain from './components/loginMain'
import Footer from './components/footer'
import Styled from 'styled-components'

const AppDiv = Styled.div`
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
`

const renderRoutes = () => {
  return (
    <>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/home" component={Home}/>
      <Route path="/signUp" component={SignUpMain} />
      <Route path="/login" component={LoginMain} />
      <Route path="/" component={Footer} />
    </>
  )
}

const App = (props) => {
  const [ users, setUsers ] = useState([])

  const [ loginError, setLoginError ] = useState({error: ""})

  const [ signUpError, setSignUpError ] = useState({error: ""})
  
  const [ currentUser, setCurrentUser ] = useState()

  // Method for logging in

  const handleLogin = (e, name, password) => {
    e.preventDefault()

    let userAccount = {};

    if (
      users.some(user => user.username === name) === false &&
      users.some(user => user.email === name) === false &&
      users.some(user => user.phone === parseInt(name.replace(/[\W]/g, ""))) === false
    ) {
      setLoginError({error: "The username you entered doesn't belong to an account. Please check your username and try again."})
    }
    else {
      if (name.replace(/[\W]/g, "").length === name.split("").map(item => parseInt(item)).filter(Number.isInteger).length) {
        userAccount = users.find(user => user.phone === parseInt(name.replace(/[\W]/g, "")))
      }
      else if (name.includes("@")) {
        userAccount = users.find(user => user.email === name)
      }
      else {
        userAccount = users.find(user => user.username === name)
      }
      if (userAccount.password !== password) {
        setLoginError({error: "Sorry, your password was incorrect. Please double-check your password."})
      }
      else {
        setLoginError({error: ""})
        setCurrentUser(
          {
            id: userAccount.id,
            email: userAccount.email,
            username: userAccount.username,
            firstname: userAccount.firstname,
            lastname: userAccount.lastname,
            password: userAccount.password,
            phone: userAccount.phone
          }
        )
      props.history.push("/home")
      }
    }
  }

  // Method for signing up

  const handleSignUp = (e, contact, firstname, lastname, username, password) => {
    e.preventDefault()

    if ((!contact.includes("@") && !contact.includes(".com") && contact.replace(/[\W]/g, "").length !== contact.split("").map(item => parseInt(item)).filter(Number.isInteger).length) || 
       (contact.includes("@") && !contact.includes(".com")) || (!contact.includes("@") && contact.includes(".com"))) {
        setSignUpError({error: "Please enter a valid Mobile Number or Email."})
      }
    else {
      if (users.some(user => user.email === contact) === true || users.some(user => user.phone === parseInt(contact.replace(/[\W]/g, ""))) === true) {
        setSignUpError({error: "Account has already been created."})
      }
      else if (lastname === undefined) {
        setSignUpError({error: "Please provide full name."})
      } 
      else if (users.some(user => user.username === username) === true) {
        setSignUpError({error: "This username isn't available. Please try another."})
      }
      else if (password.length < 6) {
        setSignUpError({error: "Password must be at least 6 characters long"})
      }
      else {
        setSignUpError({error: ""})
        if (contact.includes("@")) {
          const newUser = {
            id: uuid(),
            email: contact.toLowerCase(),
            username: username.toLowerCase(),
            firstname: firstname.toLowerCase(),
            lastname: lastname.toLowerCase(),
            password: password,
            phone: ""
          }

          setUsers([newUser])

          const url = `${Config.API_ENDPOINT}/api/users`;
          const options = {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
              "Content-Type": "application/json"
            }
          }

          fetch(url, options)
            .then(res => {
              if(!res.ok) {
                throw new Error('Something went wrong, please try again later');
              }
                return res.json();
            })

          props.history.push("/")
        }
        else {
          const newUser = {
            id: uuid(),
            email: "",
            username: username,
            firstname: firstname.toLowerCase(),
            lastname: lastname.toLowerCase(),
            password: password,
            phone: contact.replace(/[\W]/g, "")
          }

          setUsers([newUser])

          const url = `${Config.API_ENDPOINT}/api/users`;
          const options = {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
              "Content-Type": "application/json"
            }
          }
  
          fetch(url, options)
            .then(res => {
              if(!res.ok) {
                throw new Error('Something went wrong, please try again later');
              }
                return res.json();
            })
            
          props.history.push("/")
        }
      }
    }
  }

  const handleSignOut = () => {
    setUsers([])
    setCurrentUser({})
    props.history.push("/")
  }

  const contextValue = {
    users: users,
    setUsers: setUsers,
    loginError: loginError,
    setLoginError: setLoginError,
    signUpError: signUpError,
    setSignUpError: setSignUpError,
    currentUser: currentUser,
    handleLogin: handleLogin,
    handleSignUp: handleSignUp,
    handleSignOut: handleSignOut
  }

  return (
    <Context.Provider value={contextValue}>
      <AppDiv>
        {renderRoutes()}
      </AppDiv>
    </Context.Provider>
  )
}

export default withRouter(App)
