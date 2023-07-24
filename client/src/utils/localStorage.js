export const getToken = () => localStorage.getItem('token')

export const saveToken = (token) => localStorage.setItem('token', token)