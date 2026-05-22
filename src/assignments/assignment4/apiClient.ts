let token = 'expired-token';

async function refreshToken() {
    token = 'new-token'
}

const getHeaders = () => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
});

async function apiFetch(url: string, options: RequestInit = {}) {
    let response = await fetch(url, {
        ...options,
        headers: getHeaders()
    })

    if (response.status === 401) {
        await refreshToken();
        response = await fetch(url, {
            ...options,
            headers: getHeaders()
        })
    }
    return response.json()
}

export default apiFetch;