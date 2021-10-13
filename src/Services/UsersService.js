import axios from 'axios';

export default class UsersService{

    obtenerUsuarios(){
        return axios.get("/users").then(response => response.data).catch(error => {console.error(error.response)});
    }

    obtenerDatosCovid(){
        let corsAnywhere = "https://cors-anywhere.herokuapp.com/";
        return axios.get(corsAnywhere+"https://api.covidtracking.com/v1/us/current.json").then(response => response.data).catch(error => {console.error(error.response)});
    }

    
}