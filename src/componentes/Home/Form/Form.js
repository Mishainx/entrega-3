import '../Form/Form.scss'
import {addDoc,getFirestore,collection,writeBatch,doc,updateDoc,increment} from "firebase/firestore"
import { useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContext'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'



export function Form(){

  const {cartList,totalAmount} = useContext(CartContext)
  const buyDate = new Date()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [telephone,setTelephone] = useState("")


    const sendOrder=()=>{
      const order = {
        buyer:{name:`${name}`,phone:`${telephone}`, email:`${email}`},
        buyList: {...cartList,date:`${buyDate}`, total:totalAmount()}
      };

      const lala = cartList.forEach((item)=> {
        return(item.id,item.quantity)})


      const db = getFirestore();
      const ordersCollection = collection(db, "ordersCollection");

      addDoc(ordersCollection, order).then(({id})=>Swal.fire({ title: 'Compra realizada con éxito',
      html: `Su número de orden es ${id}`,
      icon: 'success',
      confirmButtonText: 'Ok'}));

      
    /*  const updateItemCollection = () =>{

        const db = getFirestore();
        
        const batch = writeBatch(db)
        const stockUpdate1 = doc(db,"ItemCollection","1")

        batch.update(stockUpdate1, {stock: 10});
        
        batch.commit();
        tutu()

      }

      updateItemCollection()*/

      cartList.map(async (item) => {
        const itemRef = doc(db, "ItemCollection", item.id);
        await updateDoc(itemRef, {
          // Utilizamos la función propia de firestore increment para actualizar la cantidad de stock
          stock: increment(-item.quantity)
        });
      })
    }


    const tutu=(e)=> e.preventDefault()

    return(
        <div>
            <h2>Datos del comprador</h2>
            <div className='form'>
            <input type={'text'} placeholder={"Nombre y Apellido"} name="name" value={name} onChange={e=>setName(e.target.value)}></input>
            <input type={'email'} placeholder={"E-mail"} name="email" value={email} onChange={e=>setEmail(e.target.value)}></input>
            <input type={'tel'} placeholder={"Teléfono"} name="telephone" value={telephone} onChange={e=>setTelephone(e.target.value)}></input>
            <button onClick={()=>sendOrder()}>Enviar</button>
            

            </div>

        </div>

    )
}

