export const Shopping = ({ shoppingList, removeProductFromShopping }) => {
  return (
    <ul>
      {shoppingList.map((product) => (
        <li key={product.id}>
          <img src={product.img} alt={product.name} />
          <h2>{product.name}</h2>
          <button onClick={() => removeProductFromShopping(product.id)}>Remover</button>
          <nav>{product.category}</nav>
        </li>
      ))}
    </ul>
  );
};
