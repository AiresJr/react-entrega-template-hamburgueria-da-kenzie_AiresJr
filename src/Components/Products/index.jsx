import { CardStyle } from "./cardStyle";
import {  ProductCard} from "./ProductCard";

export const Products = ({ products, addProductToShopping, searchFiltred, search, setSearch }) => {
  const currentProductList = search !== "" ? searchFiltred : products;

  return (
    <CardStyle>
      {currentProductList.map((product) => {
        return <ProductCard key={product.id} product={product} addProductToShopping={addProductToShopping} />;
      })}
    </CardStyle>
  );
};
