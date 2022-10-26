import Item from "../Item/Item";
import "../ItemList/ItemList.scss"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ItemList({productList}) {
    const {category} = useParams();
    return( 
    <div className="ItemList">
        {category 
        ? productList
        .filter((product)=>product.category.includes(category))
        .map((product,i)=>(
            <Link key={i} to={`item/${product.id}`}><Item
            img={product.img}
            name={product.name}
            key={i}
            id={product.id}
            price={product.price}
            category={product.category}>

            </Item></Link>        ))
        : productList
        .map((product,i)=>(
            <Link key={i} to={`item/${product.id}`}>
                <Item
            img={product.img}
            name={product.name}
            key={i}
            id={product.id}
            price={product.price}
            category={product.category}
            />
            </Link>
        ))
        }
    </div>
    
  );
}
export default ItemList;