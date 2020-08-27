import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {registerUser} from '../../../_actions/user_action'
import {withRouter} from 'react-router-dom'

function RegisterPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(Password !== ConfirmPassword) {
            return alert("Confirm Password must match with Password")
        }
        
        let body = {
            email: Email,
            name: Name,
            password: Password
        }

        dispatch(registerUser(body))
        .then(response =>{
            if(response.payload.success) {
                props.history.push('/login')
            } else {
                alert("Something happened while registering. Please try again later.")
            }
        })
    }

    return (
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', width:'100%', height:'100vh'}}>
            <form style={{display:'flex', flexDirection:'column'}}
            onSubmit={onSubmitHandler}>
                <lable>Email</lable>
                <input type="email" value={Email} onChange={onEmailHandler} />

                <lable>Name</lable>
                <input type="text" value={Name} onChange={onNameHandler} />

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage)
