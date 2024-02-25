import React, { useEffect, useState } from 'react'
import { breakBadApi } from '../api/breakBadApi'

export const Quote = () => {
    const [quote, setQuote] = useState({ author: '' });

    useEffect(() => {
        const getQuote = async () => {
            const { data } = await breakBadApi.get()
            const quoteResponse = data[0]; // Assuming the API returns an array of quotes and you want to select the first one
            setQuote({ author: quoteResponse.quote });
        }

        getQuote();
    }, [])

    return (
        <div>{quote.author}</div>
    )
}
