import React from 'react'
import { useMonetizationState } from 'react-web-monetization'

const MyMessage = props => {
    const monetization = useMonetizationState()

    return <p>
        {monetization.state === 'stopped' && 'Stopped'}
        {monetization.state === 'pending' && 'Loading...'}
        {monetization.state === 'started' && 'Thanks for supporting our site!'}
        {!monetization.state && 'Sign up for Coil to support our site!'}
    </p>
}

export default MyMessage