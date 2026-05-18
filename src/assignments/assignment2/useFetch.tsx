import { useState, useEffect } from "react";

function useFetch<T>(fetchFunction: () => Promise<T>) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetchFunction();
                setData(response);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Something went wrong")
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [fetchFunction])

    return { data, isLoading, error }
}

export default useFetch