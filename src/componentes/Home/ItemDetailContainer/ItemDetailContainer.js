import '../ItemDetailContainer/ItemDetailContainer.scss'
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import { useState, useEffect, useContext } from "react";
import {getProductById} from '../../../screens/Home/Products'
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../../context/CartContext';
import{collection,getDocs,getFirestore} from 'firebase/firestore';



function ItemDetailContainer(){
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [itemCount,setItemCount] = useState()
    const {addItem} = useContext(CartContext)
    
    useEffect(() => {
      const db = getFirestore();

      const itemsCollection = collection(db,"ItemCollection");
      getDocs(itemsCollection).then((snapshot)=>{
       setProduct(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})))
      });

    }, []);

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