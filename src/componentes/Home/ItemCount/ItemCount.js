import { useState,useEffect,useContext} from 'react';
import '../ItemCount/ItemCount.scss'
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import { useParams } from 'react-router-dom';

function ItemCount({stock,initial,getData,getItemCountLive}) {
    const [count, setCount] = useState(0);
    const {cartList, isInCart} = useContext(CartContext)
    const {id} = useParams();
   
    useEffect(() => {
        {initial ? setCount(initial) : setCount(0)}},[])

    function clickCount (){
        if(!isInCart(id) && count <stock){
            setCount(count+1)
            getItemCountLive(count  )
            
        }
        else{
            const cartCount = cartList.find((product) => product.id == parseInt(id)).quantity
            if(stock-cartCount-count>0 ){
                setCount(count+1)
                getItemCountLive(count)      
            }
        }
    }



    function clickRest(){
        if(count>0){
            setCount(count-1)
        }
    }


    return( 
    <div className="ItemCount">
        <div className='ItemCountContainer'>       
            <button className="CountButton" onClick={()=> clickRest()}>
                -
            </button>
            <div id="contador">
                {count}
            </div>

            <button className="CountButton" onClick={()=>clickCount()}>
                +
            </button> 
        </div>
        <div>
            <Link onClick={()=>getData(count)}><button onClick={()=>setCount(0)} className='BuyButton'> Agregar al carrito</button></Link>
        </div>        
    </div>
    )
};
  
export default ItemCount;
