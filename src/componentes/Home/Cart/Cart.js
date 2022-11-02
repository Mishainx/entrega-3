import { useContext} from 'react';
import { CartContext } from '../../../context/CartContext';
import '../Cart/Cart.scss'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function Cart(){
    const {cartList,deleteItem,totalAmount} = useContext(CartContext)
    
    function hola(){
        if(1+1==2){
        }
        console.log(cartList)
    }

    hola()
    return(
        <div>
            {cartList.length > 0 ?
            <div>{cartList.map((product,i)=>
            <div key={i} className="ItemList">
                <img src={`${product.img}`}/>
                <h2>{`${product.name}`}</h2>
                <p>{`${product.quantity}`}</p>
                <p>{`${product.price}`}</p>
                <p>{`${product.subtotal}`}</p>
                <FontAwesomeIcon className='trash' icon= {faTrash } size="lg" onClick={()=>deleteItem(product.id)}/>             
            </div>
            
            )}
            <p>Su total es {`${totalAmount()}`}</p>
            </div>
            


        :
        <div className='emptyCart'>
            <p>Aún no ha agregado items a su carrito</p>
            <Link to="/"><button>Seguir comprando</button></Link>
        </div>
        }
            
        </div>

        

       )
}

export default Cart