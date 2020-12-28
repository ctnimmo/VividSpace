import React from 'react'
import { useMonetizationCounter } from 'react-web-monetization'

const MyCounter = props => {
    const monetization = useMonetizationCounter()

    return <p>
        {(monetization.totalAmount / (10 ** monetization.assetScale)).toFixed(monetization.assetScale)}
        {monetization.assetCode}
    </p>
}

export default MyCounter