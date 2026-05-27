import { useCallback, useEffect, useState } from "react"

export default function useCopyToClickboard(text: string) {
    const [isCopied, setIsCopied] = useState(false)

    const copyToClipboard = useCallback(
        async () => {
            try {
                await navigator.clipboard.writeText(text)
                setIsCopied(true)
            } catch (err) {
                setIsCopied(false)
            }
        }, [text]
    )

    useEffect(() => { setIsCopied(false) }, [text])

    return { isCopied, copyToClipboard }
}