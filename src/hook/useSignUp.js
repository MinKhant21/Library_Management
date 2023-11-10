import React, { useState } from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase'
export default function useSignUp() {
  
    let [error , setError] = useState(null)
    let [loading , setLoading] = useState(false)
    let SignUp = async (email,password) => {
        try {
            setLoading(true)
            let res = await  createUserWithEmailAndPassword(auth,email,password)
            setLoading(false)
            setError('')
            console.log(res)
            return res.user
        } catch (e) {
            setLoading(true)
            setError(e.message)
        }

    }
    return {error , loading , SignUp}
}
