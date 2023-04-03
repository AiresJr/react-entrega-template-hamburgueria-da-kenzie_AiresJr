import { StyledButtonGreen } from "../../../styles/buttons";

export const ProductCard = ({ product, addProductToShopping }) => {
  return (
    <li>
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <nav>{product.category}</nav>
      <h3>R${product.price.toFixed(2)}</h3>
      <div>
      <StyledButtonGreen onClick={() => addProductToShopping(product)}>Adicionar</StyledButtonGreen>
      </div>
    </li>
  );
};
