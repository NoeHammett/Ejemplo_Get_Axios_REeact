import { useState } from "react";
import { useLoginChangeContext } from "../LoginContext"; 

function Formulario(){

    const changeUser = useLoginChangeContext();

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit  = (e)=>{
        e.preventDefault();
        changeUser({nombre, email});
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label>Nombre</label>
                    <input type="text" onChange={(e)=>setNombre(e.target.value)}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <input type="submit" value="Cambiar Nombre"></input>
            </div>
        </form>
    );

}

export default Formulario;