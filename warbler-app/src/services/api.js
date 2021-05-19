import axios from 'axios';

export default function apiCall(method, path, data){
    return new Promise((resolve, reject) => {
        return axios[method](path, data)
        .then(res => resolve(res.data))
        .catch(err => {
            return reject(err.response.data.error)
        })
    })
    
}