import { useState } from 'react';
import '../ItemCount/ItemCount.scss'

function ItemCount() {
    const [contador, setContador] = useState(0)

    function clickCount (){
        setContador(contador + 1)
    }

    function clickRest(){
        if(contador>0){
            setContador(contador-1)
        }
    }

    return( 
    <div className="ItemCount">
        <button className="CountButton" onClick={()=> clickRest()}>
            -
        </button>
        <div>
            {contador}
        </div>

        <button className="CountButton" onClick={()=>clickCount()}>
            +
        </button>
         
    </div>
    )
};
  
export default ItemCount;