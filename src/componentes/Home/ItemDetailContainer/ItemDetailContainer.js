import '../ItemDetailContainer/ItemDetailContainer.scss'
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import { useState, useEffect } from "react";
import {getProductById} from '../../../screens/Home/Products'
import ItemCount from '../ItemCount/ItemCount';
import BuyButton from '../../BuyButton/BuyButton';


function ItemDetailContainer(){
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
      setProduct(getProductById(id-1));
    }, []);

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
      <ItemCount/>
      <BuyButton/>
    </div>
 </div>
 );
  };
export default ItemDetailContainer;