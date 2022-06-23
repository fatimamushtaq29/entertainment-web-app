import axios from "axios";

const baseUrl = '/api/users';

async function register(newUser) {
    const response = await axios.post(baseUrl, newUser)
    return response.data
}

async function login(user) {
    const response = await axios.post(`${baseUrl}/login`, user)
    return response.data
}

async function currentUser() {
    const currentToken = localStorage.getItem('token')
    const config = {headers: {Authorization: currentToken}}
    const response = await axios.get(`${baseUrl}/user`, config)
    return response.data
}

export {register, login, currentUser}