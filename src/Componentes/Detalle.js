import {useLoginContext} from '../LoginContext';

function Detalle(){
    
    const user = useLoginContext();
    let resultado = null;
    if(user){
        resultado = (
            <div>
            <h3> Nombre: {user.nombre} </h3>
            <h3> Email: { user.email} </h3>
        </div>
         );
        
    }

    return resultado;
}

export default Detalle;