let token = 'expired-token';

async function refreshToken() {
    token = 'new-token'
}

async function apiFetch(url: string, options: RequestInit = {}) {
    let response = await fetch(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })

    if (response.status === 401) {
        await refreshToken();
        response = await fetch(url, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
    }
    return response.json()
}

export default apiFetch;