import React,{useState, useEffect} from 'react'
import UsersService from '../Services/UsersService.js';

const Consumo = () => {

    const [users, setUsers] = useState({});
    const [covid, setCovid] = useState({});
    
    //Implementación del SERVICE
    const usersService = new UsersService();
    const obtenerUsuarios =()=>{
        usersService.obtenerUsuarios().then(data => setUsers(data));
    }
    const obtenerDatosCovid =()=>{
        usersService.obtenerDatosCovid().then(data =>setCovid(data));
    }
    
     useEffect(() => {
        obtenerUsuarios();
        // obtenerDatosCovid();
    },[]);
    // console.log(covid);

    return (
        <div>
            <h1>Consumo </h1>
             <div> 
                <h2>Información del covid en USA</h2>
                <h3> Muertes totales: {(covid[0] === undefined ? ' ' : covid[0].death)} </h3> 
                {/* <h3> Username: {(users[0] === undefined ? ' ' : users[0].username)}</h3>
                    <h3> Email: {(users[0] === undefined ? ' ' : users[0].email)}</h3>
                    <h3> City: {(users[0] === undefined ? ' ' : users[0].address.city)}</h3>  */}
            </div> 
            <br/>
            <div> 
                <h3>Usuario</h3>
                <h3> Nombre: {(users[1] === undefined ? ' ' : users[1].name)} </h3>
                <h3> Username: {(users[1] === undefined ? ' ' : users[1].username)}</h3>
                <h3> Email: {(users[1] === undefined ? ' ' : users[1].email)}</h3>
                <h3> City: {(users[1] === undefined ? ' ' : users[1].address.city)}</h3>
            </div>
            {/* <br />
            <div> 
                <h3>Usuario 3</h3>
                <h3> Nombre: {(users[2] === undefined ? ' ' : users[2].name)} </h3>
                <h3> Username: {(users[2] === undefined ? ' ' : users[2].username)}</h3>
                <h3> Email: {(users[2] === undefined ? ' ' : users[2].email)}</h3>
                <h3> City: {(users[2] === undefined ? ' ' : users[2].address.city)}</h3>
            </div>
            <br/>
            <div> 
                <h3>Usuario 4</h3>
                <h3> Nombre: {(users[3] === undefined ? ' ' : users[3].name)} </h3>
                <h3> Username: {(users[3] === undefined ? ' ' : users[3].username)}</h3>
                <h3> Email: {(users[3] === undefined ? ' ' : users[3].email)}</h3>
                <h3> City: {(users[3] === undefined ? ' ' : users[3].address.city)}</h3>
            </div>  */}
        </div>
    )
}

export default Consumo;