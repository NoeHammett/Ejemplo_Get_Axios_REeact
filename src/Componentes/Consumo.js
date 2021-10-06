import React,{useState, useEffect} from 'react'
import UsersService from '../Services/UsersService.js';

const Consumo = () => {

    const [users, setUsers] = useState({});
    
    //Implementación del SERVICE
    const usersService = new UsersService();
    const obtenerUsuarios =()=>{
        usersService.obtenerUsuarios().then(data => setUsers(data));
        console.log("Users",users);
    }
     useEffect(() => {
        obtenerUsuarios();
    },[]);

    return (
        <div>
            <h1>Consumo </h1>
            <div> 
                <h3>Usuario 1</h3>
                <h3> Nombre: {(users[0] === undefined ? ' ' : users[0].name)} </h3>
                <h3> Username: {(users[0] === undefined ? ' ' : users[0].username)}</h3>
                <h3> Email: {(users[0] === undefined ? ' ' : users[0].email)}</h3>
                <h3> City: {(users[0] === undefined ? ' ' : users[0].address.city)}</h3>
            </div>
            <br/>
            <div> 
                <h3>Usuario 2</h3>
                <h3> Nombre: {(users[1] === undefined ? ' ' : users[1].name)} </h3>
                <h3> Username: {(users[1] === undefined ? ' ' : users[1].username)}</h3>
                <h3> Email: {(users[1] === undefined ? ' ' : users[1].email)}</h3>
                <h3> City: {(users[1] === undefined ? ' ' : users[1].address.city)}</h3>
            </div>
        </div>
    )
}

export default Consumo;