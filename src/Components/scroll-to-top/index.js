import { useEffect } from 'react'

export default function ScrollToTop() {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return null
}