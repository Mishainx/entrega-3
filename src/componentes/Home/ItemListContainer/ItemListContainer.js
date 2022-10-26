import React, { useEffect, useState } from 'react';
import '../ItemListContainer/ItemListContainer.scss'
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList';
import {data} from '../../../screens/Home/Products'

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      data
        .then((res) => setProductList(res))
        .finally(() => setLoading(false));
    }, []);
  
    return (
      <div>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          
          <ItemList productList={productList} />
        )}
      </div>
    );
  };
  
export default ItemListContainer;