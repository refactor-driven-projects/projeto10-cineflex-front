export const pages = {
    signin: '/',
}

const API_URL = import.meta.env.VITE_API_URL;

export const requisitions = {
    signIn: API_URL + '/login',
}
