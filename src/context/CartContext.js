import {createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
   const [cartList, setCartList] = useState([]);

   const addItem = (id,name,price,quantity,img) =>{
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
        setCartList([...cartList, {id:id,name:name,price:price,quantity:quantity,img:img  }])
    }
   }

   const removeList = () =>{
   }

   const deleteItem =(id) => setCartList(cartList.filter((product)=>product.id != id))

   const isInCart = (id) => cartList.some(product => product.id === id);



   
 return (
   <CartContext.Provider value= {{addItem, deleteItem,removeList,cartList,isInCart}}>
       {children}
   </CartContext.Provider>
 )
}

export default CartContextProvider;    