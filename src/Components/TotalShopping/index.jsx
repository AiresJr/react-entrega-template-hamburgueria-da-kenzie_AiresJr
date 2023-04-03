import { MainDiv } from "./totalStyle";

export const TotalShopping = ({ removeAllProductFromShopping, shoppingList }) => {
  const totalPrice = () => {
    const mapResult = shoppingList.map((product) => {
      return product.price;
    });

    const reduceValue = mapResult.reduce((previusValue, currentValue) => previusValue + currentValue, 0);

    return reduceValue;
  };

  return (
    <>
      {totalPrice() == 0 ? (
        <p></p>
      ) : (
        <MainDiv>
          <div>
            <nav>Total</nav>
            <p>R${totalPrice().toFixed(2)} </p>
          </div>
          <button onClick={() => removeAllProductFromShopping()}>Remover todos</button>
        </MainDiv>
      )}
    </>
  );
};
