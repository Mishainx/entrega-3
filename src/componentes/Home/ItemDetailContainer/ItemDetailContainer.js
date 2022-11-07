import '../ItemDetailContainer/ItemDetailContainer.scss'
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import CheckButton from '../CheckButton/CheckButton'
import { useState, useEffect, useContext } from "react";
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../../context/CartContext';
import{doc,getDoc, getFirestore} from 'firebase/firestore';
import StockCounter from '../StockCounter/StockCounter'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ItemDetailContainer(){
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [itemCount,setItemCount] = useState()
    const {addItem} = useContext(CartContext)
    const [addedToCart, setAddedToCart] = useState(false)
    const [itemCountLive,setItemCountLive] = useState (0)
    const [loading, setLoading] =useState(true)
    const notify = () => toast("Wow so easy!");
    
    useEffect(() => {
      const db = getFirestore ()

      const queryDoc = doc(db, "ItemCollection", id);
      getDoc(queryDoc).then((snapshot)=>{
        if(snapshot.exists()){
          setProduct({id:snapshot.id,...snapshot.data()})
        }
      getDoc(queryDoc).finally((setLoading(false)))
      });
    }, [id]);


    function getData(data,subtotal){
        setItemCount(data)
        setAddedToCart(true)
        notify()
      if(data>0){
        addItem(product.id,product.name,product.price,data,product.img,subtotal)}
    }

    function getItemCountLive(data){
      setItemCountLive(data)
 
    }


    return (
      <div className="ItemDetailContainer">  
        {loading ?
        <></>
          :
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
        <ToastContainer />
        </div>
          
          }

        </div>
 );
  };
export default ItemDetailContainer;