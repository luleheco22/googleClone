import React, { useState, useEffect } from 'react'

const CountryLookup = () => {

    const [country, setCountry] = useState<string>('United States')
    const API_KEY = process.env.NEXT_PUBLIC_IP_API_KEY

    useEffect(() => {
        try {
            const fetchCountry = async () => {
                const res = await fetch(`https://extreme-ip-lookup.com/json/?key=${API_KEY}`)
                const data = await res.json()
                setCountry(data.country)
            }
            fetchCountry()

        } catch (error) {
            console.log(error)
        }
    }, [API_KEY])

    return (
        <div>
            {country}
        </div>
    )
}

export default CountryLookup