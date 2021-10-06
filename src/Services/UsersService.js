import axios from 'axios';

export default class UsersService{

    obtenerUsuarios(){
        return axios.get("/users").then(response => response.data).catch(error => {console.error(error.response.request.statusText)});
    }
}