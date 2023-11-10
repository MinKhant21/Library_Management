import React, { useState } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase'
export default function useSignIn() {
  
    let [error , setError] = useState(null)
    let [loading , setLoading] = useState(false)
    let SignIn = async (email,password) => {
        try {
            setLoading(true)
            let res = await  signInWithEmailAndPassword(auth,email,password)
            setLoading(false)
            setError('')
            console.log(res)
            return res.user
        } catch (e) {
            setLoading(true)
            setError(e.message)
        }

    }
    return {error , loading , SignIn}
}
