import axios from 'axios'

const instance = axios.create({
    baseURL: "https://next-mern.herokuapp.com/"
})

export default instance