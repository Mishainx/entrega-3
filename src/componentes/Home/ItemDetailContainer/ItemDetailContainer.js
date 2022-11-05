import '../ItemDetailContainer/ItemDetailContainer.scss'
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import { useState, useEffect, useContext } from "react";
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../../context/CartContext';
import{doc,getDoc, getFirestore} from 'firebase/firestore';

function ItemDetailContainer(){
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [itemCount,setItemCount] = useState()
    const {addItem} = useContext(CartContext)
    
    useEffect(() => {
      const db = getFirestore ()

      const queryDoc = doc(db, "ItemCollection", id);
      getDoc(queryDoc).then((snapshot)=>{
        if(snapshot.exists()){
          setProduct({id:snapshot.id,...snapshot.data()})
        }
      });
    }, [id]);


    function getData(data,subtotal){
        setItemCount(data)
      if(data>0){
        addItem(product.id,product.name,product.price,data,product.img,subtotal)}
    }


    return (
      <div className="ItemDetailContainer">  
        <div className="ItemDetailContainer2">
      <Item 
         name={product.name}
         img={product.img}
         price={product.price}
         id={product.id}
         stock={product.stock}
         category={product.category}
         description={product.description} 
          />
      <ItemCount getData={getData} stock={product.stock}/>
    </div>
 </div>
 );
  };
export default ItemDetailContainer;