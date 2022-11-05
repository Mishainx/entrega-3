import React, { cloneElement, useEffect, useState } from 'react';
import '../ItemListContainer/ItemListContainer.scss'
import ItemList from '../ItemList/ItemList';
import{collection,getDocs,getFirestore,query,where} from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);
    const {category} = useParams()

    useEffect(() => {
      const db = getFirestore();
      const queryCollection = collection(db, 'ItemCollection');
      if(category) {
          const queryFilter = query(queryCollection, where('category', '==', category));
          getDocs(queryFilter).then(res => setProductList(res.docs.map(product => ({id: product.id, ...product.data()}))))
      } else {
          getDocs(queryCollection).then(res => setProductList(res.docs.map(product => ({id: product.id, ...product.data()}))))
      }
  }, [category]);
  
    return (
      <div className="itemListContainer">
        {<ItemList productList={productList}/>}
      </div>
    );
  };
  
export default ItemListContainer;