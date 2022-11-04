import React, { useEffect, useState } from 'react';
import '../ItemListContainer/ItemListContainer.scss'
import ItemList from '../ItemList/ItemList';
import{collection,getDocs,getFirestore} from 'firebase/firestore';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(productList)

    useEffect(() => {
      const db = getFirestore();

      const itemsCollection = collection(db,"ItemCollection");
      getDocs(itemsCollection).then((snapshot)=>{
        if(snapshot.size===0){
          console.log("No results")
        }
        setProductList(snapshot.docs.map((doc)=>({...doc.data()})))
        console.log(snapshot.docs.map((doc)=>({...doc.data()})))
        console.log(productList)
      });
    }, []);
  
    return (
      <div className="itemListContainer">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          
          <ItemList productList={productList}/>
        )}
      </div>
    );
  };
  
export default ItemListContainer;