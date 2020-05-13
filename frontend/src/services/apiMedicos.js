import axios from 'axios';

const apiMedicos = axios.create({
    baseURL: 'https://medicos-progweb.herokuapp.com'
})

export default apiMedicos;