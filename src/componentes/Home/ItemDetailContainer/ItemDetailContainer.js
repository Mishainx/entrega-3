import '../ItemDetailContainer/ItemDetailContainer.scss'
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import CheckButton from '../CheckButton/CheckButton'
import { useState, useEffect, useContext } from "react";
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../../context/CartContext';
import{doc,getDoc, getFirestore} from 'firebase/firestore';
import StockCounter from '../StockCounter/StockCounter'

function ItemDetailContainer(){
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [itemCount,setItemCount] = useState()
    const {addItem,isInCart} = useContext(CartContext)
    const [addedToCart, setAddedToCart] = useState(false)
    const [itemCountLive,setItemCountLive] = useState (0)
    const [loading, setLoading] = useState(true)
    
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
        setAddedToCart(true)
      if(data>0){
        addItem(product.id,product.name,product.price,data,product.img,subtotal)}
    }

    function getItemCountLive(data){
      setItemCountLive(data)
 
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
          <StockCounter stock={product.stock}/>
          {!addedToCart ? <ItemCount getData={getData} stock={product.stock} getItemCountLive={getItemCountLive}/> : <CheckButton/>}
        </div>
      </div>
 );
  };
export default ItemDetailContainer;