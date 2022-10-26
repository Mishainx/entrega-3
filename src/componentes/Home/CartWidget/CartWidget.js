import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
    return (
      <div className="CartWidget">
        <FontAwesomeIcon icon= {faCartShopping } size="lg"/>
      </div>
    );
  }

export default CartWidget
