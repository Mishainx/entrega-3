import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext} from 'react';
import { CartContext } from '../../../context/CartContext';
import '../CartWidget/CartWidget.scss'

function CartWidget() {
  const {cartList,totalItems} = useContext(CartContext)

    return (
      <div className="CartWidget">
        {cartList.length>0?
          <div>
          <FontAwesomeIcon className='fullCart' icon= {faCartShopping } size="lg"/>
          <p className='cartNumber'>{`${totalItems()}`}</p>
          </div>:
          <div><FontAwesomeIcon className='fullCart' icon= {faCartShopping } size="lg"/></div>
        }
      </div>
    );
  }

export default CartWidget
