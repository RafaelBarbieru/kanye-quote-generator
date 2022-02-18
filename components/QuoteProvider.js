import { createContext, useState } from 'react'

export const QuoteContext = createContext()

export default function QuoteProvider({ children }) {
    const [quote, setQuote] = useState('')

    return <QuoteContext.Provider value={[quote, setQuote]}>{children}</QuoteContext.Provider>
}