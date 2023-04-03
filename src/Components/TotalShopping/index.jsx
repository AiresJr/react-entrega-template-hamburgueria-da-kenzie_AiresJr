export const TotalShopping = ({ removeAllProductFromShopping, shoppingList }) => {
  const totalPrice = () => {
    const mapResult = shoppingList.map((product) => {
      return product.price;
    });

    const reduceValue = mapResult.reduce((previusValue, currentValue) => previusValue + currentValue, 0);

    return reduceValue;
  };

  return (
    <div>
      <h3>Total</h3>
      <nav>R${totalPrice()} </nav>
      <button onClick={() => removeAllProductFromShopping()}>Remover todos</button>
    </div>
  );
};
