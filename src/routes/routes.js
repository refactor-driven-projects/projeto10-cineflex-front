export const pages = {
    signin: '/signin',
    signup: '/signup',
    homepage: '/',
}

const API_URL = import.meta.env.VITE_API_URL;

export const requisitions = {
    signIn: API_URL + '/login',
    signUp: API_URL + '/register',
    getMovies: API_URL + '/movies/listbydate',
}
 


