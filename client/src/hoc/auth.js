import React, { useEffect } from 'react';
import Axios from 'axios';
import {useDispatch} from 'react-redux'
import {auth} from '../_actions/user_action'
import {withRouter} from 'react-router-dom'

export default function (SpecificComponent, option, adminRoute = null) {

    //option:
    //null => anyone can enter
    //true => only logged in user can enter
    //false => logged in user cannot see

    function AuthenticationCheck(props){

        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth()).then(response => {
                if(!response.payload.isAuth){
                    //not logged in user
                    if(option) {
                        props.history.push('/login')
                    }
                } else {
                    //logged in user
                    if(adminRoute && !response.payload.isAdmin) {
                        props.history.push('/')
                    } else {
                        if(!option) {
                            props.history.push('/')
                        }
                    }
                }
            })

        }, [])
        return (
            <SpecificComponent />
        )
    }

    return AuthenticationCheck
}