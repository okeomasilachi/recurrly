import Sav from '@/ui/sav'
import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const SignIn = () => {
    return (
        <Sav>
            <Text>sign-in</Text>
            <Link href="/(auth)/sign-up" className="">Sign Up</Link>
            <Link href="/" className="">Home</Link>
        </Sav>
    )
}

export default SignIn