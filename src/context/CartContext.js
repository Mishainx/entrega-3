import {createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
   const [cartList, setCartList] = useState([]);

   const addItem = (id,name,price,quantity,img,subtotal) =>{
    if(isInCart(id) == true){
      const newCart = cartList.map(i=>{
        if(i.id === id){
          return{...i, quantity: i.quantity+quantity}
        }
        return i;
      })
    setCartList(newCart)
    }
     
    else{
        setCartList([...cartList, {id:id,name:name,price:price,quantity:quantity,img:img,subtotal:price*quantity  }])
    }
   }

   const removeList = () =>{
   }

   const deleteItem =(id) => setCartList(cartList.filter((product)=>product.id != id))

   const isInCart = (id) => cartList.some(product => product.id === id);

   const totalItems = (id) => cartList.reduce((acu , product) => acu + parseInt(product.quantity)  , 0);
   
   const totalAmount = ()=> cartList.reduce((acu , product) => acu + parseInt(product.subtotal) , 0);


   
 return (
   <CartContext.Provider value= {{addItem, deleteItem,removeList,cartList,isInCart,totalItems,totalAmount}}>
       {children}
   </CartContext.Provider>
 )
}

export default CartContextProvider;    