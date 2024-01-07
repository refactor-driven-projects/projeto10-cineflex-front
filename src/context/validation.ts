export function validateUser(user, setUser) {
    if ((!user || user === 0) && localStorage.user) {
        setUser({ ...JSON.parse(localStorage.user) });
    }
}

export function headersAuth(token) {
    if (!token && localStorage.user) {
        const user = JSON.parse(localStorage.user);
        token = user.token;
    }

    return {headers: {
        'Authorization': `Bearer ${token}`
    }}
}