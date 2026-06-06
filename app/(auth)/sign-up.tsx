import Sav from '@/ui/sav'
import { Link } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

const SignUp = () => {
    return (
        <Sav>
            <Text>sign-up</Text>
            <Link href="/(auth)/sign-in" className="">Sign In</Link>
        </Sav>
    )
}

export default SignUp