import '../Form/Form.scss'
import {addDoc,getFirestore,collection} from "firebase/firestore"

export function Form(){
    const sendOrder=()=>{
      const order = {
        buyer:{name:"juan",phone:"123132132", email:"asd@asd.com.ar"}
      };

      const db = getFirestore();
      const ordersCollection = collection(db, "ordersCollection");

      addDoc(ordersCollection, order).then(({id})=>console.log(id));
    }

    const tutu=(e)=> e.preventDefault()

    return(
        <div>
            <h2>Datos del comprador</h2>
            <div className='form'>
            <input type={'text'} placeholder={"Nombre y Apellido"}></input>
            <input type={'email'} placeholder={"E-mail"}></input>
            <input type={'tel'} placeholder={"Teléfono"}></input>
            <button onClick={()=>sendOrder()}>Enviar</button>
            

            </div>

        </div>

    )
}

