import { createContext, useState } from "react";

export const ProductContext = createContext(null)

function Product({children}){
    const [details,setDetails] = useState()
    return(
        <ProductContext.Provider value={{details,setDetails}}>
            {children}
        </ProductContext.Provider>
    )
}

export default Product;