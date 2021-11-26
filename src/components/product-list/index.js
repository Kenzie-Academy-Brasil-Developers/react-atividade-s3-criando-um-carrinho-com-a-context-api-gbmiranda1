import Button from "../button";

import { useContext } from "react";

import { CatalogueContext } from "../../Providers/catalogue";
import {CartContext} from "../../Providers/cart"

//import {Container, List} from "./styles"

const ProductList = ({type}) =>{
    const {catalogue} = useContext(CatalogueContext);
    const {cart} = useContext(CartContext);
    console.log(catalogue)
    return(
        <ul>
            {type === "catalogue" && 
                catalogue.map((item, index) =>(
                    <li key={index}>
                        {item.name} <Button type={type} item={item}></Button>
                    </li>
        
            ))}

            {type === "cart" && 
                cart.map((item, index) =>(
                    <li key={index}>
                        {item.name} <Button type={type} item={item}></Button>
                    </li>
        
            ))}
        </ul>

    )
}

export default ProductList;