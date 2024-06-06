import { createContext,useEffect,useState } from "react";

export const UserContext =  createContext();

const UserProvider = ({children})=>{
    const [Category, setCategory] = useState();
    const [searchingItem, setsearchingItem] = useState()
    const [sub_total, setsub_total] = useState(0)
    const [cart, setcart] = useState([])

    const updateQuantity = (id, delta) => {
        setcart((prevCart) => {
          const updatedCart = prevCart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + delta } : item
          );
    
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          console.log(updatedCart);  // Moved before return
          return updatedCart;
        });
      };
      const removeProduct = (id) => {
        setcart((prevCart) => {
          const updatedCart = prevCart.filter((item) => item.id !== id);
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          return updatedCart;
        });
      };
    

    return <UserContext.Provider value={{Category,setCategory,searchingItem,setsearchingItem,setsub_total,sub_total,cart,setcart,updateQuantity,removeProduct}}>{children}</UserContext.Provider>
}
export default UserProvider;